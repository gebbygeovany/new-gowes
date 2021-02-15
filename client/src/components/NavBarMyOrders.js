import React, { useState } from 'react'
import { Button, Grid, Segment } from 'semantic-ui-react';
import { Link,useHistory  } from 'react-router-dom'

function NavBarMyOrders(props) {

    const [activeItem, setActiveItem] = useState("all")
    const history = useHistory();

    // const handleItemClick = (e, { name }) => setActiveItem(name)

    const handleItemClick = (e, { name }) => {
        setActiveItem(name)
        history.push(`myOrders/${name}`);
        
    }


    return (
        <Grid columns={7}>
            <Grid.Column>
                <Button
                    name='all'
                    onClick={handleItemClick}
                    color={activeItem === "all" ? "teal" : ""}
                    // as={Link}
                    // to="/profile/myOrders"
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
                    // as={Link}
                    // to="/profile/myOrders"
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
    )
}

export default NavBarMyOrders