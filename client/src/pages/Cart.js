import React from 'react';
import { Grid, Ref, Message, Transition } from 'semantic-ui-react';
import { useQuery } from '@apollo/react-hooks';

import CartCard from '../components/CartCard';
import ItemSummaryCard from '../components/ItemSummaryCard';
import { FETCH_USER_CART_QUERY } from '../util/graphql';


function Cart() {
  const contextRef = React.createRef();

  const { loading, data } = useQuery(FETCH_USER_CART_QUERY)
  const { getUserCartItems: cartItems } = data ? data : []


  return (
    <>
      <br></br>
      <Grid.Column width={16}><h1>Cart</h1></Grid.Column>
      {loading || cartItems == 0 ? (
        <>
          <Message
            error
            icon='cart'
            header='You dont have items in cart'
            content='add items to cart'
            style={{ marginBottom: 202 }}
          />
        </>
      ) : (
          <Ref innerRef={contextRef}>
            <Grid stackable>
              <Grid.Column width={16}></Grid.Column>
              <Grid.Column width={12} >
                {cartItems &&
                  cartItems.map((cartItem) => (
                    <CartCard key={cartItem.id} cartItem={cartItem}></CartCard>
                  ))}
              </Grid.Column>
              <Grid.Column width={4}>
                <ItemSummaryCard contextRef={contextRef}  ></ItemSummaryCard>
              </Grid.Column>
            </Grid>
          </Ref>
        )}
    </>
  )
}

export default Cart;