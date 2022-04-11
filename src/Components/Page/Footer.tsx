import React, { ReactElement } from 'react';
import cs from 'classnames';
import s from './style.module.scss';
import Logo from './assets/logo.png';
import Facebook from './assets/facebook-one.png';
import Instagram from './assets/instagram.png';
import TikTok from './assets/tiktok.png';
import Twitter from './assets/twitter.png';
import Vector from './assets/Vector.png';
import Youtube from './assets/youtube.png';

export default function Footer(): ReactElement {
  return (
    <div
      className={cs(s.cardFooter, 'd-flex flex-row justify-content-between')}
    >
      <div className="container d-flex flex-row justify-content-between align-items text-white">
        <div className="d-flex flex-column align-items-center align-items-lg-start">
          <div className="mb-1">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="text-center text-lg-start">
            <h4>THEFUND</h4>
          </div>
          <div className="text-center text-lg-start mb-3">
            TheFund is the world s first non-fungible token (NFT) marketplace
            for both digital and physical assets
          </div>
        </div>
        <div className="d-flex flex-column align-items-center align-items-lg-start  py-5 px-2 px-lg-5">
          <div className="mb-3">
            <b className={cs(s.textFooter)}>Company</b>
          </div>
          <div className="mb-2">
            <a href="#link"> About</a>
          </div>
          <div className="mb-2">
            <a href="#link">Careers</a>
          </div>
          <div className="mb-2">
            <a href="#link">Ventures</a>
          </div>
          <div className="mb-2">
            <a href="#link">Grants</a>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center align-items-lg-start  py-5 px-2 px-lg-5">
          <div className="mb-3">
            <b className={cs(s.textFooter)}>Stats</b>
          </div>
          <div className="mb-2">
            <a href="#link">Rankings</a>
          </div>
          <div className="mb-2">
            <a href="#link">Activity</a>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center align-items-lg-start  py-5 px-2 px-lg-5">
          <div className="mb-3">
            <b className={cs(s.textFooter)}>Resources</b>
          </div>
          <div className="mb-2">
            <a href="#link">Help center</a>
          </div>
          <div className="mb-2">
            <a href="#link">Gas-Free Marketplace</a>
          </div>
          <div className="mb-2">
            <a href="#link">Blog</a>
          </div>
          <div className="mb-2">
            <a href="#link">Newsletters</a>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center align-items-lg-start  py-5 px-2 px-lg-5">
          <div className="mb-3">
            <b className={cs(s.textFooter)}>Follow us on</b>
          </div>
          <div className="d-flex flex-row justify-content-between flex-wrap">
            <div
              className={cs(
                s.cardServices,
                'd-flex flex-column justify-content-between p-4 align-items-center align-items-lg-start',
              )}
            >
              <img src={Vector} alt="logo" />
            </div>
            <div
              className={cs(
                s.cardServices,
                'd-flex flex-column justify-content-between p-4 align-items-center align-items-lg-start',
              )}
            >
              <img src={Twitter} alt="logo" />
            </div>
            <div
              className={cs(
                s.cardServices,
                'd-flex flex-column justify-content-between p-4 align-items-center align-items-lg-start',
              )}
            >
              <img src={Youtube} alt="logo" />
            </div>
          </div>
          <div className="d-flex flex-row justify-content-between mt-5 flex-wrap">
            <div
              className={cs(
                s.cardServices,
                'd-flex flex-column justify-content-between p-4 align-items-center align-items-lg-start',
              )}
            >
              <img src={Facebook} alt="logo" />
            </div>
            <div
              className={cs(
                s.cardServices,
                'd-flex flex-column justify-content-between p-4 align-items-center align-items-lg-start',
              )}
            >
              <img src={Instagram} alt="logo" />
            </div>
            <div
              className={cs(
                s.cardServices,
                'd-flex flex-column justify-content-between p-4 align-items-center align-items-lg-start',
              )}
            >
              <img src={TikTok} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
