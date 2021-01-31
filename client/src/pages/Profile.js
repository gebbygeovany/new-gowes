import React from 'react'
import { Grid} from 'semantic-ui-react';

import SidebarProfile from '../components/SidebarProfile'
import ProfileCard from '../components/ProfileCard'



function Profile() {

    return (
        <Grid stackable>
            <Grid.Column width={3}>
                <br></br>
                <SidebarProfile></SidebarProfile>
            </Grid.Column>
            <Grid.Column width={13}>
                <br></br>
                <ProfileCard></ProfileCard>
            </Grid.Column>
        </Grid>
    )
}

export default Profile