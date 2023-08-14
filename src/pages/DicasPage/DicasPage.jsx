import * as Styled from './DicasPage.style';
import {FaCheck} from 'react-icons/fa';
import {FaRegLightbulb} from 'react-icons/fa';

export const DicasPage = () =>{
    return (
        <Styled.ContainerDicas>
        <Styled.DicasTitulo><FaRegLightbulb/>Dicas</Styled.DicasTitulo>

        <Styled.Subtitulos>Curiosidade</Styled.Subtitulos>
        <Styled.Texto>Frutas e vegetais emitem gás natural, conhecido como etileno, porém, algumas furtas emitem quantidades maiores deste gás do que as outras.
            Gás etileno, permite o amadurecimento das frutas e, algumas frutas liberam uma quantidade tão grande, que armazenadas juntamente a outras frutas, prejudicam o amadurecimento saudável das mesmas.
            <Styled.Subtitulos>Alimentos com presença forte de estileno</Styled.Subtitulos>
            <Styled.Lista>
                <Styled.ItensLista><FaCheck/>Abacate</Styled.ItensLista>
                <Styled.ItensLista><FaCheck/>Abacaxi</Styled.ItensLista>
                <Styled.ItensLista><FaCheck/>Banana</Styled.ItensLista>
                <Styled.ItensLista><FaCheck/>Figos</Styled.ItensLista>
                <Styled.ItensLista><FaCheck/>Maçã</Styled.ItensLista>
                <Styled.ItensLista><FaCheck/>Mamão</Styled.ItensLista>
                <Styled.ItensLista><FaCheck/>Manga</Styled.ItensLista>
                <Styled.ItensLista><FaCheck/>Melão</Styled.ItensLista>
                <Styled.ItensLista><FaCheck/>Pera</Styled.ItensLista>
                <Styled.ItensLista><FaCheck/>Pimentão</Styled.ItensLista>
                <Styled.ItensLista><FaCheck/>Tomate</Styled.ItensLista>
                <Styled.ItensLista><FaCheck/>Uvas</Styled.ItensLista>
            </Styled.Lista>
        </Styled.Texto>
        <Styled.Subtitulos>Alguns alimentos que não devem ser colocados na geladeira</Styled.Subtitulos>
        <Styled.Lista>
            <Styled.ItensLista><FaCheck/>Tomate: A refrigeração faz com que a fruta de deteriore rapidamente, perdendo seu sabor natural, deve ser colocada na fruteira com a cabeça para baixo.</Styled.ItensLista>
            <Styled.ItensLista><FaCheck/>Cebola: Precisa de ventilação, deve ser colocada na fruteira, na geladeira faz com que ela se deteriore mais rápido.</Styled.ItensLista>

            <Styled.ItensLista><FaCheck/>Alho: Precisa de ventilação, na geladeira por perder um pouco o seu sabor e ainda causar mofo no alimento.</Styled.ItensLista>
            <Styled.ItensLista><FaCheck/>Batata inglesa e batata doce: O amido se transforma em açúcar, modificando sabor, cor e textura.</Styled.ItensLista>

            <Styled.ItensLista><FaCheck/>Laranja: Na geladeira amadurece mais rápido e perde um pouco de suas propriedades.</Styled.ItensLista>
        </Styled.Lista>
        <Styled.Subtitulos>Frutas que podem ser colocada no geladeira</Styled.Subtitulos>
        <Styled.Lista>
            <Styled.ItensLista><FaCheck/>Abacates maduros;</Styled.ItensLista>
            <Styled.ItensLista><FaCheck/>Abacaxis maduros;</Styled.ItensLista>
            <Styled.ItensLista><FaCheck/>Espargos num pano de tecido;</Styled.ItensLista>
            <Styled.ItensLista><FaCheck/>Cenouras num recipiente com água;</Styled.ItensLista>
            <Styled.ItensLista><FaCheck/>Folhas frescas, num recipiente envolto num pano de tecido para que não se queimem;</Styled.ItensLista>
            <Styled.ItensLista><FaCheck/>Mangas maduras;</Styled.ItensLista>
            <Styled.ItensLista><FaCheck/>Melancias maduras;</Styled.ItensLista>
            <Styled.ItensLista><FaCheck/>Melão cortado;</Styled.ItensLista>
            <Styled.ItensLista><FaCheck/>Morangos já limpos, num recipiente fechado envoltos em papel absorvente;</Styled.ItensLista>
            <Styled.ItensLista><FaCheck/>Pêssegos maduros, sozinhos numa gaveta.</Styled.ItensLista>
        </Styled.Lista>
        <Styled.Subtitulos>Alguns legumes e vegetais com aguá na geladeira</Styled.Subtitulos>
        <Styled.Lista>
            <Styled.ItensLista><FaCheck/>Tempeiros, deve remover as folhas prestas e colocar as folhas murchas em um pote com água.</Styled.ItensLista>
            <Styled.ItensLista><FaCheck/>Morango que começa a ficar molenda, colocar em um com pote com água.</Styled.ItensLista>
            <Styled.ItensLista><FaCheck/>Cenoura, beterraba e aipo na geladeira podem deixar murchos rapidamente, por isso devem ser conservado em um pote com água na geladeira.</Styled.ItensLista>
        </Styled.Lista>
        </Styled.ContainerDicas>
    )
}
