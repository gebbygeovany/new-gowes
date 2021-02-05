import React, { useState } from 'react';
import { Icon, Transition, Segment, Card, Container } from 'semantic-ui-react';

function ChatFloatingButton() {
    const [ visible, setVisible ] = useState(true)
    const toggleVisibility = () => {setVisible(!visible)}

    const style = {
        borderRadius: 26,
        margin: 0,
        top: 'auto',
        right: 80,
        bottom: 40,
        left: 'auto',
        position: 'fixed',
        zIndex: 1000,
        paddingRight: 30,
        paddingLeft: 30,
        paddingTop: 10,
        paddingBottom: 10
    };

    const cardStyle = {
        borderRadius: 26,
        margin: 0,
        top: 'auto',
        right: 80,
        bottom: 40,
        left: 'auto',
        position: 'fixed',
        zIndex: 1000
    };

    const spanStyle = { fontSize: 14, fontWeight: 'bold'};
    return (
        <Container>
            <Transition visible={visible} animation='scale' duration={500}>
                <Segment onClick={toggleVisibility} href="#" floated="right" raised="true" style={style}>
                    <Icon color="teal" size="large" name="discussions"/>
                    <span style={spanStyle}>Chat</span>
                </Segment>
            </Transition>
            <Transition visible={!visible} animation='scale' duration={500}>
            <Card onClick={toggleVisibility} href="#" style={cardStyle}>
                <Card.Content header='About Amy' />
                <Card.Content description="just description" />
                <Card.Content extra>
                <Icon name='user' />4 Friends
                </Card.Content>
            </Card>
            </Transition>
        </Container>


    )
}
export default ChatFloatingButton