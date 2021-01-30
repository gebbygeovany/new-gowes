import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Grid, Transition } from 'semantic-ui-react';

import { AuthContext } from '../context/auth';
import ShopCard from '../components/ShopCard';
import FilterBar from '../components/FilterBar';
import { FETCH_BOOKMARKS_QUERY } from '../util/graphql';

function Home() {
  const { user } = useContext(AuthContext);
  const { loading, data } = useQuery(FETCH_BOOKMARKS_QUERY)
  const { getBookmarks: bookmarks } = data ? data : []
  console.log(bookmarks.length)

  // const {
  //   loading,
  //   data: { getPosts: posts }
  // } = useQuery(FETCH_POSTS_QUERY);

  return (
    <Grid stackable columns={6}>
      <Grid.Row className="page-title">
      </Grid.Row>
      <Grid.Row>
        {loading ? (
          <h1>Loading posts..</h1>
        ) : (
            <Transition.Group duration={1000}>
              {bookmarks &&
                bookmarks.map((bookmark) => (
                  <Grid.Column key={bookmark.id} style={{ marginBottom: 20 }}>
                    <ShopCard bookmark={bookmark} />
                  </Grid.Column>
                ))}
            </Transition.Group>
          )}
      </Grid.Row>
    </Grid>
  );
}

export default Home;