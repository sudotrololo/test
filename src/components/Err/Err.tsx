import React from 'react';

import classes from './Err.module.scss';

const Err: React.FC = () => (
  <>
    <h2 className={classes.err}>Something went wrong... 💩</h2>
  </>
);

export default Err;
