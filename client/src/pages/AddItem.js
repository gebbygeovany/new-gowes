import React, { useContext, useState } from 'react'
import { Card, Image, Grid, Button, Form, TextArea, Icon } from 'semantic-ui-react';
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import { AuthContext } from '../context/auth'
import { useForm } from '../util/hooks'

function AddItem(props) {

    const context = useContext(AuthContext)
    const [errors, setErrors] = useState({})

    const category = [
        { key: 'Sparepart', text: 'Sparepart', value: 'sparepart' },
        { key: 'Accessories', text: 'Accessories', value: 'accessories' },
        { key: 'Apparel', text: 'Apparel', value: 'apparel' },
    ]
    const condition = [
        { key: 'new', text: 'New', value: 'new' },
        { key: 'used', text: 'Used', value: 'used' },
    ]

    const { onChange, onSubmit, values } = useForm(registerUser, {
        name: '',
        password: '',
        confirmPassword: '',
        email: '',
    })

    const [addUser, { loading }] = useMutation(ADD_ITEM_MUTATION, {
        update(_, { data: { register: userData } }) {
            context.login(userData)
            props.history.push('/')
        },
        onError(err) {
            setErrors(err.graphQLErrors[0].extensions.exception.errors);
        },
        variables: values
    })

    function registerUser() {
        addUser()
    }



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
                        <Form size='small' onSubmit={onSubmit} noValidate className={loading ? "loading" : ""} noValidate>
                            <Form.Input
                                fluid
                                placeholder='Item Name'
                                label='Item Name'
                                value={values.name}
                                name="name"
                            />
                            <Form.Group inline widths='equal'>
                                <Form.Select
                                    fluid
                                    placeholder='Category'
                                    label='Category'
                                    options={category}
                                    value={values.category}
                                    onChange={onChange}
                                    name="category"
                                />
                                <Form.Select
                                    fluid
                                    placeholder='Condition'
                                    label='Condition'
                                    options={condition}
                                    value={values.condition}
                                    name="condition"
                                />
                            </Form.Group>
                            <Form.Input
                                fluid
                                iconPosition='left'
                                placeholder='Store Description'
                                label='Description'
                                control={TextArea}
                                value={values.description}
                                name="description"
                            />
                            <Form.Group inline widths='equal'>
                                <Form.Input
                                    fluid
                                    placeholder='Rp'
                                    label='Price'
                                    value={values.price}
                                    name="price"
                                />
                                <Form.Input
                                    fluid
                                    placeholder='Amount Item'
                                    label='Amount Item'
                                    value={values.stock}
                                    name="stock"
                                />
                            </Form.Group>
                            <Form.Group inline widths='equal'>
                                <Form.Input
                                    fluid
                                    placeholder='kg'
                                    label='Weight'
                                    value={values.weight}
                                    name="weight"
                                />
                                <Form.Input
                                    fluid
                                    placeholder='cm'
                                    label='Length'
                                    value={values.length}
                                    name="length"
                                />
                                <Form.Input
                                    fluid
                                    placeholder='cm'
                                    label='Width'
                                    value={values.width}
                                    name="width"
                                />
                                <Form.Input
                                    fluid
                                    placeholder='cm'
                                    label='Height'
                                    value={values.height}
                                    name="height"
                                />
                            </Form.Group>
                            <Button
                                fluid
                                color='teal'
                                size='small'
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

const ADD_ITEM_MUTATION = gql`
  mutation register(
    $name: String!
    $price: String!
    $stock: String!
    $category: String!
    $condition: String!
    $category: String!
    $weight: String!
    $description: String!
    $length: String!
    $width: String!
    $height: String!
  ) {
    addItem(addItemInput:{
        name:"Stang Sepeda BMX",
        price:435000,
        stock: 2,
        category: "Komponen Sepeda",
        condition: "Bekas",
        weight: "1 kg",
        description:"Warna merah"
        dimension: {
            length: "100 cm",
            width: "10 cm",
            height: "100 cm"
        },
        images: [{
            downloadUrl:""
        }]
    }){
        id
        name
        price
        stock
        category
        condition
        weight
        description
        dimension {
        length
        width
        height
        }
        images {
        downloadUrl
        }
        createdAt
    }
    }
  
`

export default AddItem