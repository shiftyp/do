import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Board } from '../components/board';

const { add } = storiesOf('Board', module);

add('it works', () => <Board />);