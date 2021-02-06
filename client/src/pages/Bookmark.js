import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Grid, Transition, Message } from 'semantic-ui-react';

import { AuthContext } from '../context/auth';
import ShopCard from '../components/ShopCard';
import { FETCH_BOOKMARKS_QUERY } from '../util/graphql';

function Home() {
  const { user } = useContext(AuthContext);
  const { loading, data } = useQuery(FETCH_BOOKMARKS_QUERY)
  const { getBookmarks: bookmarks } = data ? data : []

  console.log(bookmarks)
  return (
    <Grid stackable columns={6}>
      <Grid.Column width={16}></Grid.Column>
      <Grid.Column width={16}><h1>Bookmarked Items</h1></Grid.Column>
      <Grid.Row>
        {loading || bookmarks==0? (
          <>
          <Message
            error
            icon='bookmark'
            header='You dont have any bookmarked items'
            content='add bookmark on your favorite item'
            style={{marginBottom:109}}
          />
          <Grid></Grid>
          </>
        ) : (
            <>
              <Transition.Group duration={700}>
                {bookmarks &&
                  bookmarks.map((bookmark) => (
                    <Grid.Column key={bookmark.id} style={{ marginBottom: 20 }}>
                      <ShopCard item={bookmark} />
                    </Grid.Column>
                  ))}
              </Transition.Group>
            </>
          )}
      </Grid.Row>
    </Grid>
  );
}

export default Home;