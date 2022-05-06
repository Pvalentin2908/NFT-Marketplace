import React, { ReactElement } from 'react';
import cs from 'classnames';

import s from '../../pages/Home/style.module.scss';

import CollectionCard from './CollectionCard';
import { CollectionData } from './collectionData';

export default function Collections(): ReactElement {
  return (
    <div className="d-flex flex-row justify-content-between flex-wrap">
      {CollectionData.map((card) => {
        return (
          <CollectionCard
            key={card.id}
            title={card.title}
            author={card.author}
            coverImg={card.coverImg}
            authorLogo={card.authorLogo}
            price={card.price}
          />
        );
      })}
    </div>
  );
}
