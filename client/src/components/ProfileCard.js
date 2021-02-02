import React, { useContext, useState } from 'react';
import { Card, Image, Grid, Button, Form } from 'semantic-ui-react';
import gql from 'graphql-tag'
import { useQuery, useMutation } from '@apollo/react-hooks';
import { storage } from '.././firebase';
import { useForm } from '../util/hooks'
import { Link } from 'react-router-dom';




import { AuthContext } from '../context/auth';



function ProfileCard(props) {

    const context = useContext(AuthContext);
    const [errors, setErrors] = useState({})

    const [isSaved, setSave] = useState(false)


    const { loading, data } = useQuery(FETCH_USER_QUERY, {
        variables: {
            userId: context.user.id
        }
    })
    const { getUser: currentUser } = data ? data : []

    // const {
    //     loading,
    //     data: { getUser: currentUser }
    // } = useQuery(FETCH_USER_QUERY, {
    //     variables: {
    //         userId: context.user.id
    //     }
    // });

    let userObj = {
        avatar: '',
        name: '',
        email: '',
        phone: '',
        birthDate: ''
    }

    let { onChange, onSubmit, values } = useForm(updateUserProfile, userObj)

    // console.log("user data", currentUser)

    const fileInputRef = React.createRef();
    const [avatar, setAvatar] = useState('https://react.semantic-ui.com/images/avatar/large/molly.png');

    const fileChange = e => {
        const image = e.target.files[0]
        if (image) {
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            uploadTask.on(
                "state_changed",
                snapshot => { },
                error => { console.log(error) },
                () => {
                    storage
                        .ref("images")
                        .child(image.name)
                        .getDownloadURL()
                        .then(url => {
                            setAvatar(url);
                            console.log(url);
                        });
                });
        }
    };
    console.log("File chosen --->", avatar);

    const [updateProfile, { }] = useMutation(UPDATE_PROFILE_MUTATION, {
        update(_, { data: { updateUserProfile: userData } }) {
            userData.name = userData.buyer.name;
            context.login(userData)
            setSave(true)
            setErrors({})
        },
        onError(err) {
            setErrors(err.graphQLErrors[0].extensions.exception.errors);
            setSave(true)
        },
        variables: values
    })



    function updateUserProfile() {
        updateProfile()
    }



    // console.log(currentUser.buyer.name)

    const showMessage = () => {
        if (isSaved) {
            console.log(errors)
            if (Object.keys(errors).length > 0) {
                return (<div className='ui error message'>
                    <ul className="list">
                        {Object.values(errors).map(value => (<li key={value}>{value}</li>))}
                    </ul>
                </div>)
            } else {
                return (
                    <div className='ui positive message'>
                        <ul className="list">
                            Updated
                        </ul>
                    </div>
                )
            }

        } else {
            return <div></div>
        }
    }

    return (
        <>
            {loading ? (
                <h1>Loading posts..</h1>
            ) : (
                    <Card fluid style={{ boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)' }} className={loading ? "loading" : ""}>
                        <Card.Content header='Profile Details' />
                        <Card.Content>
                            <Grid stackable >
                                <Grid.Column width={5}>
                                    <Card centered>
                                        <Image src={avatar} wrapped ui={false} />
                                        <Card.Content extra>
                                            <Form>
                                                <Button fluid onClick={() => fileInputRef.current.click()}>Change Avatar</Button>
                                                <input ref={fileInputRef} type="file" hidden onChange={fileChange} />
                                            </Form>
                                        </Card.Content>
                                    </Card>
                                </Grid.Column>
                                <Grid.Column width={11}>
                                    <Form size='small' onSubmit={onSubmit} noValidate className={loading ? "loading" : ""}>
                                        <Form.Input
                                            fluid
                                            icon='user'
                                            iconPosition='left'
                                            placeholder='Name'
                                            label='Name'
                                            value={loading ? values.name : ''}
                                            name="name"
                                            onChange={onChange}
                                            error={errors.name ? true : false}
                                        />
                                        <Form.Input
                                            fluid
                                            icon='mail'
                                            iconPosition='left'
                                            placeholder='Email'
                                            label='Email'
                                            value={values.email}
                                            name="email"
                                            onChange={onChange}
                                            error={errors.email ? true : false}

                                        />
                                        <Form.Input
                                            fluid
                                            icon='phone'
                                            iconPosition='left'
                                            placeholder='Phone Number'
                                            label='Phone Number'
                                            value={values.phone}
                                            name="phone"
                                            onChange={onChange}
                                            error={errors.phone ? true : false}

                                        />
                                        <Form.Input
                                            fluid
                                            icon='calendar'
                                            iconPosition='left'
                                            placeholder='Birth Date'
                                            label='Birth Date'
                                            name="birthDate"
                                            value={values.date}
                                            type="date"
                                            onChange={onChange}

                                        />
                                        <Form.Input
                                            fluid
                                            icon='map marker alternate'
                                            iconPosition='left'
                                            placeholder='Address'
                                            label='Address'
                                            name="address"
                                            value={values.address}
                                            onChange={onChange}

                                        />
                                        <Button color='teal' size='small'>
                                            Save
                                        </Button>
                                    </Form>
                                    {showMessage()}
                                </Grid.Column>
                            </Grid>


                        </Card.Content>
                    </Card>
                )}
        </>
    )
}
const FETCH_USER_QUERY = gql`
    query getUser($userId: ID!) {
        getUser(userId: $userId) {
            id
            email
            phone
            address
            balance
            buyer{
                name
                birthDate
                avatar
            }
        }
    }
`

const UPDATE_PROFILE_MUTATION = gql`
    mutation updateUserProfile(
        $avatar: String!
        $name: String!
        $email: String!
        $phone: String!
        $birthDate: String!
    ){
    updateUserProfile(
        userProfileInput:{
            avatar: $avatar
            name: $name
            email: $email
            phone: $phone
            birthDate: $birthDate
            }
        ) {
        id
        email
        phone
        address
        balance
        token
        buyer {
            name
            birthDate
            avatar
        }
    }
    }
`

export default ProfileCard