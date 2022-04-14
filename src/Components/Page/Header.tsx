import React, { ReactElement } from 'react';
import { Navbar, Container, Nav, NavbarBrand } from 'react-bootstrap';
import cs from 'classnames';
import s from './style.module.scss';
import Logo from './assets/logo.png';
import Search from './assets/search.png';
import Wallet from './assets/wallet-one.png';
import Frame from './assets/Frame 1.svg';

export default function Header(): ReactElement {
  return (
    <div className={cs(s.fontHeader, '')}>
      <Navbar expand="lg">
        <Container className="d-flex flex-row justify-content-between">
          <div className="d-flex flex-row justify-content-between col-4">
            <Navbar.Brand href="#home ">
              <div>
                <img src={Logo} alt="Logo" />
              </div>
            </Navbar.Brand>
            <div
              className={cs(
                s.borderSearch,
                'd-flex flex-row justify-content-between col-12',
              )}
            >
              <img src={Search} alt="Search" />
              <form
                action="/action_page.php"
                className={cs(s.borderSearch, 'col-12')}
              >
                <input
                  type="search"
                  id="gsearch"
                  name="gsearch"
                  placeholder="  Search items, collections, and accounts"
                  className={cs(s.borderSearch, 'w-100')}
                />
              </form>
            </div>
          </div>
          <div>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#link" className="text-white">
                  Explore
                </Nav.Link>
                <Nav.Link href="#link" className="text-white">
                  Activity
                </Nav.Link>
                <Nav.Link href="#link" className="text-white">
                  Resources
                </Nav.Link>
                <Nav.Link href="#link">
                  <div className={cs(s.backgroundButton)}>
                    <button type="button" className={cs(s.textButton)}>
                      <img src={Frame} alt="Frame" />
                    </button>
                  </div>
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
