import * as Styled from './styles'

type Props = {
    title: string;
    description: string;
    selected: boolean;
    onClick: () => void;
}
export const SelectOption = ({title, description, selected, onClick}:Props) => {
    return (
        <Styled.Container onClick={onClick} selected={selected}>
            <Styled.Info>
                <Styled.Title>{title}</Styled.Title>
                <Styled.Description>{description}</Styled.Description>
            </Styled.Info>
        </Styled.Container>
    )
}