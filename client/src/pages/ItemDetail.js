import React from 'react';
import { FETCH_ITEM_QUERY, FETCH_CART_QUERY } from '../util/graphql';
import { useQuery } from '@apollo/react-hooks';
import { Grid, Ref, Rail } from 'semantic-ui-react';
import ItemTransactionCard from '../components/ItemTransactionCard'
import ItemDetailCard from '../components/ItemDetailCard'
import ItemImagesCard from '../components/ItemImagesCard'
import ItemReviewsCard from '../components/ItemReviewsCard'
import ReviewSummaryCard from '../components/ReviewSummaryCard'

function ItemDetail(props) {
  const itemId = props.match.params.itemId;
  const contextRef = React.createRef();
  const imageContextRef = React.createRef();
  const { loading, data: itemData, data: reviewData } = useQuery(FETCH_ITEM_QUERY, {
    variables: {
      itemId: itemId
    }
  })
  const { getItem: item } = itemData ? itemData : []
  const { getItemReviews: reviews } = reviewData ? reviewData : []


  let postMarkup = (<p>Loading item..</p>);
  if (item) {
    postMarkup = (
      <Ref innerRef={contextRef}>
        <Grid>
          <Grid.Column width={12}>
            <Grid.Row style={{ marginBottom: 30 }}>
              <Ref innerRef={imageContextRef}>
                <Grid>
                  <Grid.Column width={6}>
                    <ItemImagesCard contextRef={imageContextRef} images={item.images} />
                  </Grid.Column>
                  <Grid.Column width={10} style={{ paddingTop: 50 }}>
                    <ItemDetailCard item={item} />
                  </Grid.Column>
                </Grid>
              </Ref>
            </Grid.Row>
            <Grid.Row style={{ marginBottom: 30 }}>
              <ReviewSummaryCard />
            </Grid.Row>
            <Grid.Row>
              <ItemReviewsCard reviews={reviews} />
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={4}>
            <ItemTransactionCard contextRef={contextRef} item={item} />
          </Grid.Column>
        </Grid>
      </Ref>
    );
  }
  return postMarkup;
}

export default ItemDetail;