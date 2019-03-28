import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Card } from '../components/card';

const { add } = storiesOf('Card', module);

add('with text', () => <Card title="Hello">World</Card>);

add('with some emoji', () => (
  <Card title="Emojis">
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Card>
));

add('with some buttons', () => {
  const buttons = (
    <React.Fragment>
      <button>Foo</button>
      <button>Bar</button>
    </React.Fragment>
  );

  return (
    <Card title="Emojis" buttons={buttons}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Card>
  );
});
