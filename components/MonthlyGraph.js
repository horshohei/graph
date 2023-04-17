import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export function MonthlyGraph(props) {
  return (
    <BarChart width={600} height={400} data={props.data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      {props.columns.map((col, index) => (
        <Bar key={col} dataKey={col} stackId="1" fill={props.colors[index]} />
      ))}
    </BarChart>
  );
}

