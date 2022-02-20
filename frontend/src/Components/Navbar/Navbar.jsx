import React from 'react';
import './style.css';
import { useSelector } from "react-redux";

const Navbar = () => {
    const { isAuthenticated, user } = useSelector((state) => state.user);
    return (
        <>
            <nav classname="main-nav">
                <ul>
                    {isAuthenticated && user.role !== "user"&&(
                        <li><a href="/reports">COMPLAINTS</a></li>
                    )}
                    <li><a href="/chat">DISCUSSION</a></li>
                    <li><a href="/info">INFORMATION</a></li>
                    <li><a href="/crime">REPORT</a></li>
                    <li><a href="/">HOME</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;