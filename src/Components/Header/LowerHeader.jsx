import React from 'react';
import classes from './Header.module.css'
import MenuIcon from '@mui/icons-material/Menu';

function LowerHeader() {
    return (
        <div className={classes.lower__container}>

            <ul>
                <li>
                    <MenuIcon />
                    <p>All</p>
                </li>
                <li>Medical Care</li>
                <li>Best Sellers</li>
                <li>Amazon Basics</li>
                <li>Prime</li>
                <li>News Realses</li>
                <li>Today's Deal</li>
                <li>Music</li>
                <li>Groceries</li>
                <li>Customer Service</li>
                <li>Amazon Home</li>
                <li>Registry</li>
                <li>Books</li>
                <li>Gift Cards</li>
                <li>Pharmacy</li>
                <li>Smart Home</li>
            </ul>
        </div>
    )
}

export default LowerHeader
