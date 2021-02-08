import React from 'react';
import { Card, Grid, Icon, Checkbox } from 'semantic-ui-react';
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'

import { FETCH_USER_CART_QUERY } from '../util/graphql';
import ItemCartCard from '../components/ItemCartCard';


function CartCard({ cartItem: { id, item } }) {

    const [deleteItemCart] = useMutation(DELETE_CART_ITEM_MUTATION, {
        update(proxy, result) {
            // TODO: remove post cache
            const data = proxy.readQuery({
                query: FETCH_USER_CART_QUERY
            })
            proxy.writeQuery({
                query: FETCH_USER_CART_QUERY,
                data: {
                    getUserCartItems: data.getUserCartItems.filter(c => c.id !== id)
                }
            })
        },
        variables: { cartId: id }
    })

    console.log(id)

    return (
        <Card fluid style={{ boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)' }}>
            <Card.Content>
                <Checkbox
                    label={id}
                    style={{ fontWeight: 1000 }}
                // onChange={this.toggle}
                // checked={this.state.checked}
                />
                <Icon
                    color="grey"
                    name="remove circle"
                    style={{ float: "right" }}
                    onClick={deleteItemCart}
                />
            </Card.Content>
            <ItemCartCard item={id, item}></ItemCartCard>
        </Card>
    );
}

const DELETE_CART_ITEM_MUTATION = gql`
    mutation deleteCartItem($cartId:ID!){
        deleteCartItem(cartId: $cartId)
    }
`

export default CartCard;