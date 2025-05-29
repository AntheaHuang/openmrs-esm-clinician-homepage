import React from 'react';
import { ExtensionSlot } from '@openmrs/esm-framework';
import styles from './metrics.scss';

const Metrics: React.FC = () => {
  return (
    <>
      <ExtensionSlot name="clinician-metrics-tiles-slot" className={styles.metricTilesSlot} style={{ margin: 0 }} />
      <ExtensionSlot name="clinician-metrics-tiles-slot2" className={styles.metricTilesSlot} />
    </>
  );
};

export default Metrics;
