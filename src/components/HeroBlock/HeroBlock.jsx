import './HeroBlock.scss';

function HeroBlock() {
  return (
    <section className='hero-block'>
      <h1 className='hero-block__title'>
        Discover the vast expanses of <span>space</span>
      </h1>
      <p className='hero-block__subtitle'>
        Where the possibilities are <span>endless!</span>
      </p>
      <a
        href='#'
        className='hero-block__link'
        aria-label='Learn more about space'
      >
        Learn more
      </a>
    </section>
  );
}

export default HeroBlock;
