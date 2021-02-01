const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { UserInputError } = require('apollo-server')
const checkAuth = require('../../util/check-auth')

const { SECRET_KEY } = require('../../config')
const User = require('../../models/User')
const { validateRegisterInput, validateLoginInput, validateUserProfileInput } = require('../../util/validators')

function generateToken(user) {
    console.log(user.buyer);
    return jwt.sign(
        {
            id: user.id,
            name: user.buyer.name,
            email: user.email
        },
        SECRET_KEY,
        { expiresIn: '1h' })
}

module.exports = {
    Query: {
        async getUser(_, { userId }) {
            try {
                const user = await User.findById(userId)
                if (user) {
                    return user
                } else {
                    throw new Error('User not found')
                }
            } catch (err) {
                throw new Error(err)
            }
        },

        async getSeller(_, { sellerId }) {
            console.log(sellerId)
            try {
                const user = await User.findOne({"seller.id": sellerId })
                if (user) {
                    return user
                } else {
                    throw new Error('Seller not found')
                }
            } catch (err) {
                throw new Error(err)
            }
        }
    },
    Mutation: {

        async login(_, { email, password }) {
            const { valid, errors } = validateLoginInput(email, password)

            if (!valid) {
                throw new UserInputError('Wrong Credentials', { errors })
            }

            const user = await User.findOne({ email })

            if (!user) {
                errors.general = 'User not found'
                throw new UserInputError('User not found', { errors })
            }

            const match = await bcrypt.compare(password, user.password)

            if (!match) {
                errors.general = 'Wrong password'
                throw new UserInputError('Wrong password', { errors })
            }
            const token = generateToken(user)

            return {
                ...user._doc,
                id: user._id,
                token
            }

        },

        async register(_, { registerInput: { name, password, confirmPassword, email } }, context, info) {
            // Validate user data
            // Make Sure User Already exist
            // hash password and create auth token

            const user = await User.findOne({ email })
            if (user) {
                throw new UserInputError('Email is taken', {
                    errors: {
                        username: 'This email is taken'
                    }
                })
            }

            const { valid, errors } = validateRegisterInput(name, password, confirmPassword, email)
            if (!valid) {
                throw new UserInputError('Errors', { errors })
            }

            password = await bcrypt.hash(password, 12)

            const newUser = new User({
                email: email,
                password: password,
                phone:'',
                address:'',
                balance:0,
                buyer: {
                    name: name,
                    birthDate: '',
                    avatar: '',
                    createdAt: new Date().toISOString()
                },
                seller: {
                    username: '',
                    avatar: '',
                    description: '',
                    createdAt: ''
                }
            })

            const res = await newUser.save()

            const token = generateToken(res)

            return {
                ...res._doc,
                id: res._id,
                token
            }
        },

        async updateUserProfile(_, { userProfileInput: { name, email, phone, birthDate, avatar } }, context) {
            const userCache = checkAuth(context)

            const user = await User.findOne({ email })
            if (user && user._id.toString() !== userCache.id) {
                throw new UserInputError('Email is taken', {
                    errors: {
                        username: 'This email is taken'
                    }
                })
            }

            const { valid, errors } = validateUserProfileInput(name, email, phone)
            if (!valid) {
                throw new UserInputError('Errors', { errors })
            }

            const updatedUser = await User.findOneAndUpdate(
                { _id: userCache.id },
                {
                    email: email,
                    phone: phone,
                    "buyer.name": name,
                    "buyer.birthDate": birthDate,
                    "buyer.avatar": avatar
                },
                { new: true }
                );
            console.log(updatedUser._doc)
            return {
                ...updatedUser._doc,
                id: updatedUser._id
            };
        },
    }
}