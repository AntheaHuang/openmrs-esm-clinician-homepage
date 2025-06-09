import React from 'react';
import { ExtensionSlot } from '@openmrs/esm-framework';
import styles from './patient-queue.scss';

const PatientQueue: React.FC = () => {
  return (
    <>
      <ExtensionSlot name="clinician-queue-table-slot" className={styles.patientQueue} style={{ margin: 0 }} />
    </>
  );
};

export default PatientQueue;
