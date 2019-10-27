import React from 'react';
import Button from './Button';
import '../styles/Controls.css';

function NoSession(props) {
  return (
    <div className="controls">
      <Button handleClick={props.onSetTimer} text="NEW SESSION" color="blue" />
    </div>
  );
}

export default NoSession;
