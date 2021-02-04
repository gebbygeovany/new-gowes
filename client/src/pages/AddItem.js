import React from 'react'
import { Card, Image, Grid, Button, Form, TextArea, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


function AddItem(params) {

    const category = [
        { key: 'm', text: 'Category 1', value: 'male' },
        { key: 'f', text: 'Category 2', value: 'female' },
        { key: 'o', text: 'Category 3', value: 'other' },
    ]
    const condition = [
        { key: 'm', text: 'New', value: 'male' },
        { key: 'f', text: 'Used', value: 'female' },
    ]

    return (
        <Grid centered stackable>
            <Grid.Column width={12}>
                <Card fluid>
                    <Card.Content header='Item Image' />
                    <Card.Content>
                        <Image
                            rounded
                            src='https://react.semantic-ui.com/images/avatar/large/molly.png'
                            size='small'
                            style={{ marginRight: 5 }}
                        />
                        <Image
                            rounded
                            src='https://react.semantic-ui.com/images/avatar/large/molly.png'
                            size='small'
                            style={{ marginRight: 5 }}
                        />
                        <Image
                            rounded
                            src='https://react.semantic-ui.com/images/avatar/large/molly.png'
                            size='small'
                            style={{ marginRight: 5 }}
                        />
                    </Card.Content>
                    <Card.Content extra>
                        <Button
                            fluid
                            color='standard'
                            size='small'
                        >
                            <Icon name="plus"></Icon>
                            add Image
                            </Button>
                    </Card.Content>
                </Card>
                <Card fluid>
                    <Card.Content header='Item Details' />
                    <Card.Content extra>
                        <Form size='small' noValidate>
                            <Form.Input
                                fluid
                                placeholder='Item Name'
                                label='Item Name'
                                // value={currentUser.seller.username}
                                name="itemName"
                            />
                            <Form.Group inline widths='equal'>
                                <Form.Select
                                    fluid
                                    placeholder='Category'
                                    label='Category'
                                    options={category}
                                    // value={currentUser.seller.username}
                                    name="category"
                                />
                                <Form.Select
                                    fluid
                                    placeholder='Condition'
                                    label='Condition'
                                    options={condition}
                                    // value={currentUser.seller.username}
                                    name="condition"
                                />
                            </Form.Group>
                            <Form.Input
                                fluid
                                iconPosition='left'
                                placeholder='Store Description'
                                label='Description'
                                control={TextArea}
                                // value={currentUser.seller.description}
                                name="description"
                            />
                            <Form.Group inline widths='equal'>
                                <Form.Input
                                    fluid
                                    placeholder='Rp'
                                    label='Price'
                                    // value={currentUser.seller.username}
                                    name="price"
                                />
                                <Form.Input
                                    fluid
                                    placeholder='Amount Item'
                                    label='Amount Item'
                                    // value={currentUser.seller.username}
                                    name="amuntItem"
                                />
                            </Form.Group>
                            <Form.Group inline widths='equal'>
                                <Form.Input
                                    fluid
                                    placeholder='kg'
                                    label='Weight'
                                    // value={currentUser.seller.username}
                                    name="weight"
                                />
                                <Form.Input
                                    fluid
                                    placeholder='cm'
                                    label='Length'
                                    // value={currentUser.seller.username}
                                    name="length"
                                />
                                <Form.Input
                                    fluid
                                    placeholder='cm'
                                    label='Width'
                                    // value={currentUser.seller.username}
                                    name="width"
                                />
                                <Form.Input
                                    fluid
                                    placeholder='cm'
                                    label='Height'
                                    // value={currentUser.seller.username}
                                    name="height"
                                />
                            </Form.Group>
                            <Button
                                fluid
                                color='teal'
                                size='small'
                                as={Link}
                                to="/editMyStoreDetailsCard"
                            >
                                Save Item
                            </Button>
                        </Form>
                    </Card.Content>
                </Card>
            </Grid.Column>
        </Grid>
    )
}

export default AddItem