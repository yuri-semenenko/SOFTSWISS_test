import { Suspense, lazy } from 'react';

const Header = lazy(() => import('./components/Header/Header'));
const HeroBlock = lazy(() => import('./components/HeroBlock/HeroBlock'));
const OffersList = lazy(() => import('./components/Offers/List'));
const InfoBlock = lazy(() => import('./components/InfoBlock/InfoBlock'));
const Footer = lazy(() => import('./components/Footer/Footer'));

import './App.scss';

function App() {
  return (
    <div className='app'>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Header />
        <HeroBlock />
        <OffersList />
        <InfoBlock />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
