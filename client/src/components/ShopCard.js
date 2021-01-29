import React, { useContext } from 'react';
import { Button, Card, Icon, Label, Image, Popup } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import '../App.css';


import { AuthContext } from '../context/auth';
import BookmarkButton from './BookmarkButton';
import DeleteButton from './DeleteButton';
import MyPopup from './MyPopup';


function PostCard({
    post: { body, createdAt, id, username, likeCount, commentCount, likes }
}) {
    const { user } = useContext(AuthContext);

    return (
        <Card fluid style={{ boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)' }}>

            <Card.Content style={{ padding: 0 }} as={Link} to={`/posts/${id}`}>
                <Image
                    size="large"
                    src="https://react.semantic-ui.com/images/avatar/large/molly.png"
                />
            </Card.Content>

            <Card.Content extra as={Link} to={`/posts/${id}`}>
                <Card.Header style={{ fontSize: 14 }}>{body}</Card.Header>
                <Card.Meta>
                    <span className='penjual'>{username}</span>
                </Card.Meta>
                <Card.Meta style={{ marginTop: 5 }}>
                    <Icon name='star' style={{ color: 'gold' }}></Icon>
                    {`  `+likeCount+`/5`}
                </Card.Meta>
                <Card.Description>
                    Rp500.000
                </Card.Description>
            </Card.Content>

            <Card.Content extra>
                <BookmarkButton user={user} post={{ id, likes, likeCount }}></BookmarkButton>
            </Card.Content>

        </Card>
    );
}

export default PostCard;