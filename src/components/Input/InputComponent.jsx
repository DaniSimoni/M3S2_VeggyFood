import { useState } from 'react';
import PropTypes from 'prop-types';

import { MdVisibility, MdVisibilityOff } from 'react-icons/md'

import * as Styled from './InputComponent.style';


export const InputComponent = ({ label, type, id, placeholder, register, error, onChange }) => {

    const [showPassword, setShowPassword] = useState();

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleChange = (e) => {
        if (onChange) {
            onChange(e);
        }
    }

    return (
        <Styled.InputBox>
            <Styled.Label $hasError={error} htmlFor={id}>{ label }</Styled.Label>
            { type !== 'textarea' && 
                <Styled.InputContainer>
                    <Styled.Input $hasError={error} type={type} id={id} placeholder={placeholder} {...register} onChange={handleChange} />
                    
                    { type === 'password' &&
                        <Styled.Icon $hasError={error} type="button" onClick={handleShowPassword} >
                            { !showPassword
                                ? <MdVisibility />
                                : <MdVisibilityOff />
                            }
                        </Styled.Icon>

                    }
                </Styled.InputContainer>
            }
            
        </Styled.InputBox>
    )
}

InputComponent.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    register: PropTypes.any,
    error: PropTypes.any,
    onChange: PropTypes.func
}