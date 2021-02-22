import React from 'react';
import {Grid, Segment, Feed } from 'semantic-ui-react';
import { FETCH_CHAT_MESSAGES_QUERY } from '../../util/graphql';
import { useQuery } from '@apollo/react-hooks';

function MessageListCard({ user }) {
    const { loading, data } = useQuery(FETCH_CHAT_MESSAGES_QUERY, {
        variables: {
            chatId: "601e8c13db7451278cb98753"
        }
    })
    const { getMessages: messages } = data ? data : []
    
    const getMessageComp = (message) => {
        let messageItemMarkUp 
        if (message.user.id != user.id) {
            // left message item comp
            messageItemMarkUp = (<Grid container>
                <Grid.Column style={{ padding: 0}}>
                    <Segment compact floated='left' inverted color='green' style={messageItemLeft}>
                        {message.content}
                    </Segment>
                </Grid.Column>
            </Grid>)
        } else {
            // right message item comp
            messageItemMarkUp = (<Grid container>
                <Grid.Column style={{ padding: 0}}>
                    <Segment compact floated='right' inverted color='grey' style={messageItemRight}>
                        {message.content}
                    </Segment>
                </Grid.Column>
            </Grid>)
        }
        return messageItemMarkUp
    }
    
    const messageItemLeft = {
        marginTop: 4,
        marginBottom: 4,
        marginLeft: 14,
        marginRight: 14,
        padding: 10,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 16,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16
    }
    const messageItemRight = {
        marginTop: 4,
        marginBottom: 4,
        marginLeft: 14,
        padding: 10,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16
    }

    let messageListMarkup
    if (!loading) {
        messageListMarkup = (
            <>
            {
                messages.map((message) => (
                   getMessageComp(message)
                ))
            }
            </>
            )

    } else {
        messageListMarkup = (<h1>Loading messages..</h1>)
    }

    return messageListMarkup;
        
}
export default MessageListCard