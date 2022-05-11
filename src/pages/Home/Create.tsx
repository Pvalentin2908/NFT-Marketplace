import React, { ReactElement } from 'react';
import cs from 'classnames';
import s from './style.module.scss';
import Wallet from './assets/wallet-color.png';
import Shop from './assets/shopping-bag.png';
import Triangle from './assets/triangle-round-rectangle.png';
import Picture2 from './assets/picture.png';

export default function Create(): ReactElement {
  return (
    <div className="container">
      <div className={cs(s.marginBottom64, 'text-white')}>
        <h3>Create and sell your NFTs</h3>
      </div>
      <div
        className={cs(
          s.marginBottom221,
          'd-flex flex-column flex-lg-row justify-content-between container',
        )}
      >
        <div className="d-flex flex-column justify-content-center mx-5 my-5 align-items-center">
          <div className="w-50 h-50 justify-content-center align-items-center">
            <img src={Wallet} alt="Wallet" />
          </div>
          <h6 className="text-white font-16">Set up your wallet</h6>
          <div className="text-white text-justify font-14">
            Once you ve set up your wallet of choice, connect it to OpenSea by
            clicking the wallet icon in the top right corner. Learn about the
            <span className={s.created}>wallets we </span>
            support.
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center mx-5 my-5 align-items-center">
          <div className="w-50 h-50 justify-content-center align-items-center">
            <img src={Triangle} alt="Triangle" />
          </div>
          <h6 className="text-white font-16">Create your collection</h6>
          <div className="text-white text-justify font-14">
            Click
            <span className={s.created}> My Collections </span>
            and set up your collection. Add social links, a description, profile
            & banner images, and set a secondary sales fee.
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center mx-5 my-5 align-items-center">
          <div className="w-50 h-50 justify-content-center align-items-center">
            <img src={Picture2} alt="Picture2" />
          </div>
          <h6 className="text-white font-16">Add your NFTs</h6>
          <div className="text-white text-justify font-14">
            Upload your work (image, video, audio, or 3D art), add a title and
            description, and customize your NFTs with properties, stats, and
            unlockable content.
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center mx-5 my-5 align-items-center">
          <div className="w-50 h-50 justify-content-center align-items-center">
            <img src={Shop} alt="Shop" />
          </div>
          <h6 className="text-white font-16">List them for sale</h6>
          <div className="text-white text-justify font-14">
            Choose between auctions, fixed-price listings, and declining-price
            listings. You choose how you want to sell your NFTs, and we help you
            sell them!
          </div>
        </div>
      </div>
    </div>
  );
}
