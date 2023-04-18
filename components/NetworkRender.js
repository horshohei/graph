import React, { useState } from 'react';
import Popup from '@/components/Popup';

import styles from '@/components/styles/NetworkRender.module.css'
import loadable from '@loadable/component'

const NetworkGraph = loadable( () => import('@/components/NetworkGraph'))

const data = {
  nodes: [
    { id: 'A', group: 1 },
    { id: 'B', group: 1 },
    { id: 'C', group: 2 },
    { id: 'D', group: 2 },
  ],
  links: [
    { source: 'A', target: 'B', value: 1 },
    { source: 'B', target: 'C', value: 2 },
    { source: 'C', target: 'D', value: 3 },
    { source: 'D', target: 'A', value: 4 },
  ],
};

const GraphComponent = ({news}) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const openPopup = () => {
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className={styles.network}>
      <button onClick={openPopup}>Show Network Graph {news}</button>
      {isPopupVisible && (
        <Popup onClose={closePopup}>
          <NetworkGraph data={data} />
        </Popup>
      )}
    </div>
  );
};

export default GraphComponent;
