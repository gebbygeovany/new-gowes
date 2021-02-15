import React, { useState } from 'react'
import { Button, Grid, Segment } from 'semantic-ui-react';
import { Link, useHistory } from 'react-router-dom'

import NavBarMyOrders from './NavBarMyOrders'
import CardMyOrders from './CardMyOrders'

function MyOrders(props) {

    const [activeItem, setActiveItem] = useState("all")
    const history = useHistory();


    const handleItemClick = (e, { name }) => {
        setActiveItem(name)
    }

    var contentToShow

    contentToShow = <CardMyOrders filter={activeItem}></CardMyOrders>
    
    

    return (
        <>
            <Grid stackable>
                <Grid.Row>
                    <Grid columns={7} stackable>
                        <Grid.Column>
                            <Button
                                name='all'
                                onClick={handleItemClick}
                                color={activeItem === "all" ? "teal" : ""}
                                size="tiny"
                                fluid
                                style={{ boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)' }}
                            >
                                All
                            </Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button
                                name='waiting for payment'
                                onClick={handleItemClick}
                                color={activeItem === "waiting for payment" ? "teal" : ""}
                                size="tiny"
                                fluid
                                style={{ boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)' }}
                            >
                                Waiting For Payment
                            </Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button
                                name='waiting for confirmation'
                                onClick={handleItemClick}
                                color={activeItem === "waiting for confirmation" ? "teal" : ""}
                                size="tiny"
                                fluid
                                style={{ boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)' }}
                            >
                                Waiting For Confirmation
                            </Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button
                                name='order proceed'
                                onClick={handleItemClick}
                                color={activeItem === "order proceed" ? "teal" : ""}
                                size="tiny"
                                fluid
                                style={{ boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)' }}
                            >
                                Order Proceed
                            </Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button
                                name='order shipped'
                                onClick={handleItemClick}
                                color={activeItem === "order shipped" ? "teal" : ""}
                                size="tiny"
                                fluid
                                style={{ boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)' }}
                            >
                                Order Shipped
                            </Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button
                                name='order arrived'
                                onClick={handleItemClick}
                                color={activeItem === "order arrived" ? "teal" : ""}
                                size="tiny"
                                fluid style={{ boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)' }}
                            >
                                Order Arrived
                            </Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button
                                name='order completed'
                                onClick={handleItemClick}
                                color={activeItem === "order completed" ? "teal" : ""}
                                size="tiny"
                                fluid
                                style={{ boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)' }}
                            >Order Completed
                            </Button>
                        </Grid.Column>
                    </Grid>
                </Grid.Row>
                <Grid.Row>
                    {contentToShow}
                </Grid.Row>
            </Grid>
        </>
    )
}

export default MyOrders