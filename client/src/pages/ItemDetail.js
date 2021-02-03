import React, { useContext, useState, useRef } from 'react';
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import moment from 'moment';
import { Label, Button, Card, Item, Grid, Image, Icon, Ref, Segment, List, Container, Header, Rail, Sticky, Divider } from 'semantic-ui-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import { AuthContext } from '../context/auth';
import LikeButton from '../components/LikeButton';
import DeleteButton from '../components/DeleteButton';
import MyPopup from '../components/MyPopup';

function ItemDetail(props) {
    const itemId = props.match.params.itemId;
    const { user } = useContext(AuthContext);
    const commentInputRef = useRef(null);
    const [comment, setComment] = useState('');
    const contextRef = React.createRef();

    const { data } = useQuery(FETCH_ITEM_QUERY, {
        variables: {
            itemId: itemId
        }
    })
    const { getItem: item } = data ? data : []

    const [submitComment] = useMutation(SUBMIT_COMMENT_MUTATION, {
        update() {
            setComment('');
            commentInputRef.current.blur();
        },
        variables: {
            postId: itemId,
            body: comment
        }
    });

    function deletePostCallback() {
        props.history.push('/');
    }
    let objs = [
        {id: 1, name:"john"},
        {id: 2, name:"john"},
        {id: 3, name:"john"},
        {id: 4, name:"john"},
        {id: 4, name:"john"},
        {id: 4, name:"john"},
        {id: 4, name:"john"},
    ]
    for (let index = 0; index < 8; index++) {
        objs = [...objs, objs]
    }

    let postMarkup;
    if (!item) {
        postMarkup = <p>Loading post..</p>;
    } else {
        const { id, name, description, price, reviews, likes, likeCount, reviewCount, createdAt } = item;

        postMarkup = (
            <Grid>
                <Grid.Row>
                <Grid centered columns={3}>
                <Grid.Column>
                <Ref innerRef={contextRef}>
                    <Container>
                    <Container>
                        <Header as='h2'>{name}</Header>
                        <List horizontal>
                            <List.Item>Terjual 10</List.Item>
                            <List.Item>
                            <Icon name='star' style={{ color: 'gold' }}/>
                            {" 5 (44 Ulasan)"}
                            </List.Item>
                        </List>
                        <Header as='h1'>Rp{price}</Header>
                        <Container>
                            <List>
                                <List.Item>Kondisi: Baru</List.Item>
                                <List.Item>Berat: 150 Gram</List.Item>
                                <List.Item>Kategori: Soft Case Handphone</List.Item>
                                <List.Item>Etalase: Semua Etalase</List.Item>
                            </List>
                        </Container>
                        <Container>
                            <p>
                            Case Samsung Galaxy M51 Soft Case Transparent Matte Case Anti Knock dengan bahan yang bagus .
                            <br/>
                            <br/>
                            Warna : List Hitam .
                            <br/>
                            List Biru .
                            <br/>
                            List Hijau .
                            <br/>
                            List Merah .
                            </p>
                        </Container>
                        <Divider />
                        <Container>
                            <List horizontal>
                                <List.Item>
                                    <Image
                                        src='https://react.semantic-ui.com/images/wireframe/image-text.png'
                                        as='a'
                                        size='mini'
                                        href='http://google.com'
                                        target='_blank'/>
                                </List.Item>
                                <List.Item>
                                    <Header as='h2'>{item.user.seller.username}</Header>
                                </List.Item>
                                <List.Item>
                                <Icon name='star' style={{ color: 'gold' }}/>
                                    {" 4.8 rating toko"}
                                </List.Item>
                            </List>
                        </Container>
                        <Divider />
                    </Container>
                    <Rail position='left'>
                        <Sticky context={contextRef} offset={130}>
                            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' style={{ marginBottom: 4 }}/>
                            <Swiper
                            spaceBetween={8}
                            slidesPerView={4}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}>
                            {objs.map((obj, index) => (
                                <SwiperSlide virtualIndex={index}>
                                <Card>
                                    {(isActive) => {
                                        if (isActive) {
                                            console.log("current active slide: ", index)
                                        }
                                    }}
                                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small' />
                                </Card>
                            </SwiperSlide>
                            )) }

                            </Swiper>
                        </Sticky>
                    </Rail>

                    <Rail position='right'>
                        <Sticky context={contextRef} offset={130}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>
                                    Set amount and note
                                    <List.Content floated='right'>
                                        <Icon name="angle down"/>
                                    </List.Content>
                                    </Card.Header>
                                    
                                </Card.Content>
                                <Card.Content extra>
                                    <div className='ui two buttons'>
                                            <Button basic color='green' floated='left' style={{borderRadius: 8, marginRight:2}}>
                                                Buy Now
                                            </Button>
                                            <Button positive icon floated='right' style={{borderRadius: 8, marginLeft:2}}>
                                                <Icon name="cart arrow down"/>{" Cart"}
                                            </Button>
                                    </div>
                                    <div className='ui two buttons' style={{marginTop: 8, marginLeft:2}}>
                                        <Button basic icon color='green' style={{borderRadius: 8}}>
                                                <Icon name="chat"/>{" Chat"}
                                        </Button>
                                    </div>
                                </Card.Content>
                            </Card>
                        </Sticky>
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

const SUBMIT_COMMENT_MUTATION = gql`
  mutation($postId: ID!, $body: String!) {
    createComment(postId: $postId, body: $body) {
      id
      comments {
        id
        body
        createdAt
        username
      }
      commentCount
    }
  }
`;

const FETCH_ITEM_QUERY = gql`
  query($itemId: ID!) {
    getItem(itemId: $itemId) {
        id
        name
        price
        createdAt
        username
        description
        user {
            seller {
                username
            }
        }
        images{
            id
            src
        }
        reviewCount
        bookmarkedBy{
            id
            userId
            createdAt
        }
    }
  }
`;

export default ItemDetail;