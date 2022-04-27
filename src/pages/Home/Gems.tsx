import React, { ReactElement } from 'react';
import cs from 'classnames';
import s from './style.module.scss';
import Rectangle1 from './assets/Rectangle1.png';
import Rectangle2 from './assets/Rectangle2.png';
import Rectangle3 from './assets/Rectangle3.png';
import Bif from './assets/Bifa.png';
import Elips from './assets/Ellipse1.png';

export default function Gems(): ReactElement {
  return (
    <div className="container mb-5">
      <div className="d-flex flex-row justify-content-between text-white mb-4 mt-5">
        <h3>Hidden Gems</h3>
        <div className="">
          <a href="#link" className={cs(s.textFooter)}>
            View All
          </a>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-between">
        <div
          className={cs(
            s.cardServices,
            'd-flex flex-column justify-content-between p-4 align-items-center mx-4 h-100',
          )}
        >
          <div>
            {/* <img src={Elips} alt="Elips" className={cs(s.ellipsGems1, '')} /> */}
            <img
              src={Rectangle1}
              alt="Rectangle1"
              className={cs(s.classRectangle, '')}
            />
          </div>
          <div className="d-flex flex-row justify-content-start">
            <h5 className="text-white">ZombieClub Token</h5>
            <img src={Bif} alt="Bifa" />
          </div>
          <div className="d-flex flex-row">
            Created by
            <p className={cs(s.created, '')}>ZombieLab</p>
          </div>
          <div className="text-white">
            Zombie Lab is a collection of 10,000 animated NFTs. Each NFT is
            unique and resides on the Ethereum blockchain. Your Zombie Lab Club
            NFT will double as your club membership.
          </div>
        </div>
        <div
          className={cs(
            s.cardServices,
            'd-flex flex-column justify-content-between p-4 align-items-center mx-4 h-100',
          )}
        >
          <div className="position-relative mb-4">
            <img src={Elips} alt="Elips" className={cs(s.ellipsGems1, '')} />
            <img
              src={Rectangle2}
              alt="Rectangle2"
              className={cs(s.classRectangle, '')}
            />
          </div>
          <div className="d-flex flex-row justify-content-start">
            <h5 className="text-white">Meta Bounty Hunters</h5>
            <img src={Bif} alt="Bifa" />
          </div>
          <div className="d-flex flex-row">
            Created by
            <p className={cs(s.created, '')}>B30898</p>
          </div>
          <div className="text-white">
            Meta Bounty Hunters is a first of its kind community and collective
            of elite members who share a community-first mindset and are focused
            on giving back to its NFT holders through the Reflection Rewards.
          </div>
        </div>
        <div
          className={cs(
            s.cardServices,
            'd-flex flex-column justify-content-between p-4 align-items-center mx-4 h-100',
          )}
        >
          <div>
            {/* <img src={Elips} alt="Elips" className={cs(s.ellipsGems1, '')} /> */}
            <img
              src={Rectangle3}
              alt="Rectangle3"
              className={cs(s.classRectangle, '')}
            />
          </div>
          <div className="d-flex flex-row justify-content-start">
            <h5 className="text-white">Treeverse Plots</h5>
            <img src={Bif} alt="Bifa" />
          </div>
          <div className="d-flex flex-row">
            Created by
            <p className={cs(s.created, '')}>\Treeverse_Wallet</p>
          </div>
          <div className="text-white">
            Treeverse is an open-world, fantasy MMORPG with a MOBA-style combat
            system. Slay beasts, forge mighty weapons, lure the biggest fish,
            form guilds, defeat dungeons
          </div>
        </div>
      </div>
    </div>
  );
}
