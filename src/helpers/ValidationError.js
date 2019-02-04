import React from 'react';
import { VALIDATIONS_ERRORS } from '../constants/errors';

const ValidationError = ({ error }) => (
  <>
    <div className="validationError">
      {VALIDATIONS_ERRORS[error] && VALIDATIONS_ERRORS[error]}
    </div>
  </>
)

export default ValidationError;
