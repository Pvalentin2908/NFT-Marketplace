import React, { ReactElement } from 'react';
import cs from 'classnames';
import s from './style.module.scss';
import Rectangle6 from './assets/Rectangle6.png';
import Rectangle7 from './assets/Rectangle7.png';
import Rectangle8 from './assets/Rectangle8.png';
import Rectangle9 from './assets/Rectangle9.png';
import Rectangle10 from './assets/Rectangle10.png';
import Rectangle11 from './assets/Rectangle11.png';
import Rectangle12 from './assets/Rectangle12.png';
import Rectangle13 from './assets/Rectangle13.png';
import Ellipse2 from './assets/Ellipse2.png';
import Ellipse3 from './assets/Ellipse3.png';
import Ellipse4 from './assets/Ellipse4.png';
import Ellipse5 from './assets/Ellipse5.png';
import Ellipse6 from './assets/Ellipse6.png';
import Ellipse7 from './assets/Ellipse7.png';
import Ellipse8 from './assets/Ellipse8.png';
import Ellipse9 from './assets/Ellipse9.png';
import Vector2 from './assets/Vector2.png';

export default function Collections(): ReactElement {
  return (
    <div className={cs(s.marginBottom128, 'container')}>
      <div className="d-flex flex-row justify-content-between text-white mb-4 mt-5">
        <h3>Top collections</h3>
        <div className="">
          <a href="#link" className={cs(s.textFooter)}>
            View All
          </a>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-between ">
        <div className={cs(s.articleCard, 'me-4 ')}>
          <div className={s.imgArticleCard}>
            <img src={Rectangle6} alt="Rectangle6" />
          </div>
          <div className="px-3 pb-3">
            <div
              className={cs(
                s.rectangle,
                'd-flex flex-row justify-content-between p-2',
              )}
            >
              <div>
                <img src={Ellipse2} alt="Ellipse2" />
              </div>
              <div className="d-flex flex-column justify-content-between">
                <h6 className="font-14">World of Women Galaxy</h6>
                <div className="d-flex flex-row justify-content-between">
                  <div className="mb-0 font-10">By Organization Woman</div>
                  <div>
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
                'justify-content-between',
              )}
            >
              <div className="mx-3">Price</div>
              <div className="mx-3">
                <h6>0.218 ETH</h6>
              </div>
            </div>
          </div>
        </div>
        <div className={cs(s.articleCard, 'me-4 ')}>
          <div className={s.imgArticleCard}>
            <img src={Rectangle7} alt="Rectangle6" />
          </div>
          <div className="d-flex flex-row justify-content-center">
            <img src={Ellipse3} alt="Ellipse2" />
            <div className="d-flex flex-column justify-content-start">
              <h6>Azuki #958</h6>
              <div className="d-flex flex-row justify-content-start">
                <div className="mb-0">By Azuki</div>
                <img src={Vector2} alt="Vector2" />
              </div>
            </div>
          </div>
          <div className={cs(s.lineColor, 'mb-3')} />
          <div className="justify-content-between">
            <div className="mx-3">Price</div>
            <div className="mx-3">
              <h6>0.587 ETH</h6>
            </div>
          </div>
        </div>
        <div className={cs(s.articleCard, 'me-4 ')}>
          <div className={s.imgArticleCard}>
            <img src={Rectangle8} alt="Rectangle6" />
          </div>
          <div className="d-flex flex-row justify-content-center">
            <img src={Ellipse4} alt="Ellipse2" />
            <div className="d-flex flex-column justify-content-start">
              <h6>Yolk Folks</h6>
              <div className="d-flex flex-row justify-content-start">
                <div className="mb-0">Fufu Prophet</div>
                <img src={Vector2} alt="Vector2" />
              </div>
            </div>
          </div>
          <div className={cs(s.lineColor, 'mb-3')} />
          <div className="justify-content-between">
            <div className="mx-3">Price</div>
            <div className="mx-3">
              <h6>1.048 ETH</h6>
            </div>
          </div>
        </div>
        <div className={cs(s.articleCard, 'me-4 ')}>
          <div className={s.imgArticleCard}>
            <img src={Rectangle9} alt="Rectangle6" />
          </div>
          <div className="d-flex flex-row justify-content-center">
            <img src={Ellipse5} alt="Ellipse2" />
            <div className="d-flex flex-column justify-content-start">
              <h6>Earth Mooncake</h6>
              <div className="d-flex flex-row justify-content-start">
                <div className="mb-0">By Mooncake</div>
                <img src={Vector2} alt="Vector2" />
              </div>
            </div>
          </div>
          <div className={cs(s.lineColor, 'mb-3')} />
          <div className="justify-content-between">
            <div className="mx-3">Price</div>
            <div className="mx-3">
              <h6>2.756 ETH</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-between mb-5 mt-4">
        <div className={cs(s.articleCard, 'me-4 ')}>
          <div className={s.imgArticleCard}>
            <img src={Rectangle10} alt="Rectangle6" />
          </div>
          <div className="d-flex flex-row justify-content-center">
            <img src={Ellipse6} alt="Ellipse2" />
            <div className="d-flex flex-column justify-content-start">
              <h6>Corrupt Floppy Disk</h6>
              <div className="d-flex flex-row justify-content-start">
                <div className="mb-0">By The Transmission Items</div>
                <img src={Vector2} alt="Vector2" />
              </div>
            </div>
          </div>
          <div className={cs(s.lineColor, 'mb-3')} />
          <div className="justify-content-between">
            <div className="mx-3">Price</div>
            <div className="mx-3">
              <h6>0.218 ETH</h6>
            </div>
          </div>
        </div>
        <div className={cs(s.articleCard, 'me-4 ')}>
          <div className={s.imgArticleCard}>
            <img src={Rectangle11} alt="Rectangle6" />
          </div>
          <div className="d-flex flex-row justify-content-center">
            <img src={Ellipse7} alt="Ellipse2" />
            <div className="d-flex flex-column justify-content-start">
              <h6>Ape Episode #128</h6>
              <div className="d-flex flex-row justify-content-start">
                <div className="mb-0">By Bored Ape Yacht Club</div>
                <img src={Vector2} alt="Vector2" />
              </div>
            </div>
          </div>
          <div className={cs(s.lineColor, 'mb-3')} />
          <div className="justify-content-between">
            <div className="mx-3">Price</div>
            <div className="mx-3">
              <h6>2.756 ETH</h6>
            </div>
          </div>
        </div>
        <div className={cs(s.articleCard, 'me-4 ')}>
          <div className={s.imgArticleCard}>
            <img src={Rectangle12} alt="Rectangle6" />
          </div>
          <div className="d-flex flex-row justify-content-center">
            <img src={Ellipse8} alt="Ellipse2" />
            <div className="d-flex flex-column justify-content-start">
              <h6>Neo R #028</h6>
              <div className="d-flex flex-row justify-content-start">
                <div className="mb-0">By Watari</div>
                <img src={Vector2} alt="Vector2" />
              </div>
            </div>
          </div>
          <div className={cs(s.lineColor, 'mb-3')} />
          <div className="justify-content-between">
            <div className="mx-3">Price</div>
            <div className="mx-3">
              <h6>0.586 ETH</h6>
            </div>
          </div>
        </div>
        <div className={cs(s.articleCard, 'me-4 ')}>
          <div className={s.imgArticleCard}>
            <img src={Rectangle13} alt="Rectangle6" />
          </div>
          <div className="d-flex flex-row justify-content-center">
            <img src={Ellipse9} alt="Ellipse2" />
            <div className="d-flex flex-column justify-content-start">
              <h6>Yact Mutant Academy</h6>
              <div className="d-flex flex-row justify-content-start">
                <div className="mb-0">By Mutant Ape Yacht Club</div>
                <img src={Vector2} alt="Vector2" />
              </div>
            </div>
          </div>
          <div className={cs(s.lineColor, 'mb-3')} />
          <div className="justify-content-between">
            <div className="mx-3">Price</div>
            <div className="mx-3">
              <h6>1.048 ETH</h6>
            </div>
          </div>
        </div>
      </div>
      <div className={cs(s.rectangleBox, 'position-absolute')}>
        <div className={s.rectangle} />
      </div>
    </div>
  );
}
