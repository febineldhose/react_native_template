import React from 'react';
import TextButton from './TextButton';

export default function Button({type, ...props}) {
  if (type == 'textButton') return <TextButton {...props} />;
  else return null;
}
