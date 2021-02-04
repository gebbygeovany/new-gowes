import React from 'react';
import { FETCH_ITEM_QUERY } from '../util/graphql';
import { useQuery } from '@apollo/react-hooks';
import { Label, Button, Card, Item, Grid, Image, Icon, Ref, Container, Rail, Sticky } from 'semantic-ui-react';
import ItemTransactionCard from '../components/ItemTransactionCard'
import ItemDetailCard from '../components/ItemDetailCard'
import ItemImagesCard from '../components/ItemImagesCard'

function ItemDetail(props) {
  const itemId = props.match.params.itemId;
  const contextRef = React.createRef();
  const { data } = useQuery(FETCH_ITEM_QUERY, {
    variables: {
      itemId: itemId
    }
  })
  const { getItem: item } = data ? data : []


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
                    <ItemImagesCard contextRef={contextRef}/>
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
          <Item.Group divided>
          <Item>
            <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png' />

            <Item.Content>
              <Item.Header as='a'>12 Years a Slave</Item.Header>
              <Item.Meta>
                <span className='cinema'>Union Square 14</span>
              </Item.Meta>
              <Item.Description>{"paragraph"}</Item.Description>
              <Item.Extra>
                <Label>IMAX</Label>
                <Label icon='globe' content='Additional Languages' />
              </Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png' />

            <Item.Content>
              <Item.Header as='a'>My Neighbor Totoro</Item.Header>
              <Item.Meta>
                <span className='cinema'>IFC Cinema</span>
              </Item.Meta>
              <Item.Description>{"paragraph"}</Item.Description>
              <Item.Extra>
                <Button primary floated='right'>
                  Buy tickets
                  <Icon name='right chevron' />
                </Button>
                <Label>Limited</Label>
              </Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png' />

            <Item.Content>
              <Item.Header as='a'>Watchmen</Item.Header>
              <Item.Meta>
                <span className='cinema'>IFC</span>
              </Item.Meta>
              <Item.Description>{"paragraph"}</Item.Description>
              <Item.Extra>
                <Button primary floated='right'>
                  Buy tickets
                  <Icon name='right chevron' />
                </Button>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
        </Grid.Row>
      </Grid>
    );
  }
  return postMarkup;
}

export default ItemDetail;