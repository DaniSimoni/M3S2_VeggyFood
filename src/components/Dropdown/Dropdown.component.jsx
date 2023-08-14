import { useState } from "react";
import * as Styled from "./DropdownComponent.style";
import { LiaGripLinesSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

export const DropdownComponent = ({dropdownOptions}) => {
    
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
 
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

const navigate = useNavigate()

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    navigate('/')
    
  };

  return (
    <>
      <Styled.DropdownContainer>
        <Styled.DropdownButton onClick={toggleDropdown}>
          <LiaGripLinesSolid />
        </Styled.DropdownButton>
        <Styled.DropdownContent open={isOpen}>
          
            <Styled.DropdownItem
              
              onClick={() => handleOptionClick(dropdownOptions)}
            >
              {"Sair"}
            </Styled.DropdownItem>
          
        </Styled.DropdownContent>
      </Styled.DropdownContainer>
      {selectedOption && (
        <p>Has seleccionado: {selectedOption}</p>
      )}
    </>
  );
};
DropdownComponent.propTypes = {
dropdownOptions: PropTypes.string
}

export default DropdownComponent;
