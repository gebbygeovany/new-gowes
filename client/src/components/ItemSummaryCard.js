import React, { useState } from 'react';
import { Card, Sticky, Grid, Divider, Button } from 'semantic-ui-react';

function ItemSummaryCard({ contextRef }) {
    return (
        <Sticky context={contextRef} offset={130}>
            <Card style={{ boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)' }}>
                <Card.Content header="Shoping Summary" />
                <Card.Content>
                    <Grid stackable>
                        <Grid.Row>
                            <Grid.Column width={8} textAlign='left'>Item 1</Grid.Column>
                            <Grid.Column width={8} textAlign='right'>Rp50.000</Grid.Column>
                            <Grid.Column width={8} textAlign='left'>Item 2</Grid.Column>
                            <Grid.Column width={8} textAlign='right'>Rp50.000</Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Divider />
                    <Grid stackable>
                        <Grid.Column width={8} textAlign='left'><h4>Sub Total</h4></Grid.Column>
                        <Grid.Column width={8} textAlign='right'>Rp100.000</Grid.Column>
                    </Grid>
                </Card.Content>
                <Card.Content extra>
                    <Button fluid color="teal">Pay</Button>
                </Card.Content>
            </Card>
        </Sticky>
    )
}
export default ItemSummaryCard