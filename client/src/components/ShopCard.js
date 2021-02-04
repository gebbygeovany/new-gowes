import React, { useContext } from 'react';
import {Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../App.css';


import { AuthContext } from '../context/auth';
import BookmarkButton from './BookmarkButton';



function PostCard({item: { id, name, price, user, bookmarkedBy }}) {
    const userCache = useContext(AuthContext);

    return (
        <Card fluid style={{ boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)' }}>
            <Card.Content style={{ padding: 0 }} as={Link} to={`/items/${id}`}>
                <Image
                    size="large"
                    src="https://react.semantic-ui.com/images/avatar/large/molly.png"
                />
            </Card.Content>

            <Card.Content extra as={Link} to={`/posts/${id}`}>
                <Card.Header style={{ fontSize: 14 }}>{name}</Card.Header>
                <Card.Meta>
                    <span className='penjual'>{user.seller.username}</span>
                </Card.Meta>
                <Card.Meta style={{ marginTop: 5 }}>
                    <Icon name='star' style={{ color: 'gold' }}></Icon>
                    4/5
                </Card.Meta>
                <Card.Description>
                    Rp{price}
                </Card.Description>
            </Card.Content>

            <Card.Content extra>
                <BookmarkButton user={user} item={{ id, bookmarkedBy }} ></BookmarkButton>
            </Card.Content>

        </Card>
    );
}

export default PostCard;