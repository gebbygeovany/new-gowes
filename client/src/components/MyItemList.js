import React from 'react'
import { Button, Card, Icon, Grid, Message, Image,Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


import MyItemsCard from '../components/MyItemsCard'

function MyItemList(props) {

    return (
        <>
            <Card fluid style={{ boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)' }}>
                <Card.Content header="My Items">
                </Card.Content>
                <Button color="teal" as={Link} to="/addItem">
                    <Icon name="plus"></Icon>
                    Add Atem
                </Button>
            </Card>
            {/* <Message
                error
                icon='inbox'
                header='You dont have any items'
                content='add items to sell your things'
            /> */}
                <Divider />
                <Grid container verticalAlign='middle'>
                    <Grid.Column width={2} centered>
                    </Grid.Column>
                    <Grid.Column width={2} verticalAlign='middle' >
                        <h4>Item Name</h4>
                    </Grid.Column>
                    <Grid.Column width={3} verticalAlign='middle' textAlign='center'>
                        <h4>Remaining Stock</h4>
                    </Grid.Column>
                    <Grid.Column width={3} verticalAlign='middle' textAlign='center'>
                        <h4>Selled</h4>
                    </Grid.Column>
                    <Grid.Column width={3} verticalAlign='middle' textAlign='center'>
                        <h4>Price</h4>
                    </Grid.Column>
                    <Grid.Column width={2} verticalAlign='middle' textAlign='center'>
                        <h4>Rating</h4>
                    </Grid.Column>
                </Grid>
                <Divider />
            <MyItemsCard></MyItemsCard>
        </>
    )
}

export default MyItemList