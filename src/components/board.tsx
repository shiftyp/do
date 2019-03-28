import React from 'react';
import { Card } from './card';
import { Button } from './button';

import "./board.css";

export const Board: React.SFC = () => (
  <div className="board">
    <Card title="Backlog" buttons={
      <Button label="Create Task" color="blue" action={() => {}} />
    }>
    </Card>
    <Card title="In Progress" buttons={
      <Button label="Create Task" color="purple" action={() => {}} />
    }>
    </Card>
    <Card title="Complete">
    </Card>
  </div>
);