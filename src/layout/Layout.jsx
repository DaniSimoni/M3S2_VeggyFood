import { Outlet } from "react-router-dom";
import * as Styled from './Layout.style';
import { HeaderComponent } from "../components/Header/HeaderComponente";


export const Layout = () => {

const render = () => {

    return(
        
        <Styled.App>

                <Styled.HeaderLayout>
                    <HeaderComponent/>
                </Styled.HeaderLayout>

            <Styled.MainLayout>

                <Styled.Content>
                    <Outlet/>
                </Styled.Content>

            </Styled.MainLayout>
            
     
        
        </Styled.App>
    )
}
    return render()
}