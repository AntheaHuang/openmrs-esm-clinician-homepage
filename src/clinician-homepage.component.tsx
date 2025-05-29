/**
 * From here, the application is pretty typical React, but with lots of
 * support from `@openmrs/esm-framework`. Check out `Greeter` to see
 * usage of the configuration system, and check out `PatientGetter` to
 * see data fetching using the OpenMRS FHIR API.
 *
 * Check out the Config docs:
 *   https://openmrs.github.io/openmrs-esm-core/#/main/config
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Boxes } from './boxes/slot/boxes.component';
import Resources from './resources/resources.component';
import Metrics from './metrics/metrics.component';
import styles from './clinician-homepage.scss';

const Root: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <h3 className={styles.welcome}>{t('welcomeText', 'Welcome to the O3 Clinician Homepage app')}</h3>
      <p className={styles.explainer}>
        {t('explainer', 'The following examples demonstrate some key features of the O3 framework')}.
      </p>
      {/* Greeter: demonstrates the configuration system */}
      {/* Boxes: demonstrates the extension system */}
      {/* <Boxes /> */}
      {/* PatientGetter: demonstrates data fetching */}
      {/* <Resources /> */}
      <Metrics />
    </div>
  );
};

export default Root;
