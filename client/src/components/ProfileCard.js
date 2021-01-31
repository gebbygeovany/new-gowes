import React, { useContext } from 'react';
import { Card, Image, Grid, Button, Form } from 'semantic-ui-react';
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks';


import { AuthContext } from '../context/auth';



function ProfileCard() {

    const { user } = useContext(AuthContext);

    const { loading, data } = useQuery(FETCH_USER_QUERY, {
        variables: {
            userId: user.id
        }
    })
    const { getUser: currentUser } = data ? data : []

    // console.log(currentUser.buyer.name)

    return (
        <>
            {loading ? (
                <h1>Loading posts..</h1>
            ) : (
                    <Card fluid style={{ boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)' }}>
                        <Card.Content header='Profile Details' />
                        <Card.Content>
                            <Grid stackable >
                                <Grid.Column width={5}>
                                    <Card centered>
                                        <Image src='https://react.semantic-ui.com/images/avatar/large/molly.png' wrapped ui={false} />
                                        <Card.Content extra>
                                            <Button fluid>Change Avatar</Button>
                                        </Card.Content>
                                    </Card>
                                </Grid.Column>
                                <Grid.Column width={11}>
                                    <Form size='small'>
                                        <Form.Input
                                            fluid
                                            icon='user'
                                            iconPosition='left'
                                            placeholder='Name'
                                            label='Name'
                                            value= {currentUser.buyer.name}
                                            name="name"
                                        />
                                        <Form.Input
                                            fluid
                                            icon='mail'
                                            iconPosition='left'
                                            placeholder='Email'
                                            label='Email'
                                            value={currentUser.email}
                                            name="email"
                                        />
                                        <Form.Input
                                            fluid
                                            icon='phone'
                                            iconPosition='left'
                                            placeholder='Phone Number'
                                            label='Phone Number'
                                            value={currentUser.phone}
                                            name="phone"
                                        />
                                        <Form.Input
                                            fluid
                                            icon='calendar'
                                            iconPosition='left'
                                            placeholder='Birth Date'
                                            label='Birth Date'
                                            name="phone"
                                            value={currentUser.buyer.birthDate}
                                            type="date"
                                        />
                                        <Form.Input
                                            fluid
                                            icon='map marker alternate'
                                            iconPosition='left'
                                            placeholder='Address'
                                            label='Address'
                                            name="address"
                                            value={currentUser.address}
                                        />
                                        <Button color='teal' size='small'>
                                            Save
                                </Button>
                                    </Form>
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

export default ProfileCard