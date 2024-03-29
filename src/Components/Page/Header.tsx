import React, { ReactElement } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import cs from 'classnames';
import s from './style.module.scss';
import Logo from './assets/logo.png';
import Search from './assets/search.svg';
import Wallet from './assets/wallet-one.png';
import Frame from './assets/Frame 1.svg';
import SwitchTheme from '../SwitchTheme/SwitchTheme';

export default function Header(): ReactElement {
  return (
    <div className={cs(s.fontHeader, 'position-relative zIndex4')}>
      <Navbar expand="lg">
        <Container className="d-flex flex-row justify-content-between">
          <div className="d-flex flex-row justify-content-between col-4 align-items-center">
            <Navbar.Brand href="#home ">
              <div>
                <img src={Logo} alt="Logo" />
              </div>
            </Navbar.Brand>
            <div
              className={cs(
                s.borderSearch,
                'd-flex flex-row justify-content-between col-12 d-none d-lg-block',
              )}
            >
              <div className={s.search}>
                <img src={Search} alt="Search" />
              </div>
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
          <div className=" d-flex flex-row justify-content-center text-lg-start text-center">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link
                  href="#link"
                  className="text-white d-flex flex-row justify-content-center align-items-center"
                >
                  Explore
                </Nav.Link>
                <Nav.Link
                  href="#link"
                  className="text-white d-flex flex-row justify-content-center align-items-center"
                >
                  Activity
                </Nav.Link>
                <Nav.Link
                  href="#link"
                  className="text-white d-flex flex-row justify-content-center align-items-center"
                >
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
                  <button
                    type="button"
                    className={cs(s.walletButton, 'px-4 py-1')}
                  >
                    <div className="d-flex flex-row justify-content-center allign-items-center">
                      <img src={Wallet} alt="Wallet" />
                      <div className="mx-2">Connect Wallet</div>
                    </div>
                  </button>
                </Nav.Link>
                <div className="d-flex flex-row justify-content-center align-items-center mx-2">
                  <SwitchTheme />
                </div>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}
