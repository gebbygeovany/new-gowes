import React from 'react'
import { Grid} from 'semantic-ui-react';

import SidebarStore from '../components/SidebarStore'
import MyStoreDetailsCard from '../components/MyStoreDetailsCard'



function MyStore(props) {

    return (
        <Grid stackable>
            <Grid.Column width={3}>
                <br></br>
                <SidebarStore></SidebarStore>
            </Grid.Column>
            <Grid.Column width={13}>
                <br></br>
                <MyStoreDetailsCard props={props}></MyStoreDetailsCard>
            </Grid.Column>
        </Grid>
    )
}

export default MyStore