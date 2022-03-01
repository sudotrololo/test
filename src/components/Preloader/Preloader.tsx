import React from 'react';

import styles from './Preloader.module.scss';

const Preloader: React.FC = () => (
  <div className={styles.component}>
    <h2>Loading... 🥱</h2>
  </div>
);

export default Preloader;
