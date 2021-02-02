import React, { useContext, useState } from 'react';
import { Card, Image, Grid, Button, Form, TextArea } from 'semantic-ui-react';
import gql from 'graphql-tag'
import { useQuery, useMutation } from '@apollo/react-hooks';
import { storage } from '../firebase';
import { useForm } from '../util/hooks'
import { Link } from 'react-router-dom';

function MyStoreDetailsCard(props) {

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


    return (
        <>
            <Card fluid style={{ boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)' }}>
                <Card.Content header='My Store Detail' />
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
                            <Form size='small'>
                                <Form.Input
                                    fluid
                                    placeholder='Store Name'
                                    label='Store Name'
                                // value={loading ? values.name : ''}
                                // name="name"
                                // onChange={onChange}
                                // error={errors.name ? true : false}
                                />
                                <Form.Input
                                    fluid
                                    iconPosition='left'
                                    placeholder='Store Description'
                                    label='Description'
                                    control={TextArea}
                                // value={values.email}
                                // name="email"
                                // onChange={onChange}
                                // error={errors.email ? true : false}

                                />
                                <Button color='teal' size='small'>
                                    Save
                                </Button>
                            </Form>
                            {/* {showMessage()} */}
                        </Grid.Column>
                    </Grid>
                </Card.Content>
            </Card>

        </>
    )
}

export default MyStoreDetailsCard