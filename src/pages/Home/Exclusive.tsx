import React, { ReactElement } from 'react';
import cs from 'classnames';
import s from './style.module.scss';
import Play from './assets/play.png';
import Button from './assets/Buttonx.svg';
import Ball from './assets/10.png';

export default function Exclusive(): ReactElement {
  return (
    <>
      <div className={cs(s.cardExclusive, 'position-relative container')}>
        <div
          className={cs(
            s.indexExclusive,
            'col-12 col-lg-6 d-flex flex-column justify-content-center justify-content-lg-start',
          )}
        >
          <div className="text-white mt-5">
            Exclusive NFT for Digital and Real-world Assets
          </div>
          <div className={cs(s.marginBottom64, 'text-white')}>
            <h3>
              The world s first non-fungible token (NFT) marketplace for both
              digital and physical assets.
            </h3>
          </div>
          <div
            className={cs(
              s.marginBottom154,
              'd-flex flex-column flex-lg-row justify-content-center justify-content-lg-start ',
            )}
          >
            <div className="d-flex justify-content-center">
              <button
                type="button"
                className={cs(s.textButton, 'mx-0 mx-lg-3')}
              >
                <img src={Button} alt="Button" />
              </button>
            </div>
            <div className="d-flex justify-content-center">
              <button type="button" className={cs(s.createButton, 'font-20')}>
                Create
              </button>
            </div>
          </div>
          <div
            className={cs(
              s.marginBottom98,
              'd-flex flex-row justify-content-start',
            )}
          >
            <img src={Play} alt="Play" />
            <div className="text-white mx-2">Learn more about TheFund</div>
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
    </>
  );
}
