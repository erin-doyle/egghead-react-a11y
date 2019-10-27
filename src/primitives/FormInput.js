import React from 'react';
import PropTypes from 'prop-types';


const FormInput = ({
    id,
    type,
    name,
    label,
    errorText,
    helperText,
    onChange,
    isValid
}) => {
    const inputClasses = `form-control ${!isValid ? 'is-invalid' : ''}`;
    const helperId = helperText ? `${id}-helper` : '';
    const errorId = errorText && !isValid ? `${id}-error` : '';

    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type={type}
                name={name}
                className={inputClasses}
                onChange={onChange}
                aria-describedby={`${helperId} ${errorId}`}
            />
            { helperText &&
                <small id={helperId} className="form-text text-muted helper-text">
                    {helperText}
                </small>
            }
            { errorText &&
                <div id={errorId} className="invalid-feedback">
                    {errorText}
                </div>
            }
        </div>
    );
};

FormInput.defaultProps = {
    type: 'text',
    errorText: null,
    helperText: null,
    onChange: null,
    isValid: true
};

FormInput.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    errorText: PropTypes.string,
    helperText: PropTypes.string,
    onChange: PropTypes.func,
    isValid: PropTypes.bool
};


export default FormInput;
