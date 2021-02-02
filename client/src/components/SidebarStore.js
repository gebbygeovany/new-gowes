import React, { useState } from 'react'
import { Grid, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom'



function SidebarStore() {

    const pathname = window.location.pathname
    const path = pathname === '/' ? 'shop' : pathname.substr(1)

    const [activeItem, setActiveItem] = useState(path)

    const handleItemClick = (e, { name }) => setActiveItem(name)

    return (
        <Menu pointing vertical fluid style={{ boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)' }}>
            <Menu.Item
                name='My Store'
                active={activeItem === 'My Store'}
                onClick={handleItemClick}
                // as={Link}
                // to="/"
            />
            <Menu.Item
                name='Items'
                active={activeItem === 'Items'}
                onClick={handleItemClick}
                // as={Link}
                // to="/"
            />
            <Menu.Item
                name='Sales'
                active={activeItem === 'Sales'}
                onClick={handleItemClick}
                // as={Link}
                // to="/bookmark"
            />
        </Menu>
    )
}

export default SidebarStore