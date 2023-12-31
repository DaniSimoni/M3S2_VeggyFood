import { useEffect } from "react";
import { ProdutosService } from "../../services/Produtos.service";
import { CardProduct } from "../CardProduct/CardProduct.component";

import * as Styled from "./ProdutosComponent.style";
import { useShoppingCart } from "../../hooks/Shop/useShoppingCart";

export const ProdutosComponent = () => {

    const {produtos, setProdutos} = useShoppingCart();

    useEffect(() => {
        ProdutosService.GetProdutosByQuery("frutas")
            .then((response)=> {
                setProdutos(response);
            })
    }, []);

    return (
        <Styled.ProdutosContainer>
            { produtos.map((produto) => <CardProduct key={produto.id} data={produto} />) }
        </Styled.ProdutosContainer>
    )
}