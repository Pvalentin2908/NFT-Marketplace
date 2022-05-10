import React, { ReactElement } from 'react';

import CardGems from './CardGems';
import { cardData } from './cardData';

export default function Gems(): ReactElement {
  return (
    <div className="d-flex flex-row justify-content-between">
      {cardData.map((card) => {
        return (
          <CardGems
            key={card.id}
            coverImg={card.coverImg}
            authorImg={card.authorImg}
            title={card.title}
            author={card.author}
            descript={card.descript}
          />
        );
      })}
    </div>
  );
}
