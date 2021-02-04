import React from 'react';
import { FETCH_ITEM_QUERY } from '../util/graphql';
import { useQuery } from '@apollo/react-hooks';
import { Grid, Ref, Container, Rail } from 'semantic-ui-react';
import ItemTransactionCard from '../components/ItemTransactionCard'
import ItemDetailCard from '../components/ItemDetailCard'
import ItemImagesCard from '../components/ItemImagesCard'
import ItemReviewsCard from '../components/ItemReviewsCard'

function ItemDetail(props) {
  const itemId = props.match.params.itemId;
  const contextRef = React.createRef();
  const { data: itemData, data: reviewData } = useQuery(FETCH_ITEM_QUERY, {
    variables: {
      itemId: itemId
    }
  })
  const { getItem: item } = itemData ? itemData : []
  const { getItemReviews: reviews } = reviewData ? reviewData : []

  let postMarkup = (<p>Loading item..</p>);
  if (item) {
    postMarkup = (
      <Grid>
        <Grid.Row>
          <Grid centered columns={2}>
            <Grid.Column>
              <Ref innerRef={contextRef}>
                <Container>
                  <ItemDetailCard item={item}/>
                  <Rail position='left'>
                    <ItemImagesCard images={item.images} contextRef={contextRef}/>
                  </Rail>
                  <Rail position='right'>
                    <ItemTransactionCard item={item} contextRef={contextRef}/>
                  </Rail>
                </Container>
            </Ref>
            </Grid.Column>
          </Grid>
        </Grid.Row>
        <Grid.Row>
          <ItemReviewsCard reviews={reviews}/>
        </Grid.Row>
      </Grid>
    );
  }
  return postMarkup;
}

export default ItemDetail;