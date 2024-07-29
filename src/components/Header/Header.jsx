import Menu from '../Menu/Menu';

import './Header.scss';

import logo from '../../assets/logo.svg';

function Header() {
  return (
    <header className='header'>
      <a
        href='/'
        className='logo'
        title='GO'
      >
        <img
          src={logo}
          alt='logo icon'
        />
      </a>

      <Menu />
    </header>
  );
}

export default Header;
