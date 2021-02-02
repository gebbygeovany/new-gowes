import React, { useContext, useState } from 'react';
import { Card, Image, Grid, Button, Form, TextArea, Icon } from 'semantic-ui-react';
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks';
import { Link,withRouter  } from 'react-router-dom';


import { AuthContext } from '../context/auth';


function MyStoreDetailsCard(props) {

    const context = useContext(AuthContext);

    const { loading, data } = useQuery(FETCH_USER_QUERY, {
        variables: {
            userId: context.user.id
        }
    })
    const { getUser: currentUser } = data ? data : []

    const [avatar] = useState('https://react.semantic-ui.com/images/avatar/large/molly.png');


    return (
        <>
            {loading ? (
                <h1>Loading posts..</h1>
            ) : (

                    <Card fluid style={{ boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)' }}>
                        <Card.Content header='My Store Detail' />
                        <Card.Content>
                            <Grid stackable >
                                <Grid.Column width={5}>
                                    <Card centered>
                                        <Image src={loading ? avatar : currentUser.seller.avatar} wrapped ui={false} />
                                    </Card>
                                </Grid.Column>
                                <Grid.Column width={11}>
                                    <Form size='small' noValidate className={loading ? "loading" : ""}>
                                        <Form.Input
                                            fluid
                                            placeholder='Store Name'
                                            label='Store Name'
                                            value={currentUser.seller.username}
                                            name="username"
                                        />
                                        <Form.Input
                                            fluid
                                            iconPosition='left'
                                            placeholder='Store Description'
                                            label='Description'
                                            control={TextArea}
                                            value={currentUser.seller.description}
                                            name="description"
                                        />
                                        <Button color='secondary' size='small' as={Link} to="/editMyStoreDetailsCard">
                                            <Icon name="edit outline"></Icon>
                                            Edit
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
            seller{
            id
            username
            avatar
            description
            description
            createdAt
            }
        }
    }
`

export default withRouter(MyStoreDetailsCard)