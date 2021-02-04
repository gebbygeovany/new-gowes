import React, { useContext } from 'react';
import { Card, Icon, Image, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../App.css';

import { AuthContext } from '../context/auth';

function MyItemsCard() {
    const { user } = useContext(AuthContext);

    return (
        <Card fluid style={{ boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)' }}>
            <Grid container>
                <Grid.Column width={2} centered>
                    <Image
                        fluid
                        centered
                        rounded
                        src='https://react.semantic-ui.com/images/avatar/large/molly.png'
                        size='small'
                        style={{ margin: 10 }}
                    />
                </Grid.Column>
                <Grid.Column width={2} verticalAlign='middle'>
                    <h4>Sempak Baja</h4>
                </Grid.Column>
                <Grid.Column width={3} verticalAlign='middle' textAlign='center'>
                    <h4>4</h4>
                </Grid.Column>
                <Grid.Column width={3} verticalAlign='middle' textAlign='center'>
                    <h4>100</h4>
                </Grid.Column>
                <Grid.Column width={3} verticalAlign='middle' textAlign='center'>
                    <h4>10.000</h4>
                </Grid.Column>
                <Grid.Column width={2} verticalAlign='middle' textAlign='center'>
                    <Icon name='star' style={{ color: 'gold' }}></Icon>
                    4
                </Grid.Column>
            </Grid>
        </Card>
    );
}

export default MyItemsCard;