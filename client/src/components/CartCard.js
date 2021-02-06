import React from 'react';
import { Card, Grid, Icon, Checkbox } from 'semantic-ui-react';

import ItemCartCard from '../components/ItemCartCard';


function CartCard() {

    // state = { checked: false }
    // toggle = () => this.setState((prevState) => ({ checked: !prevState.checked }))

    return (
        <Card fluid>
            <Card.Content>
                <Checkbox
                    label='Seller Name'
                    style={{fontWeight:1000}}
                // onChange={this.toggle}
                // checked={this.state.checked}
                />
            </Card.Content>
            <ItemCartCard></ItemCartCard>
            <ItemCartCard></ItemCartCard>
        </Card>
    );
}

export default CartCard;