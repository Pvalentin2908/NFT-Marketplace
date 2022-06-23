import React, { ReactElement } from 'react';
import cs from 'classnames';
import s from './style.module.scss';
import Logo2 from './assets/Logo2.png';
import Facebook from './assets/facebook-one.png';
import Instagram from './assets/instagram.png';
import TikTok from './assets/tiktok.png';
import Twitter from './assets/twitter.png';
import Vector from './assets/Vector.png';
import Youtube from './assets/youtube.png';

export default function Footer(): ReactElement {
  return (
    <div className={s.cardFooter}>
      <div className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-start align-items-center text-white">
        <div className="d-flex flex-column justify-content-start align-items-start">
          <div className="justify-content-lg-start justify-content-center text-lg-start text-center mb-2 w-100 w-lg-0">
            <img src={Logo2} alt="Logo2" />
          </div>
          <div className="justify-content-lg-start justify-content-center text-lg-start text-center mb-2 w-100 w-lg-0">
            <h4>THEFUND</h4>
          </div>
          <div className="text-lg-start text-center">
            TheFund is the world s first non-fungible token (NFT) marketplace
            for both digital and physical assets
          </div>
        </div>
        <div className="d-flex flex-column justify-content-between py-4 px-4 text-lg-start text-center">
          <div className="mb-2">
            <b className={cs(s.textFooter)}>Company</b>
          </div>
          <div className="mb-1 text-white">
            <a href="#link" className="text-white decoration-none">
              About
            </a>
          </div>
          <div className="mb-1 text-white">
            <a href="#link" className="text-white decoration-none">
              Careers
            </a>
          </div>
          <div className="mb-1 text-white">
            <a href="#link" className="text-white decoration-none">
              Ventures
            </a>
          </div>
          <div className="mb-1">
            <a href="#link" className="text-white decoration-none">
              Grants
            </a>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-start text-lg-start text-center  py-4 px-4">
          <div className="mb-2">
            <b className={cs(s.textFooter)}>Stats</b>
          </div>
          <div className="mb-1 text-white">
            <a href="#link" className="text-white decoration-none">
              Rankings
            </a>
          </div>
          <div className="mb-1 text-white">
            <a href="#link" className="text-white decoration-none">
              Activity
            </a>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-between text-lg-start text-center py-4 px-4">
          <div className="mb-2">
            <b className={cs(s.textFooter)}>Resources</b>
          </div>
          <div className="mb-1 text-white">
            <a href="#link" className="text-white decoration-none">
              Help center
            </a>
          </div>
          <div className="mb-1 text-white">
            <a href="#link" className="text-white decoration-none">
              Gas-Free Marketplace
            </a>
          </div>
          <div className="mb-1 text-white">
            <a href="#link" className="text-white decoration-none">
              Blog
            </a>
          </div>
          <div className="mb-1 text-white">
            <a href="#link" className="text-white decoration-none">
              Newsletters
            </a>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-between align-items-start  py-4 px-4">
          <div className="mb-2 w-100 text-lg-start text-center">
            <b className={cs(s.textFooter, 'mx-4')}>Follow us on</b>
          </div>
          <div className="d-flex flex-row justify-content-between">
            <div
              className={cs(
                s.cardServices,
                'd-flex flex-row justify-content-between p-2 align-items-center mx-4',
              )}
            >
              <a href="#link" className="text-white">
                <img src={Vector} alt="logo" />
              </a>
            </div>
            <div
              className={cs(
                s.cardServices,
                'd-flex flex-row justify-content-between p-2 align-items-start mx-4',
              )}
            >
              <a href="#link" className="text-white">
                <img src={Twitter} alt="logo" />
              </a>
            </div>
            <div
              className={cs(
                s.cardServices,
                'd-flex flex-row justify-content-between p-2 align-items-start mx-4',
              )}
            >
              <a href="#link" className="text-white">
                <img src={Youtube} alt="logo" />
              </a>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-between mt-2">
            <div
              className={cs(
                s.cardServices,
                'd-flex flex-row justify-content-between p-2 align-items-start mx-4',
              )}
            >
              <a href="#link" className="text-white">
                <img src={Facebook} alt="logo" />
              </a>
            </div>
            <div
              className={cs(
                s.cardServices,
                'd-flex flex-row justify-content-between p-2 align-items-start mx-4',
              )}
            >
              <a href="#link" className="text-white">
                <img src={Instagram} alt="logo" />
              </a>
            </div>
            <div
              className={cs(
                s.cardServices,
                'd-flex flex-row justify-content-between p-2 align-items-center mx-4',
              )}
            >
              <a href="#link" className="text-white">
                <img src={TikTok} alt="logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
