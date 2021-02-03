import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Grid, Transition } from 'semantic-ui-react';

import { AuthContext } from '../context/auth';
import ShopCard from '../components/ShopCard';
import FilterBar from '../components/FilterBar';
import { FETCH_ITEMS_QUERY } from '../util/graphql';

function Home() {
  const { user } = useContext(AuthContext);
  const { loading, data } = useQuery(FETCH_ITEMS_QUERY)
  const { getItems: items } = data ? data : []

  return (
    <Grid stackable columns={6}>
      <Grid.Row className="page-title">
        <FilterBar></FilterBar>
      </Grid.Row>
      <Grid.Row>
        {loading ? (
          <h1>Loading posts..</h1>
        ) : (
            <Transition.Group duration={1000}>
              {items &&
                items.map((item) => (
                  <Grid.Column key={item.id} style={{ marginBottom: 20 }}>
                    <ShopCard item={item} />
                  </Grid.Column>
                ))}
            </Transition.Group>
          )}
      </Grid.Row>
    </Grid>
  );
}

export default Home;