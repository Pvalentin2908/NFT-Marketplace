import React, { ReactElement } from 'react';
import cs from 'classnames';
import s from './style.module.scss';
import Play from './assets/play.png';

export default function Exclusive(): ReactElement {
  return (
    <div className={cs(s.cardExclusive)}>
      <div className="">Exclusive NFT for Digital and Real-world Assets</div>
      <div className="">
        <h3>
          The world s first non-fungible token (NFT) marketplace for both
          digital and physical assets.
        </h3>
      </div>
      <div className="d-flex flex-row justify-content-start">
        <button type="button" className=" mx-3">
          Explore
        </button>
        <button type="button" className="">
          Create
        </button>
      </div>
      <div className="d-flex flex-row justify-content-start">
        <img src={Play} alt="Play" />
        <div className="">Learn more about TheFund</div>
      </div>
    </div>
  );
}
