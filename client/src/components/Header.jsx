import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../styles/Header.css";
import { LoginSignUp } from "../components"

// TODO: add conditionals for if logged in, highlight selected tab, add login functionality
// TODO: pull user name from database

const headersData = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Browse",
      href: "/browse",
    },
    {
      label: "Favorites",
      href: "/favorites",
    },
    {
      label: "News/PR",
      href: "/news",
    },
];

export default function Header(props) {
    // Currently our only display; creates full navbar
    const displayDesktop = () => {
        return (
            <Navbar sticky="top" bg="light" expand="lg">
                {pawPalsLogo}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {getMenuButtons()}
                    </Nav>
                    <Nav >
                        {displayLogIn()}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    };

    const pawPalsLogo = (
        <Navbar.Brand href="#">PawPals</Navbar.Brand>
    );

    const login = (
        <LoginSignUp />
    );

    const settingDropDown = (
        <NavDropdown title="Hello Alexis" id="navbarScrollingDropdown">
            <NavDropdown.Item>Settings</NavDropdown.Item>
            <NavDropdown.Item>Logout</NavDropdown.Item>
        </NavDropdown>
    );

    // Create the Home, Browse, Favorite, and News/PR nav links
    const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
            // if we are not logged in do not render Favorites
            // except that Kris needs this to check if favs is working :-)
            if(props.isLoggedIn && label === 'Favorites') { return <></>; }
            // if (!props.isLoggedIn && label === 'Favorites'){ return <></>; }
            else {
                return (
                    <Nav.Link href={href}>{label}</Nav.Link>
                );
            }
        });
    };

    // decide whether we display sign in or the person's name (if they are signed in)
    const displayLogIn = () => {
        if (props.isLoggedIn){
            return settingDropDown;
        }
        else {
            return login;
        }
    }
    
    return (
        <header>
                {displayDesktop()}
        </header>
    );
}