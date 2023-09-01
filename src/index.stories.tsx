import { storybookSetupTemplate } from '@library/storybook';
import React from 'react';
import { DawnOfADemonLord } from './index';

const template = storybookSetupTemplate((args) => {
  return <DawnOfADemonLord />;
});

export const Main = template();

export default {
  title: 'Main',
};
