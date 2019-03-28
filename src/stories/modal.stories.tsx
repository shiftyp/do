import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Modal } from '../components/modal';

const { add } = storiesOf('Modal', module);

add('closed', () => (
  <Modal open={false} title="You shouldn't see this">
    Or this
  </Modal>
));

add('with text', () => (
  <Modal title="Hello" open={true}>
    World
  </Modal>
));

add('with some emoji', () => (
  <Modal open={true} title="Emojis">
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Modal>
));
