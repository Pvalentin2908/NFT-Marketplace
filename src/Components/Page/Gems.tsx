import React, { ReactElement } from 'react';
import cs from 'classnames';
import s from './style.module.scss';
import Rectangle1 from './assets/Rectangle1.png';
import Bif from './assets/Bifa.png';
import Elips from './assets/Ellipse1.png';

export default function Gems(): ReactElement {
  return (
    <div className="container">
      <div className="text-white">
        <h3>Hidden Gems</h3>
      </div>
      <div className="d-flex flex-row justify-content-between">
        <div
          className={cs(
            s.cardServices,
            'd-flex flex-column justify-content-between p-4 align-items-center align-items-lg-start mx-4',
          )}
        >
          <div className="d-flex flex-column justify-content-between">
            <div>
              <img src={Rectangle1} alt="Rectangle1" />
              <img src={Elips} alt="Elips" className={cs(s.ellipsGems1)} />
            </div>
            <div className="d-flex flex-row justify-content-between">
              <h6 className="text-white">ZombieClub Token</h6>
              <img src={Bif} alt="Bifa" />
            </div>
          </div>
        </div>
        <div
          className={cs(
            s.cardServices,
            'd-flex flex-column justify-content-between p-4 align-items-center align-items-lg-start mx-4',
          )}
        >
          <img src={Rectangle1} alt="Rectangle1" />
          <img src={Elips} alt="Elips" className={cs(s.ellipsGems2)} />
          <div className="d-flex flex-row justify-content-between">
            <h6 className="text-white">ZombieClub Token</h6>
            <img src={Bif} alt="Bifa" />
          </div>
        </div>
        <div
          className={cs(
            s.cardServices,
            'd-flex flex-column justify-content-between p-4 align-items-center align-items-lg-start mx-4',
          )}
        >
          <img src={Rectangle1} alt="Rectangle1" />
          <img src={Elips} alt="Elips" className={cs(s.ellipsGems3)} />
          <div className="d-flex flex-row justify-content-between">
            <h6 className="text-white">ZombieClub Token</h6>
            <img src={Bif} alt="Bifa" />
          </div>
        </div>
      </div>
    </div>
  );
}
