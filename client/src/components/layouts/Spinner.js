import React, { Fragment } from 'react';
import spinner from '../layouts/spinner.gif';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Fragment>
    <img
      src={spinner}
      style={{ width: '200px', margin: 'auto', display: 'bloack' }}
      alt='Loading..'
    />
  </Fragment>
);
