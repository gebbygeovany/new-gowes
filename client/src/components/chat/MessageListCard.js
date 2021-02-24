import React, { useEffect, useRef } from "react";
import { Grid, Segment } from "semantic-ui-react";
import {
  FETCH_CHAT_MESSAGES_QUERY,
  MESSAGES_SUBSCRIPTION,
} from "../../util/graphql";
import { useQuery, useSubscription } from "@apollo/react-hooks";

function MessageListCard({ user, chatId }) {
  const { loading, data, subscribeToMore, refetch } = useQuery(
    FETCH_CHAT_MESSAGES_QUERY,
    {
      variables: {
        chatId: chatId,
      },
    }
  );
  const { getMessages: messages } = data ? data : [];
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  let count = 0;
  if (!loading) {
    subscribeToMore({
      document: MESSAGES_SUBSCRIPTION,
      variables: { chatId: chatId },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) {
          console.log(
            `onMessagesSub@updateQuery: not update ${prev.getMessages[0].content}`
          );
          return prev;
        }
        count++
        const newMessageItem = subscriptionData.data.newMessage;
        console.log(`newMessageItem: ${newMessageItem.content}`);
        const messages = prev.getMessages.concat(newMessageItem);
        console.log(`count: ${count}`)
        return {
          getMessages: messages,
        };
      },
      onError: (err) => console.error(err),
    });
  }
  useEffect(() => {
    scrollToBottom()
  }, [messages]);
  let lastMessageId = "";
  const getMessageComp = (message, index) => {
    let messageItemMarkUp;
    // fixing duplication message problem
    if (message.id !== lastMessageId) {
      lastMessageId = message.id;
      if (message.user != user.id) {
        // left message item comp
        messageItemMarkUp = (
          <Grid container key={message.id}>
            <Grid.Column style={{ padding: 0 }}>
              <Segment
                compact
                floated="left"
                inverted
                color="green"
                style={messageItemLeft}
              >
                {message.content}
              </Segment>
            </Grid.Column>
          </Grid>
        );
      } else {
        // right message item comp
        messageItemMarkUp = (
          <Grid container key={message.id}>
            <Grid.Column style={{ padding: 0 }}>
              <Segment
                compact
                floated="right"
                inverted
                color="grey"
                style={messageItemRight}
              >
                {message.content}
              </Segment>
            </Grid.Column>
          </Grid>
        );
      }
    }
    return messageItemMarkUp;
  };

  const messageItemLeft = {
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 14,
    marginRight: 14,
    padding: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  };
  const messageItemRight = {
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 14,
    padding: 10,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  };
  const rightContent = {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 0,
    paddingRight: 0,
    margin: 0,
    overflow: "auto",
    maxHeight: 275,
    height: 275,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  };
  let messageListMarkup;
  if (!loading) {
    messageListMarkup = (
      <Segment style={rightContent}>
        {messages.map((message, index) => getMessageComp(message, index))}
        <div ref={messagesEndRef} />
      </Segment>
    );
  } else {
    messageListMarkup = <h4>Loading messages..</h4>;
  }

  return messageListMarkup;
}
export default MessageListCard;