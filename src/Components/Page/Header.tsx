import React, { ReactElement } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import cs from 'classnames';
import s from './style.module.scss';
import Logo from './assets/logo.png';
import Search from './assets/search.png';
import Wallet from './assets/wallet-one.png';

export default function Header(): ReactElement {
  return (
    <div className={cs(s.fontHeader, 'd-flex justify-content-center flex-row')}>
      <Navbar expand="lg">
        <Container className=" align-items-start d-flex justify-content-center flex-row">
          <div>
            <Navbar.Brand href="#home ">
              <img src={Logo} alt="Logo" />
            </Navbar.Brand>
          </div>
          <div>
            <Navbar.Brand href="#search">
              <div className="container">
                <div className="row height d-flex justify-content-center align-items-center">
                  <div className="col-md-6">
                    <div className="form">
                      {' '}
                      <i className="fa-search" />
                      <input
                        type="text"
                        className="form-control form-input"
                        placeholder="Search items, collections, and accounts"
                      />
                      <span className="left-pan">
                        <i className="fa-microphone" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Navbar.Brand>
          </div>
          <div>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#link">Explore</Nav.Link>
                <Nav.Link href="#link">Activity</Nav.Link>
                <Nav.Link href="#link">Resources</Nav.Link>
                <Nav.Link href="#link">About us</Nav.Link>
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
