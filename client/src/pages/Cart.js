import React from 'react';
import { Grid, Ref } from 'semantic-ui-react';

import CartCard from '../components/CartCard';
import ItemSummaryCard from '../components/ItemSummaryCard';

function Cart() {
  const contextRef = React.createRef();

  let postMarkup = (
    <Ref innerRef={contextRef}>

      <Grid stackable>
        <Grid.Column width={16}></Grid.Column>
        <Grid.Column width={16}><h1>Cart</h1></Grid.Column>
        <Grid.Column width={12}>
          <CartCard></CartCard>
          <CartCard></CartCard>
        </Grid.Column>
        <Grid.Column width={4}>
          <ItemSummaryCard contextRef={contextRef} ></ItemSummaryCard>
        </Grid.Column>
      </Grid>
    </Ref>
  )
  return postMarkup
}

export default Cart;