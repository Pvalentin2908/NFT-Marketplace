import React, { ReactElement } from 'react';
import cs from 'classnames';
import s from './style.module.scss';
import Play from './assets/play.png';
import Button from './assets/Buttonx.svg';

export default function Exclusive(): ReactElement {
  return (
    <div className={cs(s.cardExclusive, '')}>
      <div className="container">
        <div className="">Exclusive NFT for Digital and Real-world Assets</div>
        <div className="">
          <h3>
            The world s first non-fungible token (NFT) marketplace for both
            digital and physical assets.
          </h3>
        </div>
        <div className="d-flex flex-row justify-content-start">
          <button type="button" className={cs(s.textButton, 'mx-3 w-10 h-10')}>
            <img src={Button} alt="Button" />
          </button>
          <button type="button" className={cs(s.walletButton, 'px-5 py-2')}>
            Create
          </button>
        </div>
        <div className="d-flex flex-row justify-content-start">
          <img src={Play} alt="Play" />
          <div className="">Learn more about TheFund</div>
        </div>
      </div>
    </div>
  );
}
