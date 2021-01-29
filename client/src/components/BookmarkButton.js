import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag'
import { Icon, Label, Button, Popup } from 'semantic-ui-react'

import MyPopup from './MyPopup';

function BookmarkButton({ user, item: { id, bookmarkedBy } }) {
    const [bookmarked, setBookmarked] = useState(false)
    
    useEffect(() => {
        if (user && bookmarkedBy.find(bookmark => bookmark.username === user.username)) {
            setBookmarked(true)
        } else {
            setBookmarked(false)
        }
    }, [user, bookmarkedBy])

    const [bookmarkPost] = useMutation(BOOKMARK_ITEM_MUTATION, {
        variables: { itemId: id }
    })

    const bookmarkButton = user ? (
        bookmarked ? (
            <Button fluid color="teal">
                <Icon name="bookmark" />
            </Button>
        ) : (
                <Button fluid color="teal" basic>
                    <Icon name="bookmark" />
                </Button>
            )
    ) : (
            <Button fluid as={Link} to="/login" color="teal" basic>
                <Icon name="bookmark" />
            </Button>
        );
    return (

        <MyPopup content={bookmarked ? 'Remove Bookmark' : 'Bookmark'}>
            <div as='div' onClick={user ? bookmarkPost : ''}>
                {bookmarkButton}
            </div>
        </MyPopup>

    )
}

const BOOKMARK_ITEM_MUTATION = gql`
    mutation bookmarkItem($itemId:ID!){
        bookmarkItem(itemId: $itemId){
            id
            bookmarkedBy{
                id
                username
            }
        }
    }
`

export default BookmarkButton