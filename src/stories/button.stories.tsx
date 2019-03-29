import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from '../components/button';

const { add } = storiesOf('Button', module);

add('colors!', () => (
  <React.Fragment>
    <Button label="Blue" color="blue" action={action('blue pressed')} />
    <Button label="Puple" color="purple" action={action('purple pressed')} />
    <Button label="Green" color="green" action={action('green pressed')} />
    <Button label="Red" color="red" action={action('red pressed')} />
    <Button label="White" color="white" action={action('white pressed')} />
  </React.Fragment>
));
