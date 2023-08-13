import { useState } from 'react';

import { MdSearch } from 'react-icons/md';

import * as Styled from './SearchComponent.style';
import { ProdutosService } from '../../services/Produtos.service';
import { useShoppingCart } from '../../hooks/Shop/useShoppingCart';

export const SearchComponent = () =>{

    const { setProdutos } = useShoppingCart();
    const [searchValue, setSearchValue] = useState('');

    const onSearch = async (event) => {
        event.preventDefault();

        const produtos = await ProdutosService.GetProdutosByQuery(searchValue);
        
        setProdutos(produtos);
        setSearchValue('');
    }

    const handleSearch = (event) => {
        setSearchValue(event.target.value);
    }
    return(
        <Styled.SearchBar onSubmit={onSearch}>
                <Styled.InputBox>
                    
                    <Styled.Label>O que você está procurando?</Styled.Label>

                    <Styled.InputContainer>
                        <Styled.Input type="search" placeholder="Busque pelo nome do produto ou sua categoria" onChange={handleSearch} value={searchValue} required ></Styled.Input>
                        <Styled.ButtonSearch type='submit'>
                            <MdSearch />
                        </Styled.ButtonSearch>
                    </Styled.InputContainer>
   
                </Styled.InputBox>
        </Styled.SearchBar>
    )
}