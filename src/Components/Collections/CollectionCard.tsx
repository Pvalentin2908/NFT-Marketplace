import React, { ReactElement } from 'react';
import cs from 'classnames';
import s from '../../pages/Home/style.module.scss';
import Vector2 from '../../pages/Home/assets/Vector2.png';

type CollectionCardType = {
  title: string;
  author: string;
  coverImg: string;
  authorLogo: string;
  price?: string | undefined;
};

export default function CollectionCard({
  title,
  author,
  coverImg,
  authorLogo,
  price,
}: CollectionCardType): ReactElement {
  return (
    <div className={cs(s.articleCard, 'my-4 ')}>
      <div className={s.imgArticleCard}>
        <img src={`${coverImg}.png`} alt="NFT_Picture" />
      </div>
      <div className="px-3 pb-3">
        <div
          className={cs(
            s.rectangle,
            'd-flex flex-row justify-content-center align-items-center p-2',
          )}
        >
          <div className="">
            <img src={authorLogo} alt="Author_Logo" />
          </div>
          <div className="d-flex flex-column justify-content-between align-items-start px-2 pb-1">
            <h6 className="font-14">{title}</h6>
            <div className="d-flex flex-row justify-content-start">
              <div className="font-10 mx-2">
                <span className="me-1">By</span>
                {author}
              </div>
              <div
                className="d-flex flex-row justify-content-start align-items-center mt-1"
                style={{ width: '7.5px', height: '7.5px' }}
              >
                <img src={Vector2} alt="Vector2" />
              </div>
            </div>
          </div>
        </div>
        <div className={cs(s.lineColor, '')} />
        <div
          className={cs(
            s.rectangle,
            s.radiusBottom,
            'justify-content-between p-2',
          )}
        >
          <div className="font-10 mx-3">Price</div>
          <div className="mx-3">
            <h6>
              <span className="me-1">{price}</span>
              ETH
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
