import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Card } from '../components/card';
import { Button } from '../components/button';

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
      <Button color="blue" label="Foo" action={action('foo buttton clicked')} />
      <Button color="green" label="Bar" action={action('bar buttton clicked')} />
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

add('with an inner card', () => {
  const outerButtons = (
    <React.Fragment>
      <Button color="purple" label="Baz" action={action('baz buttton clicked')} />
    </React.Fragment>
  );

  const innerButtons = (
    <React.Fragment>
      <Button color="blue" label="Foo" action={action('foo buttton clicked')} />
      <Button color="green" label="Bar" action={action('bar buttton clicked')} />
    </React.Fragment>
  );

  return (
    <Card title="Outer" buttons={outerButtons}>
      <Card title="Inner" buttons={innerButtons}>
        Inner body
      </Card>
    </Card>
  );
});
