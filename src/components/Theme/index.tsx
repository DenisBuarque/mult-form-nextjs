import { ReactNode } from 'react'
import * as Styled from './styles'
import { Header } from '../Header'
import { SidebarItem } from '../SidebarItem'
import { useForm } from '../../contexts/FormContext'

type Props = {
    children: ReactNode;
}

export const Theme = ({ children }: Props) => {

    const { state } = useForm();

    return (
        <Styled.Container>
            <Styled.Area>

                <Header />

                <Styled.Steps>
                    <Styled.SideBar>

                        <SidebarItem
                            title="Pessoal"
                            description="Se indentifique"
                            icon="profile"
                            path="/" 
                            active={state.currentStep === 1}
                        />

                        <SidebarItem
                            title="Profissional"
                            description="Seu nível"
                            icon="book"
                            path="/step2" 
                            active={state.currentStep === 2}
                        />

                        <SidebarItem
                            title="Contato"
                            description="Como te chamar"
                            icon="mail"
                            path="/step3" 
                            active={state.currentStep === 3}
                        />




                    </Styled.SideBar>
                    <Styled.Page>
                        {children}
                    </Styled.Page>
                </Styled.Steps>
            </Styled.Area>
        </Styled.Container>
    )
}