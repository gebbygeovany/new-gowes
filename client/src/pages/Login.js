import React, { useContext, useState } from 'react'
import { Button, Form, Grid, Header, Segment, Message } from 'semantic-ui-react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'


import { AuthContext } from '../context/auth'
import { useForm } from '../util/hooks'

function Login(props) {
    const context = useContext(AuthContext)
    const [errors, setErrors] = useState({})

    const { onChange, onSubmit, values } = useForm(loginUserCallback, {
        username: '',
        password: '',
    })

    const [loginUser, { loading }] = useMutation(LOGIN_USER, {
        update(_, { data: { login: userData } }) {
            context.login(userData)
            props.history.push('/')
        },
        onError(err) {
            setErrors(err.graphQLErrors[0].extensions.exception.errors);
        },
        variables: values
    })

    function loginUserCallback() {
        loginUser()
    }

    return (
        <Grid textAlign='center' style={{ height: '100vh', marginTop: 100 }}>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header color='standard' textAlign='center'>
                    <span className="logoLogin">Login to your account</span>
                </Header>
                <Form size='large' onSubmit={onSubmit} noValidate className={loading ? "loading" : ""}>
                    <Segment style={{boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)'}}>
                        <Form.Input
                            fluid
                            icon='user'
                            iconPosition='left'
                            placeholder='Username'
                            name="username"
                            value={values.username}
                            error={errors.username ? true : false}
                            onChange={onChange}
                        />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                            name="password"
                            value={values.password}
                            error={errors.password ? true : false}
                            onChange={onChange}
                        />

                        <Button color='secondary' fluid size='large'>
                            Login
                        </Button>
                    </Segment>
                </Form>
                <Message>
                    New to us? <a href='/register'>Sign Up</a>
                </Message>
                {Object.keys(errors).length > 0 && (
                <div className='ui error message'>
                    <ul className="list">
                        {Object.values(errors).map(value => (
                            <li key={value}>{value}</li>
                        ))}
                    </ul>
                </div>
            )}
            </Grid.Column>
        </Grid>
    )
}

const LOGIN_USER = gql`
  mutation login(
    $username: String!
    $password: String!
  ) {
    login(
        username: $username
        password: $password
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`

export default Login;