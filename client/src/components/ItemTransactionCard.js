import React, { useState } from 'react';
import { Card, Button, Icon, List, Sticky, Header, Input, Message } from 'semantic-ui-react';

function ItemTransactionCard({ contextRef, item }) {
    const [amountItem, setAmountItem] = useState(1)
    const [visible, setVisible] = useState(false)

    const handleDismiss = () => { setVisible(false) }
    const handleClick = () => { setVisible(true) }

    console.log(visible)

    return (
        <>
            <Sticky context={contextRef} offset={130}>
                <Card style={{ boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)' }}>
                    <Card.Content>
                        <List>
                            <List.Item>
                                <List.Content floated='right'>
                                    <Icon name="angle down" />
                                </List.Content>
                                <List.Content><Header as="h4">Set amount and note</Header></List.Content>
                            </List.Item>
                            <List.Item>
                                <List horizontal>
                                    <List.Item>
                                        <Button
                                            onClick={() => { setAmountItem(amountItem - 1) }}
                                            disabled={amountItem <= 1}
                                            size="mini"
                                            circular
                                            icon="minus" />
                                    </List.Item>
                                    <List.Item>
                                        <Input
                                            transparent
                                            placeholder='1'
                                            value={amountItem}
                                            style={{ width: 18 }} />
                                    </List.Item>
                                    <List.Item>
                                        <Button
                                            onClick={() => { setAmountItem(amountItem + 1) }}
                                            disabled={amountItem >= item.stock}
                                            size="mini"
                                            circular
                                            icon="plus" />
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
                            <Button animated='fade'>
                                <Button.Content visible>Buy</Button.Content>
                                <Button.Content hidden floated='left' style={{ borderRadius: 8, marginRight: 2 }}>
                                    Checkout Now!
                            </Button.Content>
                            </Button>
                            <Button color="teal" animated='vertical' onClick={handleClick} >
                                <Button.Content visible>
                                    <Icon name="cart arrow down" />
                                </Button.Content>
                                <Button.Content hidden icon floated='right' style={{ borderRadius: 8, marginLeft: 2 }}>
                                    Add to Cart
                            </Button.Content>
                            </Button>
                        </div>
                        <div className='ui two buttons' style={{ marginTop: 8, marginLeft: 2 }}>
                            <Button animated>
                                <Button.Content visible>
                                    <Icon name="chat" />{" Chat"}
                                </Button.Content>
                                <Button.Content hidden style={{ borderRadius: 8 }}>
                                    Go to Chat?
                            </Button.Content>
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
                {visible ? (
                    <Message
                        positive
                        onDismiss={handleDismiss}
                        header='Added to cart!'
                        content='Open cart menu for details.'
                        style={{ boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)' }}
                    />
            ) : (<div></div>)
                }

            </Sticky>
        </>
    )
}
export default ItemTransactionCard