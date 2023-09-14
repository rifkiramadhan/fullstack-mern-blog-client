import React from 'react';
import { css } from '@emotion/react';
import RiseLoader from 'react-spinners/CircleLoader';

// CSS
const override = css`
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
`;

const LoadingComponent = () => {
  return <RiseLoader color='red' loading={true} css={override} />;
};

export default LoadingComponent;
