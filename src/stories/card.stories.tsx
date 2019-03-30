import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Card } from '../components/card';
import { Button } from '../components/button';

const { add } = storiesOf('Basic Components/Card', module);

add('Empty', () => <Card title="Empty" />);

add('With Text', () => <Card title="Hello">World</Card>);

add('With Some Emoji', () => (
  <Card title="Emojis">
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Card>
));

add('With Some Buttons', () => {
  const buttons = (
    <React.Fragment>
      <Button color="blue" label="Foo" action={action('foo buttton clicked')} />
      <Button
        color="green"
        label="Bar"
        action={action('bar buttton clicked')}
      />
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

add('With Inner Card', () => {
  const outerButtons = (
    <React.Fragment>
      <Button
        color="purple"
        label="Baz"
        action={action('baz buttton clicked')}
      />
    </React.Fragment>
  );

  const innerButtons = (
    <React.Fragment>
      <Button color="blue" label="Foo" action={action('foo buttton clicked')} />
      <Button
        color="green"
        label="Bar"
        action={action('bar buttton clicked')}
      />
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
