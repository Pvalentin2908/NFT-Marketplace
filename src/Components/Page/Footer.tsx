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
    <div className={cs(s.cardFooter, ' ')}>
      <div className="container d-flex flex-row justify-content-between align-items text-white">
        <div className="d-flex flex-column justify-content-between align-items-start">
          <div className=" ">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="text-start">
            <h4>THEFUND</h4>
          </div>
          <div className="text-start">
            TheFund is the world s first non-fungible token (NFT) marketplace
            for both digital and physical assets
          </div>
        </div>
        <div className="d-flex flex-column justify-content-between align-items-start  py-5 px-5">
          <div className="mb-2">
            <b className={cs(s.textFooter)}>Company</b>
          </div>
          <div className="mb-1 text-white">
            <a href="#link" className="text-white">
              {' '}
              About
            </a>
          </div>
          <div className="mb-1 text-white">
            <a href="#link" className="text-white">
              Careers
            </a>
          </div>
          <div className="mb-1 text-white">
            <a href="#link" className="text-white">
              Ventures
            </a>
          </div>
          <div className="mb-1">
            <a href="#link" className="text-white">
              Grants
            </a>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-between align-items-start  py-5 px-5">
          <div className="mb-2">
            <b className={cs(s.textFooter)}>Stats</b>
          </div>
          <div className="mb-1 text-white">
            <a href="#link" className="text-white">
              Rankings
            </a>
          </div>
          <div className="mb-1 text-white">
            <a href="#link" className="text-white">
              Activity
            </a>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-between align-items-start  py-5 px-5">
          <div className="mb-2">
            <b className={cs(s.textFooter)}>Resources</b>
          </div>
          <div className="mb-1 text-white">
            <a href="#link" className="text-white">
              Help center
            </a>
          </div>
          <div className="mb-1 text-white">
            <a href="#link" className="text-white">
              Gas-Free Marketplace
            </a>
          </div>
          <div className="mb-1 text-white">
            <a href="#link" className="text-white">
              Blog
            </a>
          </div>
          <div className="mb-1 text-white">
            <a href="#link" className="text-white">
              Newsletters
            </a>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-between align-items-start  py-5 px-5">
          <div className="mb-2">
            <b className={cs(s.textFooter)}>Follow us on</b>
          </div>
          <div className="d-flex flex-row justify-content-between">
            <div
              className={cs(
                s.cardServices,
                'd-flex flex-row justify-content-between p-2 align-items-start',
              )}
            >
              <img src={Vector} alt="logo" />
            </div>
            <div
              className={cs(
                s.cardServices,
                'd-flex flex-row justify-content-between p-2 align-items-start',
              )}
            >
              <img src={Twitter} alt="logo" />
            </div>
            <div
              className={cs(
                s.cardServices,
                'd-flex flex-row justify-content-between p-2 align-items-start',
              )}
            >
              <img src={Youtube} alt="logo" />
            </div>
          </div>
          <div className="d-flex flex-row justify-content-between mt-2">
            <div
              className={cs(
                s.cardServices,
                'd-flex flex-row justify-content-between p-2 align-items-start',
              )}
            >
              <img src={Facebook} alt="logo" />
            </div>
            <div
              className={cs(
                s.cardServices,
                'd-flex flex-row justify-content-between p-2 align-items-start',
              )}
            >
              <img src={Instagram} alt="logo" />
            </div>
            <div
              className={cs(
                s.cardServices,
                'd-flex flex-row justify-content-between p-2 align-items-start',
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
