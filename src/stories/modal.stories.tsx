import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Modal } from '../components/modal';

const { add } = storiesOf('Basic Components/Modal', module);

add('Closed', () => (
  <div>
    You should see this and nothing else.
    <Modal open={false} title="You shouldn't see this">
      Or this
    </Modal>
  </div>
));

add('With Text', () => (
  <Modal title="Hello" open={true}>
    World
  </Modal>
));

add('With Some Emoji', () => (
  <Modal open={true} title="Emojis">
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Modal>
));
