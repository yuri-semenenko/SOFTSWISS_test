import './Footer.scss';

import rocket from '../../assets/rocket.png';

function Footer() {
  return (
    <footer className='footer'>
      <img
        src={rocket}
        alt='rocket icon'
      />
      <p>Exciting space adventure!</p>
    </footer>
  );
}

export default Footer;
