import React from 'react';
import { Icon, Grid, Segment, List, Item, Image, Card, Feed } from 'semantic-ui-react';

function ChatFloatingCard() {
    const topLeftBar = {
        margin: 0,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    }

    const topRightBar = {
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
                                <Icon name="angle down" style={{ cursor:'pointer' }}/>
                            </List.Content>
                        </List.Item>
                    </List>
                </Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='mini' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                        <Item.Content>
                            <Item.Header>Header</Item.Header>
                            <Item.Meta>Description</Item.Meta>
                        </Item.Content>
                    </Item> 
                    <Item>
                        <Item.Image circular size='mini' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                        <Item.Content>
                            <Item.Header>Header</Item.Header>
                            <Item.Meta>Description</Item.Meta>
                        </Item.Content>
                    </Item> 
                </Item.Group>
            </Grid.Column>
       
        </Grid>
        );
}
export default ChatFloatingCard