import React, { useContext, useState } from 'react'
import { Menu, Dropdown, Button, Segment, Image, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { IoMdBicycle } from 'react-icons/io';


import { AuthContext } from '../context/auth'
import MyPopup from './MyPopup';


function NavBar() {

    const { user, logout } = useContext(AuthContext)
    const pathname = window.location.pathname
    const path = pathname === '/' ? 'shop' : pathname.substr(1)

    const [activeItem, setActiveItem] = useState(path)

    const handleItemClick = (e, { name }) => setActiveItem(name)

    const navBar = user ? (

        // logged in navbar
        <Segment inverted >
            <div class="ui huge top inverted fixed menu " style={{ height: 80 }}>
                <Menu size="large" fluid fixed inverted secondary>
                    <Menu.Item></Menu.Item>
                    <Menu.Item
                        active={activeItem === 'home'}
                        onClick={handleItemClick}
                        as={Link}
                        to="/"
                    >
                        <IoMdBicycle color='rgb(206, 206, 206)' style={{ fontSize: 28, marginRight: 5 }}></IoMdBicycle>
                        <div className="logo">Gowes</div>
                    </Menu.Item>
                    <Menu.Item
                        name='shop'
                        active={activeItem === 'shop'}
                        onClick={handleItemClick}
                        as={Link}
                        to="/"
                    />
                    <Menu.Item
                        name='event'
                        active={activeItem === 'event'}
                        onClick={handleItemClick}
                        as={Link}
                        to="/event"
                    />


                    <Menu.Menu position='right'>
                        <Menu.Item
                            name='bookmark'
                            active={activeItem === 'bookmark'}
                            onClick={handleItemClick}
                            as={Link}
                            to="/bookmark"
                        >
                            <MyPopup content="Bookmarks">
                                <Icon name="bookmark" centered></Icon>
                            </MyPopup>
                        </Menu.Item>

                        <Menu.Item
                            name='cart'
                            active={activeItem === 'cart'}
                            onClick={handleItemClick}
                            as={Link}
                            to="/cart"
                        >
                            <MyPopup content="Cart">
                                <Icon name="cart" centered></Icon>
                            </MyPopup>
                        </Menu.Item>

                        <Menu.Item>
                            <Image circular src="https://react.semantic-ui.com/images/avatar/small/stevie.jpg" style={{ height: 30, marginRight: 0 }} verticalAlign='middle' />
                            <Dropdown item text={user.username} style={{ marginLeft: 0 }}>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Profil</Dropdown.Item>
                                    <Dropdown.Item>Keranjang</Dropdown.Item>
                                    <Dropdown.Item>Transaksi</Dropdown.Item>
                                    <Dropdown.Item name='logout' onClick={logout}>Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Menu.Item>

                        <Menu.Item></Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>

        </Segment>
    ) : (
        // guest navbar
            <Segment inverted>
                <div class="ui huge top inverted fixed menu " style={{ height: 80 }}>
                    <Menu fluid inverted secondary size='large'>
                        <Menu.Item></Menu.Item>
                        <Menu.Item
                            active={activeItem === ''}
                            onClick={handleItemClick}
                            as={Link}
                            to="/"
                        >
                            <IoMdBicycle color='rgb(206, 206, 206)' style={{ fontSize: 28, marginRight: 5 }}></IoMdBicycle>
                            <div className="logo">Gowes</div>
                        </Menu.Item>

                        <Menu.Item
                            name='shop'
                            active={activeItem === 'shop'}
                            onClick={handleItemClick}
                            as={Link}
                            to="/"
                        />
                        <Menu.Item
                            name='event'
                            active={activeItem === 'event'}
                            onClick={handleItemClick}
                            as={Link}
                            to="/event"
                        />


                        <Menu.Menu position='right'>
                            <Menu.Item>
                                <Button
                                    color='teal'
                                    inverted
                                    name='login'
                                    active={activeItem === 'login'}
                                    onClick={handleItemClick}
                                    as={Link}
                                    to="/login"
                                    style={{ marginRight: 10 }}
                                >
                                    Sign In
                            </Button>
                            </Menu.Item>
                            <Menu.Item></Menu.Item>
                        </Menu.Menu>
                    </Menu>
                </div>
            </Segment>

        )
    return navBar
}

export default NavBar