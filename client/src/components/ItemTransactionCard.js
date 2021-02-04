import React, { useState } from 'react';
import { Card, Button, Icon, List, Sticky, Header, Input, Item } from 'semantic-ui-react';

function ItemTransactionCard({ contextRef, item }) {
    const [amountItem, setAmountItem] = useState(1)
    return (
        <Sticky context={contextRef} offset={130}>
            <Card>
                <Card.Content>
                    <List>
                        <List.Item>
                            <List.Content floated='right'>
                                <Icon name="angle down"/>
                            </List.Content>
                            <List.Content><Header as="h4">Set amount and note</Header></List.Content>
                        </List.Item>
                        <List.Item>
                            <List horizontal>
                                <List.Item>
                                    <Button onClick={() => {setAmountItem(amountItem - 1)}} disabled={amountItem === 1} size="mini" positive circular icon="minus"/>
                                </List.Item>
                                <List.Item>
                                    <Input 
                                        transparent
                                        placeholder='1'
                                        value={amountItem}
                                        style={{ width: 18 }}/>
                                </List.Item>
                                <List.Item>
                                    <Button onClick={() => {setAmountItem(amountItem + 1)}} disabled={amountItem === item.stock} size="mini" positive circular icon="plus"/>
                                </List.Item>
                                <List.Item>{`Stok  ${item.stock}`}</List.Item>
                            </List>
                        </List.Item>
                        <List.Item>
                            <List.Content floated='left' verticalAlign="middle">
                                <Header as="h5">Sub Total</Header>
                            </List.Content>
                            <List.Content floated='right'>
                                <Header as="h3">{`Rp${item.price * amountItem}`}</Header>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            
                        </List.Item>
                    </List>
                </Card.Content>
                <Card.Content extra>
                <div className='ui two buttons'>
                        <Button basic color='green' floated='left' style={{ borderRadius: 8, marginRight:2 }}>
                            Buy Now
                        </Button>
                        <Button positive icon floated='right' style={{ borderRadius: 8, marginLeft:2 }}>
                            <Icon name="cart arrow down"/>{" Cart"}
                        </Button>
                </div>
                <div className='ui two buttons' style={{ marginTop: 8, marginLeft:2 }}>
                    <Button basic icon color='green' style={{ borderRadius: 8 }}>
                            <Icon name="chat"/>{" Chat"}
                    </Button>
                </div>
            </Card.Content>
            </Card>
        </Sticky>
    )
}
export default ItemTransactionCard