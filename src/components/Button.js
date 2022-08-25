import * as S from './styles'

const Button = (props) => {
    let isDisabled = true
    
    if(props.lines.length > 1) {
        isDisabled = false 
    }
    
    const onClick = () => {
        if(props.lines.length > 1) {
            props.lines.splice(1, props.lines.length)
            props.setLines([...props.lines])
        } 
    }
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <S.ButtonClean type="button" {...props} disabled={isDisabled} onClick={onClick}/>  
}

export default Button