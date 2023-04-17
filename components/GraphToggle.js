import React from 'react';

export function GraphToggle(props) {
  return (
    <div>
      <button onClick={() => props.onToggle('daily')}>Daily</button>
      <button onClick={() => props.onToggle('monthly')}>Monthly</button>
    </div>
  );
}

