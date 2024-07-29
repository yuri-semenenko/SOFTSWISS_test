import './Card.scss';

function Card({ card, cardBg }) {
  const { title, description, link } = card;

  return (
    <div
      className='card'
      style={{ background: `url(${cardBg}) no-repeat center center / cover` }}
    >
      <h3 className='card__title'>{title}</h3>
      <p className='card__description'>{description}</p>
      <a
        href={link}
        className='card__link'
      >
        Learn more
      </a>
    </div>
  );
}

export default Card;
