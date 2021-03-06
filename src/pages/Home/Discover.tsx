import React, { ReactElement } from 'react';
import cs from 'classnames';
import s from './style.module.scss';

export default function Discover(): ReactElement {
  return (
    <div className="container">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h4 className="text-white">Discover the latest #TOPNFT</h4>
        <h6 className={cs(s.textFooter, 'text-lg-start text-center')}>
          The NFT marketplace with everything for everyone
        </h6>
      </div>
      <div
        className={cs(
          s.marginBottom64,
          'd-flex flex-column justify-content-center align-items-center mt-3',
        )}
      >
        <video width="100%" height="450px" controls>
          <source src="/public/movie.mp4" type="video/mp4" />
          <track default kind="captions" src="./public/movie.mp4" />
        </video>
      </div>
      <div
        className={cs(
          s.marginBottom128,
          'd-flex flex-column justify-content-center align-items-center text-white',
        )}
      >
        <button type="button" className={s.createButton2}>
          Explore the marketplace
        </button>
      </div>
    </div>
  );
}
