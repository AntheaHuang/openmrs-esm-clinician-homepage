import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Location } from '@carbon/react/icons';
import {
  ConfigurableLink,
  formatDate,
  PageHeader,
  PageHeaderContent,
  useSession,
} from '@openmrs/esm-framework';
import styles from './header.scss';

import clinicianSVG from '/src/svgs/clinicianSVG.svg';


type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  const { t } = useTranslation();
  const userSession = useSession();
  const userLocation = userSession?.sessionLocation?.display;

  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState('');

// Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('clinician-notes');
    if (saved) setNotes(saved);
  }, []);

// Save to localStorage on change
  useEffect(() => {
    localStorage.setItem('clinician-notes', notes);
  }, [notes]);


  return (
    <PageHeader className={styles.header}>
      <PageHeaderContent
        illustration={
          <ConfigurableLink to={`${window.getOpenmrsSpaBase()}clinician-homepage`}>
            <img src={clinicianSVG} width={85} height={85}/>
          </ConfigurableLink>
        }
        title={title}
        className={styles.leftJustifiedItems}
      />
      <div className={styles.rightJustifiedItems}>
        <div className={styles.dateAndLocation}>
          <Location size={16} />
          <span className={styles.value}>{userLocation}</span>
          <span className={styles.middot}>&middot;</span>
          <Calendar size={16} />
          <span className={styles.value}>{formatDate(new Date(), { mode: 'standard' })}</span>
        </div>
        <button className={styles.notesButton} onClick={() => setShowNotes(prev => !prev)}>
          📝 <span style={{ fontSize: '1rem' }}>Notes</span>
        </button>
        {showNotes && (
          <div className={styles.notesDropdown}>
            <textarea
              className={styles.notesTextarea}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Enter your clinician notes here..."
            />
          </div>
        )}

      </div>
    </PageHeader>
  );
};

export default Header;
