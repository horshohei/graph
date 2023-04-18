import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export function DailyGraph(props) {

  return (
    <AreaChart width={900} height={400} data={props.data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      {props.columns.map((col, index) => (
        <Area key={col} type="monotone" dataKey={col} stackId="1" stroke={props.colors[index]} fill={props.colors[index]} onClick={(event) =>props.onClick(event, col)} />
      ))}
    </AreaChart>
  );
}

