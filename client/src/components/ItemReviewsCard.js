import React from 'react';
import { Item, Button, Icon, Label } from 'semantic-ui-react';
import 'swiper/swiper.scss';

function ItemReviewsCard({ reviews }) {
    return (
      <Item.Group divided>
        {reviews.map((review, index) => (
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
        )) }
      </Item.Group>
    )
}
export default ItemReviewsCard