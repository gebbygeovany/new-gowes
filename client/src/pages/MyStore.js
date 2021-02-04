import React from 'react'
import { Grid} from 'semantic-ui-react';

import SidebarStore from '../components/SidebarStore'
import MyStoreDetailsCard from '../components/MyStoreDetailsCard'
import MyItemList from '../components/MyItemList'



function MyStore(props) {

    const sidebarPosition = props.match.params.position;

    var contentToShow

    if(sidebarPosition==='myStoreDetailsCard'){
        contentToShow =  <MyStoreDetailsCard props={props}></MyStoreDetailsCard>
    }else if (sidebarPosition==='myItemsList'){
        contentToShow =  <MyItemList props={props}></MyItemList>
    }else if (sidebarPosition==='salesList'){

    }

    return (
        <Grid stackable>
            <Grid.Column width={3}>
                <br></br>
                <SidebarStore></SidebarStore>
            </Grid.Column>
            <Grid.Column width={13}>
                <br></br>
                {contentToShow}
            </Grid.Column>
        </Grid>
    )
}

export default MyStore