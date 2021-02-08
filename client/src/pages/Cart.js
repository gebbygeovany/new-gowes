import React from 'react';
import { Grid, Ref, Message, Transition } from 'semantic-ui-react';
import { useQuery } from '@apollo/react-hooks';

import CartCard from '../components/CartCard';
import ItemSummaryCard from '../components/ItemSummaryCard';
import { FETCH_USER_CART_QUERY } from '../util/graphql';


function Cart() {
  const contextRef = React.createRef();

  const { loading, data } = useQuery(FETCH_USER_CART_QUERY)
  let { getUserCartItems: cartItems } = data ? data : []

  console.log(cartItems)

  let cartMarkup = (
    <>
      <br></br>
      <Grid.Column width={16}><h1>Cart</h1></Grid.Column>
      <>
        <Message
          error
          icon='cart'
          header='You dont have items in cart'
          content='add items to cart'
          style={{ marginBottom: 202 }}
        />
      </>
    </>
  )
  if (!loading) {
    if (cartItems.length !== 0) {
      let group = cartItems.reduce((r, a) => {
        // console.log("a", a);
        // console.log('r', r);
        r[a.item.user.id] = [...r[a.item.user.id] || [], a];
        return r;
      }, {});
      console.log(group)
      // group.flatMap((item)=>console.log(item))

      Object.keys(group).map(function(key, index){
        console.log(group[key])
      })
      cartMarkup = (
        <Grid stackable>
          <Grid.Column width={16}></Grid.Column>
          <Grid.Column width={12} >
            {group &&
              Object.keys(group).map((key, index) => 
              (
                <CartCard cartItem={group[key]}></CartCard>
              )
              )
            }
          </Grid.Column>
          <Grid.Column width={4}>
            <ItemSummaryCard contextRef={contextRef}  ></ItemSummaryCard>
          </Grid.Column>
        </Grid>
      )
    }


  }
  return cartMarkup
}

export default Cart;