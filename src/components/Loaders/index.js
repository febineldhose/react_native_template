import React from 'react';
import CircleLoader from './CircleLoader';

function Loader({type, ...props}) {
  if (type == 'circular') return <CircleLoader {...props} />;
  else return null;
}

export default Loader;
