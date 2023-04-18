import React from 'react';
import styles from "@/components/styles/DailyGraph.module.css"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export function DailyGraph(props) {

  return (
  <div className={styles.graphcanvas}>
    <AreaChart width={1200} height={500} data={props.data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      {props.columns.map((col, index) => (
        <Area key={col} type="monotone" dataKey={col} stackId="1" stroke={props.colors[index]} fill={props.colors[index]} onClick={(event) =>props.onClick(event, col)} />
      ))}
    </AreaChart>
  </div>
  );
}

