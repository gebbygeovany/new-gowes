import React from 'react'
import { Card, Image, Grid, Button, Form } from 'semantic-ui-react';




function ProfileCard() {

    return (
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
                                value="User"
                                name="name"
                            />
                            <Form.Input
                                fluid
                                icon='mail'
                                iconPosition='left'
                                placeholder='Email'
                                label='Email'
                                value="user@email.com"
                                name="email"
                            />
                            <Form.Input
                                fluid
                                icon='phone'
                                iconPosition='left'
                                placeholder='Phone Number'
                                label='Phone Number'
                                value="081809195559"
                                name="phone"
                            />
                            <Form.Input
                                fluid
                                icon='calendar'
                                iconPosition='left'
                                placeholder='Birth Date'
                                label='Birth Date'
                                name="phone"
                                type="date"
                            />
                            <Form.Input
                                fluid
                                icon='map marker alternate'
                                iconPosition='left'
                                placeholder='Address'
                                label='Address'
                                name="address"
                                value="Jalan Gading nomor 11b"
                            />
                            <Button color='teal' size='small'>
                                Save
                                </Button>
                        </Form>
                    </Grid.Column>
                </Grid>


            </Card.Content>
        </Card>
    )
}

export default ProfileCard