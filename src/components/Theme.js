/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react'
import Console from './Console'
import Title from './Title'
import * as S from './styles'

const Theme = () => {
    const [color, setColor] = useState('green')
    
    const onClick = () => {
        if(color === 'green') {
            setColor('#ff5722')   
        } else setColor('green') 
    }
    
    return (
        <>
        <S.ButtonTheme type='button' color={color} onClick={onClick}>Color theme</S.ButtonTheme>
        <Title color={color}>Console CMD. SKYPRO_REACT</Title>
        <Console color={color}/>
        </>
    ) 
}

export default Theme