import React, { useState } from 'react';
import { Card, Grid, Form, Checkbox, Image, Button, Icon, List, Input } from 'semantic-ui-react';

function ItemCartCard() {

    // state = { checked: false }
    // toggle = () => this.setState((prevState) => ({ checked: !prevState.checked }))
    const [amountItem, setAmountItem] = useState(1)

    return (
        <>
            <Card.Content>
                <Grid doubling>
                    <Grid.Column width={1} verticalAlign='middle'>
                        <Checkbox
                        // onChange={this.toggle}
                        // checked={this.state.checked}
                        />
                    </Grid.Column>
                            
                    <Grid.Column width={2} verticalAlign="middle" style={{padding:5}} >
                        <Image
                            fluid
                            centered
                            rounded
                            src='https://react.semantic-ui.com/images/avatar/large/molly.png'
                            size='small'

                        />
                    </Grid.Column>
                    <Grid.Column width={13} style={{ marginTop: 5 }}>
                        <Grid.Row><h4>Item Name</h4></Grid.Row>
                        <Grid.Row style={{ marginTop: 5 }}>
                            <h4 style={{ color: 'teal' }}>Rp50.000</h4>
                        </Grid.Row>
                        <Grid.Row style={{ marginTop: 5 }}>
                            <Grid>
                                <Grid.Column width={10}>
                                    <Form size="small">
                                        <Form.Group>
                                            <Form.Input
                                                placeholder='Add Notes'
                                                name='notes'
                                            // value={notes}
                                            // onChange={this.handleChange}
                                            />
                                            {/* <Form.Button size="mini" content='Submit' /> */}
                                        </Form.Group>
                                    </Form>
                                </Grid.Column>
                                <Grid.Column width={6}>
                                    <Icon size="large" color="grey" name="trash" style={{ marginRight: 40 }}></Icon>
                                    <List horizontal>
                                        <List.Item>
                                            <Button
                                                onClick={() => { setAmountItem(amountItem - 1) }}
                                                disabled={amountItem === 1}
                                                size="mini"
                                                secondary icon="minus"
                                            />
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
                                                size="mini"
                                                secondary icon="plus"
                                            />
                                        </List.Item>
                                        {/* <List.Item>{`Stok  ${item.stock}`}</List.Item> */}
                                    </List>
                                </Grid.Column>
                            </Grid>
                        </Grid.Row>
                    </Grid.Column>
                </Grid>
            </Card.Content>
        </>
    );
}

export default ItemCartCard;