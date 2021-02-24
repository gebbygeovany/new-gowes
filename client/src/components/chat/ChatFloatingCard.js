import React, { useContext, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Icon, Grid, Segment, List, Form, Image, Button } from "semantic-ui-react";
import ChatListCard from "./ChatListCard";
import MessageListCard from "./MessageListCard";
import { FETCH_CHATS_QUERY } from "../../util/graphql";
import { AuthContext } from "../../context/auth";
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import { useForm } from '../../util/hooks'


function ChatFloatingCard(props) {
  const { user } = useContext(AuthContext);
  const [errors, setErrors] = useState({})
  const { loading, data } = useQuery(FETCH_CHATS_QUERY);
  const { getChats: chats } = data ? data : [];
  const [currentChat, setCurrentChat] = useState({
    id: "",
    users: [{ seller: { username: "" } }],
  });
  const[content,setContent] = useState('')

  const setChat = (chat) => setCurrentChat(chat);

  const receiver = (users) => {
    let userReceiver;
    if (users[0].id != user.id) {
      userReceiver = users[0];
    } else {
      userReceiver = users[1];
    }
    return userReceiver;
  };

  const topLeftBar = {
    margin: 0,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  };

  const topRightBar = {
    margin: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  };

  const rightBottomContent = {
    margin: 0,
    padding: 0,
    height: 50,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 12,
  };

  let obj = { id: 1 };
  let objs = [];
  for (var i = 0; i < 4; i++) {
    objs.push(obj);
  }

  console.log(currentChat.id)
  

  const { onChange, onSubmit, values } = useForm(sendMessage, {
    content: ''
  })

  console.log(values)

  const [addMessage] = useMutation(ADD_MESSAGE, {
    update(_, { data: { addMessage: message } }) {
      // context.login(userData)
      // props.history.push('/')
      console.log('succsess')
      values.content = ''
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
      console.log('error')
      
    },
    variables: {chatId: currentChat.id, receiverUserId: '', content: values.content}
  })

  function sendMessage() {
    addMessage()
    console.log(values)

  }

  return (
    <Grid>
      <Grid.Column width={5} style={{ padding: 0 }}>
        <Segment style={topLeftBar}>
          <List>
            <List.Item>
              <List.Content style={{ fontWeight: "bold" }}>Chat</List.Content>
            </List.Item>
          </List>
        </Segment>
        {!loading ? (
          <ChatListCard chats={chats} user={user} setChat={setChat} />
        ) : (
            <h1>Loading chats..</h1>
          )}
      </Grid.Column>
      <Grid.Column width={11} style={{ padding: 0 }}>
        <Segment style={topRightBar}>
          <Grid>
            <Grid.Column width={14}>
              {currentChat.id != "" ? (
                <List horizontal>
                  <List.Item>
                    <Image
                      avatar
                      src="https://react.semantic-ui.com/images/avatar/small/tom.jpg"
                    />
                  </List.Item>
                  <List.Item>{receiver(currentChat.users).seller.username}</List.Item>
                  <List.Item>
                    <span
                      style={{
                        color: "#20B52B",
                        backgroundColor: "#C6ECCD",
                        paddingTop: 1,
                        paddingBottom: 1,
                        paddingLeft: 3,
                        paddingRight: 3,
                        borderRadius: 6,
                      }}
                    >
                      Seller
                    </span>
                  </List.Item>
                </List>
              ) : (
                  <List> </List>
                )}
            </Grid.Column>
            <Grid.Column width={2}>
              <Icon
                size="large"
                name="angle down"
                onClick={props.onClose}
                style={{ cursor: "pointer" }}
              />
            </Grid.Column>
          </Grid>
        </Segment>
        {currentChat.id != "" ? (
          <MessageListCard user={user} chatId={currentChat.id} />
        ) : (
            <Segment style={{ height: 286, margin: 0 }}></Segment>
          )}
        <Segment style={rightBottomContent}>
          <Form onSubmit={onSubmit}>
            <Form.Group
              style={{
                margin: 0,
                paddingTop: 4,
                paddingLeft: 8,
                paddingRight: 8,
              }}
            >
              <Form.Input
                style={{ borderRadius: 50 }}
                width={14}
                placeholder="Write Messages..."
                name="content"
                onChange={onChange}
                value={values.content}
              />
              <Button
                icon="send"
                circular
                color="green"
                style={{ marginLeft: 8 }}
              />
            </Form.Group>
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  );
}

const ADD_MESSAGE = gql`
  mutation addMessage(
    $chatId: ID!
    $receiverUserId: ID!
    $content: String!
  ) {
    addMessage(
      chatId: $chatId
      receiverUserId: $receiverUserId
      content: $content 
    ){
      id
      user
      content
      images{
        id
        downloadUrl
      }
      sentAt
    }
  }
`
export default ChatFloatingCard;
