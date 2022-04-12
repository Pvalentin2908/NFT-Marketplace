import React, { ReactElement } from 'react';
import { Navbar, Container, Nav, NavbarBrand } from 'react-bootstrap';
import cs from 'classnames';
import s from './style.module.scss';
import Logo from './assets/logo.png';
import Search from './assets/search.png';
import Wallet from './assets/wallet-one.png';

export default function Header(): ReactElement {
  return (
    <div className={cs(s.fontHeader, '')}>
      <Navbar expand="lg">
        <Container className="d-flex flex-row justify-content-between">
          <div className="d-flex flex-row justify-content-between">
            <Navbar.Brand href="#home ">
              <div>
                <img src={Logo} alt="Logo" />
              </div>
            </Navbar.Brand>
            <Navbar.Brand>
              <div
                className={cs(
                  s.borderSearch,
                  'd-flex flex-row justify-content-between',
                )}
              >
                <img src={Search} alt="Search" />
                <form action="/action_page.php">
                  <input
                    type="search"
                    id="gsearch"
                    name="gsearch"
                    placeholder="  Search items, collections, and accounts"
                  />
                </form>
              </div>
            </Navbar.Brand>
          </div>
          <div>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#link">Explore</Nav.Link>
                <Nav.Link href="#link">Activity</Nav.Link>
                <Nav.Link href="#link">Resources</Nav.Link>
                <Nav.Link href="#link">
                  <button type="button" className={cs(s.textButton)}>
                    Account
                  </button>
                </Nav.Link>
                <Nav.Link href="#link">
                  <button type="button" className={cs(s.walletButton, '')}>
                    <img src={Wallet} alt="Wallet" />
                    Connect Wallet
                  </button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}
