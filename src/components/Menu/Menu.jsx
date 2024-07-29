import './Menu.scss';

function Menu() {
  return (
    <nav className='menu'>
      <input
        id='menu-toggler'
        className='menu__toggler'
        type='checkbox'
      />
      <label
        className='menu__toggler-button'
        for='menu-toggler'
      >
        <div className='menu__toggler-icon'></div>
      </label>
      <ul className='menu__list'>
        <li className='menu__item'>
          <a
            className='menu__link menu__link_active'
            href='#'
          >
            <span>Home</span>
          </a>
        </li>
        <li className='menu__item'>
          <a
            className='menu__link'
            href='#'
          >
            <span>Products</span>
          </a>
        </li>
        <li className='menu__item'>
          <a
            className='menu__link menu__link_type_icon'
            href='#'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='20'
              fill='none'
            >
              <defs>
                <linearGradient
                  id='gradient-text'
                  gradientTransform='rotate(35)'
                >
                  <stop
                    offset='35%'
                    stopColor='#EBFF00'
                  />
                  <stop
                    offset='100%'
                    stopColor='#FF70D9'
                  />
                </linearGradient>
              </defs>
              <path
                fill='#fff'
                fillRule='evenodd'
                d='M9.234 18.182a1.827 1.827 0 0 0-1.847-1.819c-1.025 0-1.847.81-1.847 1.819C5.54 19.19 6.362 20 7.387 20c1.024 0 1.847-.81 1.847-1.818Zm12.927 0a1.827 1.827 0 0 0-1.847-1.819c-1.024 0-1.847.81-1.847 1.819 0 1.008.823 1.818 1.847 1.818s1.847-.81 1.847-1.818Zm1.846-15.455a.923.923 0 0 0-.923-.909H5.757C5.612 1.136 5.597 0 4.617 0H.923A.923.923 0 0 0 0 .909c0 .497.418.91.923.91h2.944l2.553 11.69c-.202.411-.88 1.505-.88 1.945 0 .498.419.91.924.91h14.773a.922.922 0 0 0 .924-.91.923.923 0 0 0-.924-.909H7.964c.144-.284.346-.582.346-.909 0-.326-.13-.681-.187-.994l15.062-1.733a.925.925 0 0 0 .822-.91V2.728Z'
                clipRule='evenodd'
              />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
