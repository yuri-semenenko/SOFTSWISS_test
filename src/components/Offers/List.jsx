import Card from './Card';

import './List.scss';

import card_bg_1 from '../../assets/card_bg_1.webp';
import card_bg_2 from '../../assets/card_bg_2.webp';
import card_bg_3 from '../../assets/card_bg_3.webp';
import card_bg_4 from '../../assets/card_bg_4.webp';
import offers from '../../data/offers.json';

const backgrounds = [card_bg_1, card_bg_2, card_bg_3, card_bg_4];

function OffersList() {
  console.log(card_bg_1);
  return (
    <section className='offers'>
      <h2>Offers</h2>
      <div className='offers__list'>
        {offers.length === 0 ? (
          <h3>Loading...</h3>
        ) : (
          offers.map(({ id, ...offer }) => (
            <Card
              key={id}
              card={offer}
              cardBg={backgrounds[id - 1]}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default OffersList;
