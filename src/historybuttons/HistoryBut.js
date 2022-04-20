import React from 'react'
import { ButtonHistory } from '../ButtonElements'
import { ButtonContainer } from './HistoryButElements'


const HistoryBut = (props) => {
    return (
        <ButtonContainer>
            <ButtonHistory type='button'
                aria-pressed={props.isPressed}
                onClick={() => props.setFilter(props.name)}
            >
                <span>{props.name}</span>
            </ButtonHistory >
        </ButtonContainer>

    )
}

export default HistoryBut