import React, { ReactElement } from 'react';
import cs from 'classnames';
import s from './style.module.scss';
import Play from './assets/play.png';
import Button from './assets/Buttonx.svg';
import Ball from './assets/10.png';

export default function Exclusive(): ReactElement {
  return (
    <div className={cs(s.cardExclusive, 'position-relative')}>
      <div className="container">
        <div className={cs(s.opacity, '')}>
          Exclusive NFT for Digital and Real-world Assets
        </div>
        <div className="text-white">
          <h3>
            The world s first non-fungible token (NFT) marketplace for both
            digital and physical assets.
          </h3>
        </div>
        <div className="d-flex flex-row justify-content-start mt-4">
          <button type="button" className={cs(s.textButton, 'mx-3 w-10 h-10')}>
            <img src={Button} alt="Button" />
          </button>
          <button type="button" className={cs(s.createButton, '')}>
            Create
          </button>
        </div>
        <div className="d-flex flex-row justify-content-start mt-5">
          <img src={Play} alt="Play" />
          <div className="text-white">Learn more about TheFund</div>
        </div>
      </div>
      <div className={cs(s.ellipseRightBox, 'position-absolute')}>
        <div className={s.ellipseRight} />
      </div>
      <div className={cs(s.ellipseLeftBox, 'position-absolute')}>
        <div className={s.ellipseLeft} />
      </div>
      <div className={cs(s.ellipseRightBox2, 'position-absolute')}>
        <div className={s.ellipseRight} />
      </div>
      <div className={cs(s.ellipseLeftBox2, 'position-absolute')}>
        <div className={s.ellipseLeft} />
      </div>
    </div>
  );
}
