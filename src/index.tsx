import React from 'react';
import { CeyronImage } from '@library/ceyron/image';

/**
 * Standard File Dawn Of A Demon Lord
 */
export const DawnOfADemonLord = React.memo(() => {
  const ceyron = CeyronImage({
    first: 'https://i.imgur.com/59KSk3y.jpeg',
    second: 'https://i.imgur.com/cOp4rSh.png',
    third: 'https://i.imgur.com/wt8mJmg.jpeg',
    fourth: 'https://i.imgur.com/sCGLn6p.png',
    fifth: 'https://i.imgur.com/XGVgNbO.jpeg',
    sixth: 'https://i.imgur.com/eTGZO2n.jpeg',
    seventh: 'https://i.imgur.com/4iiTZcq.jpeg',
    eighth: 'https://i.imgur.com/u1ftRKp.png',
  });

  return ceyron;
});
