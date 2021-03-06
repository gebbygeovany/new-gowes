import React, { useState, useContext } from "react";
import {
  Card,
  Button,
  Icon,
  List,
  Sticky,
  Header,
  Input,
  Message,
} from "semantic-ui-react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { FETCH_CART_QUERY } from "../util/graphql";
import { AuthContext } from "../context/auth";
import { FETCH_USER_CART_QUERY } from "../util/graphql";

function ItemTransactionCard({
  contextRef,
  item,
  onChatVisible,
  isChatExists,
}) {
  const context = useContext(AuthContext);
  const [amountItem, setAmountItem] = useState(1);
  const [visible, setVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const chat = {
    id: isChatExists.length > 0 ? isChatExists[0]._id : "new",
    users: [
      {
        id: context.user.id,
        seller: {
          username: "",
        },
      },
      {
        id: item.user.id,
        seller: {
          username: item.user.seller.username,
        },
      },
    ],
  };
  const message = {
    user: context.user.id,
    item: {
      id: item.id,
      name: item.name,
      price: item.price,
      image: "",
    },
    chatId: isChatExists.length > 0 ? isChatExists[0]._id : "new"
  };

  const handleDismiss = () => {
    setVisible(false);
  };

  const [addToCart] = useMutation(ADD_TO_CART_MUTATION, {
    variables: { itemId: item.id, amountItem: amountItem },
    update(proxy, result) {
      const data = proxy.readQuery({
        query: FETCH_USER_CART_QUERY,
      });

      proxy.writeQuery({
        query: FETCH_USER_CART_QUERY,
        data: {
          getUserCartItems: [result.data.addCartItem, ...data.getUserCartItems],
        },
      });

      const cartItem = proxy.readQuery({
        query: FETCH_CART_QUERY,
      });
      proxy.writeQuery({
        query: FETCH_CART_QUERY,
        data: {
          getUserCartItem: cartItem.getUserCartItem,
        },
      });
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
  });

  const { loading, data: userCartData, refetch } = useQuery(FETCH_CART_QUERY, {
    variables: {
      itemId: item.id,
    },
  });
  const { getUserCartItem: cartItem } = userCartData ? userCartData : [];
  let inCartAmount = 0;

  if (cartItem) {
    inCartAmount = cartItem.amountItem;
  }

  function addItemToCart() {
    // refetch()
    addToCart();
    setVisible(true);
    // window.location.href='/items'
    window.location.reload(false);
  }

  let itemMarkup = <h1>loading...</h1>;
  if (!loading) {
    itemMarkup = (
      <>
        <Sticky context={contextRef} offset={130}>
          <Card style={{ boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)" }}>
            <Card.Content>
              <List>
                <List.Item>
                  <List.Content floated="right">
                    <Icon name="angle down" />
                  </List.Content>
                  <List.Content>
                    <Header as="h4">Set amount and note</Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List horizontal>
                    <List.Item>
                      <Button
                        onClick={() => {
                          setAmountItem(amountItem - 1);
                        }}
                        disabled={amountItem <= 1}
                        size="mini"
                        circular
                        icon="minus"
                      />
                    </List.Item>
                    <List.Item>
                      <Input
                        transparent
                        placeholder="1"
                        value={amountItem}
                        style={{ width: 18 }}
                      />
                    </List.Item>
                    <List.Item>
                      <Button
                        onClick={() => {
                          setAmountItem(amountItem + 1);
                        }}
                        disabled={inCartAmount + amountItem >= item.stock}
                        size="mini"
                        circular
                        icon="plus"
                      />
                    </List.Item>
                    <List.Item>{`Stok  ${item.stock}`}</List.Item>
                  </List>
                </List.Item>
                <List.Item>
                  <List.Content floated="left" verticalAlign="middle">
                    <Header as="h5">Sub Total</Header>
                  </List.Content>
                  <List.Content floated="right">
                    <Header as="h3">{`Rp${item.price * amountItem}`}</Header>
                  </List.Content>
                </List.Item>
                <List.Item></List.Item>
              </List>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button animated="fade">
                  <Button.Content visible>Buy</Button.Content>
                  <Button.Content
                    hidden
                    floated="left"
                    style={{ borderRadius: 8, marginRight: 2 }}
                  >
                    Checkout Now!
                  </Button.Content>
                </Button>
                <Button
                  color="teal"
                  animated="vertical"
                  onClick={addItemToCart}
                  disabled={inCartAmount === item.stock}
                >
                  <Button.Content visible>
                    <Icon name="cart arrow down" />
                  </Button.Content>
                  <Button.Content
                    hidden
                    icon
                    floated="right"
                    style={{ borderRadius: 8, marginLeft: 2 }}
                  >
                    Add to Cart
                  </Button.Content>
                </Button>
              </div>
              <div
                className="ui two buttons"
                style={{ marginTop: 8, marginLeft: 2 }}
              >
                <Button animated onClick={() => onChatVisible(chat, message)}>
                  <Button.Content visible>
                    <Icon name="chat" />
                    {" Chat"}
                  </Button.Content>
                  <Button.Content hidden style={{ borderRadius: 8 }}>
                    Go to Chat?
                  </Button.Content>
                </Button>
              </div>
            </Card.Content>
          </Card>
          {visible ? (
            <Message
              positive
              onDismiss={handleDismiss}
              header="Added to cart!"
              content="Open cart menu for details."
              style={{ boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)" }}
            />
          ) : (
            <div></div>
          )}
        </Sticky>
      </>
    );
  }
  return itemMarkup;
}

const ADD_TO_CART_MUTATION = gql`
  mutation addCartItem($itemId: ID!, $amountItem: Int!) {
    addCartItem(itemId: $itemId, note: "", amountItem: $amountItem) {
      note
      amountItem
      createdAt
    }
  }
`;

export default ItemTransactionCard;
