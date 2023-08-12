import { useState } from 'react';

import { MdSearch } from 'react-icons/md';

import * as Styled from './SearchComponent.style';

export const SearchComponent = () =>{

    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (event) => {
        setSearchValue(event.target.value);
    }
    return(
        <Styled.SearchBar>
                <Styled.InputBox>
                    
                    <Styled.Label>O que você está procurando?</Styled.Label>

                    <Styled.InputContainer>
                        <Styled.Input type="search" placeholder="Busque pelo nome do produto ou sua categoria" onChange={handleSearch} value={searchValue} ></Styled.Input>
                        <Styled.ButtonSearch type='submit'>
                            <MdSearch />
                        </Styled.ButtonSearch>
                    </Styled.InputContainer>
   
                </Styled.InputBox>
        </Styled.SearchBar>
    )
}