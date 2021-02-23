import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Icon, Grid, Segment, List, Form } from 'semantic-ui-react';
import ChatListCard from './ChatListCard';
import MessageListCard from './MessageListCard';
import { FETCH_CHATS_QUERY } from '../../util/graphql';
import { AuthContext } from '../../context/auth';

function ChatFloatingCard(props) {
    const { user } = useContext(AuthContext);
    const { loading, data } = useQuery(FETCH_CHATS_QUERY)
    const { getChats: chats } = data ? data : []

    const topLeftBar = {
        margin: 0,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    }

    const topRightBar = {
        margin: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 12,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    }

    const leftContent = {
        padding: 0,
        margin: 0,
        overflow: 'auto',
        maxHeight: 342,
        height: 342,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 0
    }
    const rightContent = {
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 0,
        paddingRight: 0,
        margin: 0,
        overflow: 'auto',
        maxHeight: 287,
        height: 287,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    }

    const rightBottomContent = {
        margin: 0, 
        padding: 0,
        height: 50,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 12
    }
   
    let obj = {id: 1}
    let objs = []
    for (var i = 0; i < 4; i++) {
        objs.push(obj)
    }

    return (
        <Grid >
            <Grid.Column width={5} style={{ padding: 0}}>
                <Segment style={topLeftBar}>
                    <List>
                        <List.Item>
                            <List.Content style={{ fontWeight: 'bold'}}>Chat</List.Content>
                        </List.Item>
                    </List>
                </Segment>
                <Segment style={leftContent}>
                {
                    !loading ? (<ChatListCard chats={chats} user={user}/>) : (<h1>Loading chats..</h1>)
                }
                </Segment>
            </Grid.Column>
            <Grid.Column width={11} style={{ padding: 0}}>
                <Segment style={topRightBar} >
                    {/* <Icon name='angle down' style={{ padding: 8, float: 'right', cursor:'pointer' }}/> */}
                    <List>
                        <List.Item>
                            <List.Content floated='right'>
                                <Icon size='large' name="angle down" onClick={props.onClose} style={{ cursor:'pointer' }}/>
                            </List.Content>
                        </List.Item>
                    </List>
                </Segment>
                <Segment style={rightContent}>
                {
                    !loading ? (<MessageListCard user={user}/>) : (<h1>Loading messages..</h1>)
                }
                </Segment>
                <Segment style={rightBottomContent}>
                    <Form>
                        <Form.Group style={{margin: 0, paddingTop: 4, paddingLeft: 8, paddingRight: 8}}>
                            {/* <Form.Input style={{ borderRadius: 50 }}
                            width={14}
                            placeholder='Tulis pesan...'
                            name='message'
                            /> */}
                            <input placeholder='Tulis pesan...' style={{ borderRadius: 50 }}></input>
                            <Form.Button icon="send" circular color='green' style={{marginLEft: 8}}/>
                        </Form.Group>
                    </Form>
                </Segment>
            </Grid.Column>
        </Grid>
        );
}
export default ChatFloatingCard