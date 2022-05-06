import React, {forwardRef} from 'react';
import BaseInput from './BaseInput';
import PasswordInput from './PasswordInput';

function CustomInput({type, ...props}, ref) {
  if (type == 'password') return <PasswordInput ref={ref} {...props} />;
  else return <BaseInput ref={ref} {...props} />;
}

export default forwardRef(CustomInput);
