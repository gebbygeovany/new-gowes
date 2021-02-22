import React, { useState } from 'react';
import {List, Image, Feed } from 'semantic-ui-react';

function ChatListCard({ chats, user }) {
    let obj = {id: 1}
    let objs = []
    for (var i = 0; i < 10; i++) {
        objs.push(obj)
    }
    const [isItemHovered, setItemHovered] = useState(
        {
            state: false,
            id: -1
        }
        )
    const onMouseEnterItem = {
        backgroundColor: '#F3F4F5',
        padding: 8,
        cursor: 'pointer'
    }
    const onMouseLeaveItem = {
        backgroundColor: '#FFFFFF',
        padding: 8,
    }

    const receiver = (users) => {
        let userReceiver
        if (users[0].id != user.id) {
            userReceiver = users[0]
        } else {
            userReceiver = users[1]
        }
        return userReceiver
    }

    const handleItemHovered= (id, state) => {
        setItemHovered({
                state: state,
                id: id
            })
        }
    return (
        <List>
            {chats.map((chat, index) => (
                <List.Item 
                    onMouseEnter={() => handleItemHovered(index, true)}
                    onMouseLeave={() => handleItemHovered(index, false)}
                    style={isItemHovered.state && isItemHovered.id == index ? onMouseEnterItem : onMouseLeaveItem}>
                    <Image avatar src='https://react.semantic-ui.com/images/avatar/small/tom.jpg' />
                    <List.Content>
                        <List.Header>{receiver(chat.users).seller.username}</List.Header>
                        Seller
                    </List.Content>
                </List.Item>
                ))}
        </List>
        );
}
export default ChatListCard