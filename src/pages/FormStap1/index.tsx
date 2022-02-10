import { useNavigate } from 'react-router-dom'
import { useForm, FormActions } from '../../contexts/FormContext'
import { Theme } from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react';

import * as Styled from './styles'

export default function FormStap1() {

    const navigate = useNavigate();

    const {state, dispatch } = useForm(); 

    useEffect(() => {
        dispatch({
            type: FormActions.currentStep,
            payload: 1
        })
    },[])   

    const handleNextStep = () => {
        if(state.name === ''){
            alert("Digite seu nome completo");
            navigate('/');
        } else {
            navigate('/step2');
        }

    }

    const handleNameChange = ( e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.name,
            payload: e.target.value
        });
    }

    return (
        <Theme>
            <Styled.Container>
                <p>Passo {state.currentStep}/3</p>
                <h1>Vamos começar com seu nome</h1>
                <p>Preencha o campo abaixo com seu nome completo.</p>
                <hr />
                <label>
                    Seu nome completo
                    <input 
                        type="text" 
                        value={state.name} 
                        onChange={handleNameChange}
                        autoFocus />
                </label>
                
                <button onClick={handleNextStep}>Próximo</button>
                
            </Styled.Container>
        </Theme>
    )
}