import React, { useState } from 'react';
import { DailyGraph } from '@/components/DailyGraph';
import { MonthlyGraph } from '@/components/MonthlyGraph';
import { GraphToggle } from '@/components/GraphToggle';
import { TextDisplay } from '@/components/TextDisplay';
import data from '@/components/TimeSeriesData';
import styles from './../styles/Home.module.css';
import {console} from "next/dist/compiled/@edge-runtime/primitives/console";



function App() {
  const [graphType, setGraphType] = useState('daily');
  const [selectedData, setSelectedData] = useState(null);

  const handleGraphToggle = (type) => {
    setGraphType(type);
    setSelectedData(null);
  };

  const handleSelectData = (e, position) => {
    console.log(e);
    console.log(position);
    setSelectedData(position);
  };

  const graphData = data[graphType];

  const graphColumns = Object.keys(graphData[0]).filter((key) => key !== 'name');

  const colors = {"daily":['#8884d8', '#82ca9d', '#ff1158'],
                    "monthly":['#121212', '#888888', '#ffffff']};

  return (
    <div className={styles.container}>
            <GraphToggle onToggle={handleGraphToggle} />
      <DailyGraph data={graphData} columns={graphColumns} colors={colors[graphType]} onClick={handleSelectData} />
      {selectedData !== null && ( <TextDisplay title={selectedData} text={data.text[selectedData]} />) }
      {/*
       {selectedData && selectedData.value !== null && selectedData.value !== undefined && (
        <TextDisplay title={selectedData.name} text={data.text[selectedData.value]} />
      )}



      {graphType === 'daily' ? (
        <DailyGraph data={graphData} colors={colors} onClick={handleSelectData} />
      ) : (
        <MonthlyGraph data={graphData} colors={colors} onClick={handleSelectData} />
      )}

      */}
    </div>
  );
}

export default App;
