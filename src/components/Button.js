import * as S from './styles'

const Button = (props) => {
    const isDisabled = !(props.lines.length > 1)
    
    const onClick = () => {
        if(!isDisabled) {
            props.setLines(['C/users/SKYPRO_REACT>'])
        } 
    }
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <S.ButtonClean type='button' {...props} onClick={onClick}/>  
}

export default Button