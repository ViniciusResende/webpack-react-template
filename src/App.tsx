import './styles.css';

import logo from './logo512.png';
import adobeLogo from './adobe.svg';
import { ClickCounter } from './ClickCounter';

export const App = () => {
  return (
    <>
      <h1>
        Edited React TypeScript Webpack Starter Template -{' '}
        {process.env.NODE_ENV} | {process.env.name}
      </h1>{' '}
      <img src={logo} alt='React Logo' width='300' height='300' />
      <img src={adobeLogo} alt='React Logo' width='300' />
      <ClickCounter />
    </>
  );
};
