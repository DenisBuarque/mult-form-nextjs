import { useNavigate, Link } from 'react-router-dom'
import { useForm, FormActions } from '../../contexts/FormContext'
import { Theme } from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react';

import * as Styled from './styles'

export default function FormStap3() {

    const navigate = useNavigate();

    const {state, dispatch } = useForm(); 

    useEffect(() => {

        if(state.name === ''){
            alert("Digite seu nome completo");
            navigate('/');
        } else {
            dispatch({
                type: FormActions.currentStep,
                payload: 3
            })
        }

    },[])   

    const handleNextStep = () => {
        if(state.email !== '' && state.github !== ''){
            console.log(state);
        } else {
            alert('Preencha seu dados!');
        }

    }

    const handleEmailChange = ( e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.email,
            payload: e.target.value
        });
    }

    const handleGithubChange = ( e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.github,
            payload: e.target.value
        });
    }

    return (
        <Theme>
            <Styled.Container>
                <p>Passo {state.currentStep}/3</p>
                <h1>Legal {state.name}, onde te achamos?</h1>
                <p>Preencha com seus dados para conseguirmos te encontrar.</p>
                <hr />

                <label>
                    Qual seu E-mail?
                    <input 
                        type="text" 
                        value={state.email} 
                        onChange={handleEmailChange} 
                        autoFocus
                    />
                </label>

                <label>
                    Qual seu Github?
                    <input 
                        type="text" 
                        value={state.github} 
                        onChange={handleGithubChange}
                    />
                </label>

                <Link to="/step2" className="backButton">
                    Voltar
                </Link>
                
                <button onClick={handleNextStep}>Finalizar Cadastro</button>
                
            </Styled.Container>
        </Theme>
    )
}