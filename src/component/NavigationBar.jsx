import React from 'react';
import styles from '../modules/navbar.module.css';
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu, Link, Button,  NavbarMenuItem} from "@nextui-org/react";
import Logo from '../assets/logo.png';
import { Outlet, Link as Links } from "react-router-dom";

function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "We Have",
    "Shop",
  ];

  return (
    <>
      <Navbar  
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarBrand>
          <a className={styles.brand} href="/">DsNOUTS</a>
        </NavbarBrand>

        <NavbarContent className="sm:hidden" justify="end">
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          <NavbarItem>
            <Link color="foreground" to="/">Home</Link>
          </NavbarItem> 
          <NavbarItem>
            <Link color="foreground">We Have</Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground">
            <Links to="/shop">Broswe</Links>
            </Link>
          </NavbarItem>  
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                }
                href={`/${item.toLowerCase().replace(" ", "-")}`} 
                size="md"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>

      </Navbar>
    </>
  );
};
export default NavigationBar;