import React from 'react';
import { Card, Button, Icon, List, Sticky } from 'semantic-ui-react';

function ItemTransactionCard({ contextRef }) {
    return (
        <Sticky context={contextRef} offset={130}>
            <Card>
                <Card.Content>
                    <Card.Header>
                    Set amount and note
                    <List.Content floated='right'>
                        <Icon name="angle down"/>
                    </List.Content>
                    </Card.Header>
                    
                </Card.Content>
                <Card.Content extra>
                <div className='ui two buttons'>
                        <Button basic color='green' floated='left' style={{borderRadius: 8, marginRight:2}}>
                            Buy Now
                        </Button>
                        <Button positive icon floated='right' style={{borderRadius: 8, marginLeft:2}}>
                            <Icon name="cart arrow down"/>{" Cart"}
                        </Button>
                </div>
                <div className='ui two buttons' style={{marginTop: 8, marginLeft:2}}>
                    <Button basic icon color='green' style={{borderRadius: 8}}>
                            <Icon name="chat"/>{" Chat"}
                    </Button>
                </div>
            </Card.Content>
            </Card>
        </Sticky>
    )
}
export default ItemTransactionCard