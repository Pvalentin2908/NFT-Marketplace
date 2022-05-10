import React, { ReactElement } from 'react';
import cs from 'classnames';
import s from '../../pages/Home/style.module.scss';
import Vector2 from '../../pages/Home/assets/Vector2.png';

type cardType = {
  coverImg: string;
  authorImg: string;
  title: string;
  author: string;
  descript: string;
};

export default function card({
  coverImg,
  authorImg,
  title,
  author,
  descript,
}: cardType): ReactElement {
  return (
    <div
      className={cs(
        s.marginBottom128,
        'd-flex flex-row justify-content-between',
      )}
    >
      <div
        className={cs(
          s.cardServices,
          'd-flex flex-column justify-content-between p-4 align-items-center mx-4 h-100',
        )}
      >
        <div className="position-relative mb-5">
          <img src={authorImg} alt="Elips" className={cs(s.ellipsGems, '')} />
          <img
            src={coverImg}
            alt="Rectangle1"
            className={cs(s.classRectangle, '')}
          />
        </div>
        <div className="d-flex flex-row justify-content-start">
          <h5 className="text-white">{title}</h5>
          <img src={Vector2} alt="Bifa" />
        </div>
        <div className="d-flex flex-row">
          Created by
          <p className={cs(s.created, '')}>{author}</p>
        </div>
        <div className="text-white">{descript}</div>
      </div>
    </div>
  );
}
