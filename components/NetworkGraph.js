import React from 'react';
import { ForceGraph2D } from 'react-force-graph';

const NetworkGraph = ({ data }) => {
  return (
    <ForceGraph2D
      graphData={data}
      nodeLabel="id"
      nodeAutoColorBy="group"
      linkDirectionalParticles="value"
      linkDirectionalParticleSpeed={d => d.value * 0.001}
      linkDirectionalParticleWidth={1}
      width={800}
      height={600}
    />
  );
};

export default NetworkGraph;
