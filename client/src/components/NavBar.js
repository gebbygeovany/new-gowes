import React, { useContext, useState } from 'react'
import { Menu, Dropdown, Button, Segment, Image, Icon, Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { IoMdBicycle } from 'react-icons/io';


import { AuthContext } from '../context/auth'
import MyPopup from './MyPopup';


function NavBar(props) {

    const { user, logout } = useContext(AuthContext)
    const pathname = window.location.pathname
    const path = pathname === '/' ? 'profile' : pathname.substr(1)

    const [activeItem, setActiveItem] = useState(path)

    const handleItemClick = (e, { name }) => {
        setActiveItem(name)
        if (name === 'cart') {
            window.location.href = '/cart'
        } else if (name === 'bookmark') {
            window.location.href = '/wishList'
        } else if (name === 'login') {
            window.location.href = '/login'
        } else if (name === 'home' || 'shop') {
            window.location.href = '/'
        }
    }
    const handleItemHover = () => {
        // handleItemClick()
        props.onDimmed()
    }

    const navBar = user ? (

        // logged in navbar
        <Segment>
            <div className="ui huge top inverted fixed menu " style={{ height: 80, zIndex: 1100 }}>
                <Menu size="large" fluid inverted secondary>
                    <Menu.Item></Menu.Item>
                    <Menu.Item
                        active={activeItem === 'home'}
                        // onClick={handleItemClick}
                        as={Link}
                        to="/"
                    >
                        <IoMdBicycle color='rgb(206, 206, 206)' style={{ fontSize: 28, marginRight: 5 }}></IoMdBicycle>
                        <div className="logo">Gowes</div>
                    </Menu.Item>
                    {/* <Menu.Item>
                        <Input
                            icon={{ name: 'search', circular: true, link: true }}
                            placeholder='Search...'
                            style={{width:500}}
                        />
                    </Menu.Item> */}
                    {/* <Menu.Item
                        // onMouseEnter={handleItemHover}
                        // onMouseLeave={handleItemHover}
                        name='shop'
                        active={activeItem === 'shop'}
                        // onClick={handleItemClick}
                        as={Link}
                        to="/"
                    /> */}
                    {/* <Menu.Item
                        name='event'
                        active={activeItem === 'event'}
                        // onClick={handleItemClick}
                        as={Link}
                        to="/event"
                    /> */}


                    <Menu.Menu position='right'>
                        <Menu.Item
                            name='bookmark'
                            active={activeItem === 'bookmark'}
                            // onClick={handleItemClick}
                            as={Link}
                            to="/wishList"
                        >
                            <MyPopup content="Wishlist">
                                <Icon name="heart" centered="true"></Icon>
                            </MyPopup>
                        </Menu.Item>

                        <Menu.Item
                            name='cart'
                            active={activeItem === 'cart'}
                            // onClick={handleItemClick}
                            as={Link}
                            to="/cart"
                        >
                            <MyPopup content="Cart">
                                <Icon name="cart" centered="true"></Icon>
                            </MyPopup>
                        </Menu.Item>

                        <Menu.Item
                        // onMouseEnter={handleItemHover}
                        // onMouseLeave={handleItemHover}
                        >
                            <Image circular src="https://react.semantic-ui.com/images/avatar/small/stevie.jpg" style={{ height: 30, marginRight: 0 }} verticalAlign='middle' />
                            <Dropdown item text={user.name} style={{ marginLeft: 0 }}>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to="/profile/profileCard"><Icon name="user" />My Profile</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/myStore/myStoreDetailsCard"><Icon name="bicycle" />My Store</Dropdown.Item>
                                    {/* <Dropdown.Item>Transaksi</Dropdown.Item> */}
                                    <Dropdown.Item as={Link} to="/" name='logout' onClick={logout}><Icon name="sign out" color="red" /> Logout</Dropdown.Item>
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
                <div className="ui huge top inverted fixed menu " style={{ height: 80, zIndex: 1100 }}>
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

                        {/* <Menu.Item
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
                        /> */}


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