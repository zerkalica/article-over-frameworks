import React from 'react'
import styled from 'styled-components'

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: center;
  align-text: center;
  font-size: 0.7em;
  margin: 1.4rem 0;
  padding: 0 3em;
`

export const TagBox = styled.div`
  background: #98FF8F;
  max-width: 10em;
  text-align: center;
  margin: .5rem .5rem;
  border-radius: 10px;
  box-shadow: 1px 1px 3px 1px #ddd; 
  display: flex;
  flex-direction: column;
`

export const Tag = styled.div`
  background: #98FF8F;
  text-align: center;
  margin: .5rem .5rem;
  border-radius: 10px;
  box-shadow: 1px 1px 3px 1px #aaa; 
  display: flex;
  flex-direction: column;
  padding: 0.2rem 0.9rem;
`

export const TagHeader = styled.div`
  border-top-left-radius: 10px; 
  border-top-right-radius: 10px; 
  padding: 0.2rem 0.9rem;
`

export const TagFooter = styled.div`
  background: #eee;
  color: #444;
  font-size: ${props => props.big ? '1' : '0.5'}em;
  border-bottom-left-radius: 10px; 
  border-bottom-right-radius: 10px; 
  padding: 0.5rem 1rem;
`
