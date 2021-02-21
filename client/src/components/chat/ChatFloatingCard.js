import React from 'react';
import { Icon, Grid, Segment, List, Item, Button, Card, Feed, Form } from 'semantic-ui-react';

function ChatFloatingCard(props) {
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
                    <Item.Group>
                        <Item style={{ margin: 0 }}>
                            <Card onClick={() => {}} style={{ borderRadius: 0, margin: 0, paddingTop: 8, paddingBottom: 8, paddingLeft: 4, paddingRight: 4 }}>
                                <Feed>
                                    <Feed.Event>
                                        <Feed.Label>
                                            <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                                        </Feed.Label>
                                        <Feed.Content>
                                            <Feed.Summary>
                                                <Feed.User>Elliot Fu</Feed.User>
                                            </Feed.Summary>
                                        </Feed.Content>
                                    </Feed.Event>
                                </Feed>
                            </Card>
                        </Item> 
                       
                        <Item style={{ margin: 0 }}>
                            <Card onClick={() => {}} style={{ borderRadius: 0, margin: 0, paddingTop: 8, paddingBottom: 8, paddingLeft: 4, paddingRight: 4 }}>
                                <Feed>
                                    <Feed.Event>
                                        <Feed.Label>
                                            <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                                        </Feed.Label>
                                        <Feed.Content>
                                            <Feed.Summary>
                                                <Feed.User>Elliot Fu</Feed.User>
                                            </Feed.Summary>
                                        </Feed.Content>
                                    </Feed.Event>
                                </Feed>
                            </Card>
                        </Item> 
                        <Item style={{ margin: 0 }}>
                            <Card onClick={() => {}} style={{ borderRadius: 0, margin: 0, paddingTop: 8, paddingBottom: 8, paddingLeft: 4, paddingRight: 4 }}>
                                <Feed>
                                    <Feed.Event>
                                        <Feed.Label>
                                            <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                                        </Feed.Label>
                                        <Feed.Content>
                                            <Feed.Summary>
                                                <Feed.User>Elliot Fu</Feed.User>
                                            </Feed.Summary>
                                        </Feed.Content>
                                    </Feed.Event>
                                </Feed>
                            </Card>
                        </Item> 
                        <Item style={{ margin: 0 }}>
                            <Card onClick={() => {}} style={{ borderRadius: 0, margin: 0, paddingTop: 8, paddingBottom: 8, paddingLeft: 4, paddingRight: 4 }}>
                                <Feed>
                                    <Feed.Event>
                                        <Feed.Label>
                                            <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                                        </Feed.Label>
                                        <Feed.Content>
                                            <Feed.Summary>
                                                <Feed.User>Elliot Fu</Feed.User>
                                            </Feed.Summary>
                                        </Feed.Content>
                                    </Feed.Event>
                                </Feed>
                            </Card>
                        </Item> 
                        <Item style={{ margin: 0 }}>
                            <Card onClick={() => {}} style={{ borderRadius: 0, margin: 0, paddingTop: 8, paddingBottom: 8, paddingLeft: 4, paddingRight: 4 }}>
                                <Feed>
                                    <Feed.Event>
                                        <Feed.Label>
                                            <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                                        </Feed.Label>
                                        <Feed.Content>
                                            <Feed.Summary>
                                                <Feed.User>Elliot Fu</Feed.User>
                                            </Feed.Summary>
                                        </Feed.Content>
                                    </Feed.Event>
                                </Feed>
                            </Card>
                        </Item> 
                        <Item style={{ margin: 0 }}>
                            <Card onClick={() => {}} style={{ borderRadius: 0, margin: 0, paddingTop: 8, paddingBottom: 8, paddingLeft: 4, paddingRight: 4 }}>
                                <Feed>
                                    <Feed.Event>
                                        <Feed.Label>
                                            <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                                        </Feed.Label>
                                        <Feed.Content>
                                            <Feed.Summary>
                                                <Feed.User>Elliot Fu</Feed.User>
                                            </Feed.Summary>
                                        </Feed.Content>
                                    </Feed.Event>
                                </Feed>
                            </Card>
                        </Item> 
                        <Item style={{ margin: 0 }}>
                            <Card onClick={() => {}} style={{ borderRadius: 0, margin: 0, paddingTop: 8, paddingBottom: 8, paddingLeft: 4, paddingRight: 4 }}>
                                <Feed>
                                    <Feed.Event>
                                        <Feed.Label>
                                            <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                                        </Feed.Label>
                                        <Feed.Content>
                                            <Feed.Summary>
                                                <Feed.User>Elliot Fu</Feed.User>
                                            </Feed.Summary>
                                        </Feed.Content>
                                    </Feed.Event>
                                </Feed>
                            </Card>
                        </Item> 
                       
                    </Item.Group>
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
                {objs.map((item) => (
                    <Grid container>
                        <Grid.Column style={{ padding: 0}}>
                            <Segment compact floated='left' inverted color='green' style={messageItemLeft}>
                                testing chat
                            </Segment>
                        </Grid.Column>
                    </Grid>
                ))}
               {objs.map((item) => (
                    <Grid container>
                        <Grid.Column style={{ padding: 0}}>
                            <Segment compact floated='right' inverted color='grey' style={messageItemRight}>
                                testing chat
                            </Segment>
                        </Grid.Column>
                    </Grid>
                ))}
                </Segment>
                <Segment style={rightBottomContent}>
                    <Form>
                        <Form.Group style={{margin: 0, paddingTop: 4, paddingLeft: 8, paddingRight: 8}}>
                            <Form.Input style={{ borderRadius: 12 }}
                            width={14}
                            placeholder='Tulis pesan...'
                            name='message'
                            />
                            <Form.Button icon="send" circular color='green' style={{marginLEft: 8}}/>
                        </Form.Group>
                    </Form>
                </Segment>
            </Grid.Column>
        </Grid>
        );
}
export default ChatFloatingCard