/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react'
import Line from './Line'
import Button from './Button'
import * as S from './styles'

const Console = (props) => {
  const [lines, setLines] = useState(['C/users/SKYPRO_REACT>'])

  const onKeyPress = (e) => {
    if (e.charCode === 13) {
      setLines([...lines, 'C/users/SKYPRO_REACT>'])
      e.target.value = ''
    }
  }

  return (
    <div>
      {lines.map((line) => (
        <Line {...props} key={crypto.randomUUID()}>{line}</Line>
      ))}
      <S.StyledConsole onKeyPress={onKeyPress} {...props}/>
      <Button lines={lines} setLines={setLines} {...props}>Clean</Button>
    </div>
  )
}
export default Console