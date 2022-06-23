import React, { ReactElement } from 'react';
import cs from 'classnames';
import s from '../../pages/Home/style.module.scss';
import Vector3 from '../../pages/Home/assets/vector3.png';

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
        'd-flex flex-row justify-content-between mx-0 mx-lg-4 text-justify',
      )}
    >
      <div
        className={cs(
          s.cardServices,
          'd-flex flex-column justify-content-between p-4 align-items-center mx-lg-4 mx-0 h-100',
        )}
      >
        <div className="position-relative mb-5">
          <img src={authorImg} alt="Elips" className={cs(s.ellipsGems, '')} />
          <img
            src={coverImg}
            alt="Rectangle1"
            className={cs(s.classRectangle, 'w-100')}
          />
        </div>
        <div className="d-flex flex-lg-row flex-column justify-content-start align-items-center">
          <h5 className="text-white text-center">{title}</h5>
          <div
            className="d-flex flex-row justify-content-start align-items-center mt-1 mx-2 inline-block"
            style={{ width: '23px', height: '23px' }}
          >
            <img src={Vector3} alt="Vector3" />
          </div>
        </div>
        <div className="d-flex flex-row">
          Created by
          <p className={cs(s.created, 'ms-1')}>{author}</p>
        </div>
        <div className="text-white">{descript}</div>
      </div>
    </div>
  );
}
