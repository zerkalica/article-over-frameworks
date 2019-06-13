import React from 'react'
import styled from 'styled-components'

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
`

export const IconContainer = styled.div`
  margin: 0.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid green; */
`

export const IconText = styled.div`
  font-size: 1.3em;
`

export const IconImage = styled.img`
  max-width: ${props => props.huge ? '15' : (props.big ? '7' : '5')}rem;
  max-height: ${props => props.huge ? '15' : (props.big ? '7' : '5')}rem;
  width: 100%;
  /* border: 1px solid red; */
`

export const Icon = props => <IconContainer>
  {props.src && <IconImage huge={props.huge} big={props.big} src={props.src}/>}
  {props.text && <IconText>{props.text}</IconText>}
</IconContainer>

