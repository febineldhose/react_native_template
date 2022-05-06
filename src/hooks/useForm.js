import {useCallback, useMemo, useState} from 'react';
import {regex} from '../Utils';

const _useForm = ({
  initialValues = {},
  validationSchema = {},
  onSubmit = ({values: {}}) => {},
}) => {
  /**
   * hook used to make validate forms
   * all OBJ @keys must be unique
   * note :=> key name must be same for both initialValues and validationsSchema
   * returns errors and values of curresponding changes mades
   * @initialValues must be OBJ and should have values what we needed
   * @validationSchema have some callbacks will provide state changes for error states
   * */
  const [newVal, setNewVal] = useState(initialValues);
  const [newErr, setErr] = useState({});
  /* check all validationSchema callbacks */
  const isValidSchema = useMemo(
    () => key => validationSchema && validationSchema[key],
    [validationSchema],
  );
  const handleValidation = useCallback(
    e => {
      /* check values entered are correct or not,using error state statuses */
      return Object.keys(e).every(key => newErr[key] == false);
    },
    [newErr],
  );
  const handleSubmit = useCallback(() => {
    /**
     * calls when user click submit
     * setting errors for corresponding values entered
     *  */
    const ERR = newErr;
    Object.keys(initialValues).map(key => {
      const newValue = isValidSchema(key)
        ? validationSchema[key]({value: newVal[key], ...newVal})
        : '';
      ERR[key] = newValue;
      setErr(e => ({
        ...e,
        [key]: newValue,
      }));
    });
    /**
     * checking all data entered are valid
     * if all datas are valid onSubmit callback will call
     * */
    if (handleValidation(ERR)) {
      onSubmit({values: newVal});
    }
  }, [newVal, newErr]);
  const handleChange = useCallback(
    ({key = '', value = '', ...props}) => {
      /**
       * setting values and errors to curresponding keys
       * @value inputs from user
       */
      setNewVal(e => ({...e, [key]: value, ...props}));
      setErr(e => ({
        ...e,
        [key]: isValidSchema(key)
          ? validationSchema[key]({value, ...props})
          : '',
      }));
    },
    [newErr, newVal],
  );
  return {
    values: newVal,
    errors: newErr,
    handleChange,
    handleSubmit,
  };
};
export default _useForm;

/* conditions to make form validations */
export const formMaker = (value = '') => {
  /**
   * to validate each fields
   * use your own custom validation schemas...!
   */
  const _null = error => {
    return value !== null && value !== undefined && String(value).length > 0
      ? false
      : error;
  };
  const arrayEmpty = error => {
    return Array.isArray(value) && value?.length > 0 ? false : error;
  };
  const email = error => {
    return regex.email.test(value) ? false : error;
  };
  const min = (length, error) => {
    return value?.length >= length ? false : error;
  };
  const max = (length, error) => {
    return value?.length > length ? false : error;
  };

  const isGreater = (comprVal, error) => {
    return value >= comprVal ? false : error;
  };
  const isLesser = (comprVal, error) => {
    return value <= comprVal ? false : error;
  };
  const isEqual = (comprVal, error) => {
    return value == comprVal ? false : error;
  };
  return {
    _null,
    min,
    max,
    arrayEmpty,
    isGreater,
    isLesser,
    isEqual,
    email,
  };
};
