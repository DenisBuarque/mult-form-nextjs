import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import { useForm, FormActions } from '../../contexts/FormContext'
import { Theme } from '../../components/Theme'
import { SelectOption } from '../../components/SelectOption'

import * as Styled from './styles'

export default function FormStap2() {

    const navigate = useNavigate();

    const { state, dispatch } = useForm();

    useEffect(() => {

        if (state.name === '') {
            navigate('/');
        } else {
            dispatch({
                type: FormActions.currentStep,
                payload: 2
            })
        }

    }, [])

    const handleNextStep = () => {
        if (state.name === '') {
            alert("Digite seu nome completo");
            navigate('/');
        } else {
            navigate('/step3');
        }

    }

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.level,
            payload: level
        })
    }

    return (
        <Theme>
            <Styled.Container>
                <p>Passo {state.currentStep}/3</p>
                <h1>{state.name}, o que melhor descreve você?</h1>
                <p>Escolha a melhor opção que condiz com seu estado profissional atual.</p>
                <hr />

                <SelectOption
                    title="Sou iniciante"
                    description="Comecei a programar a menos de 2 anos."
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />

                <SelectOption
                    title="Sou programdor"
                    description="Já programo a mais de 2 anos."
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />

                <Link to="/" className='backButton'>
                    Voltar
                </Link>

                <button onClick={handleNextStep}>
                    Próximo
                </button>

            </Styled.Container>
        </Theme>
    )
}