import React from 'react';
import { Icon, Grid, Segment, List, Item, Image } from 'semantic-ui-react';

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
        maxHeight: 312,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 0
    }

    return (
        <Grid >
            <Grid.Column width={5} style={{ padding: 0}}>
                <Segment style={topLeftBar}>
                    <Item.Group>
                        <Item>
                            <Item.Image circular size='mini' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                            <Item.Content>
                                <Item.Header>Header</Item.Header>
                                <Item.Meta>Description</Item.Meta>
                            </Item.Content>
                        </Item> 
                    </Item.Group>
                </Segment>
                <Segment style={leftContent}>
                <Item.Group style={{ marginLeft: 16, paddingTop: 12 }}>
                        <Item>
                            <Image circular size='mini' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                            <Item.Content>
                                <Item.Header>Header</Item.Header>
                                <Item.Meta>Description</Item.Meta>
                            </Item.Content>
                        </Item> 
                        <Item>
                            <Item.Image size='mini' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                            <Item.Content>
                                <Item.Header>Header</Item.Header>
                                <Item.Meta>Description</Item.Meta>
                            </Item.Content>
                        </Item> 
                        <Item>
                            <Item.Image size='mini' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                            <Item.Content>
                                <Item.Header>Header</Item.Header>
                                <Item.Meta>Description</Item.Meta>
                            </Item.Content>
                        </Item> 
                        <Item>
                            <Item.Image size='mini' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                            <Item.Content>
                                <Item.Header>Header</Item.Header>
                                <Item.Meta>Description</Item.Meta>
                            </Item.Content>
                        </Item> 
                        <Item>
                            <Item.Image size='mini' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                            <Item.Content>
                                <Item.Header>Header</Item.Header>
                                <Item.Meta>Description</Item.Meta>
                            </Item.Content>
                        </Item> 
                        <Item>
                            <Item.Image size='mini' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                            <Item.Content>
                                <Item.Header>Header</Item.Header>
                                <Item.Meta>Description</Item.Meta>
                            </Item.Content>
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