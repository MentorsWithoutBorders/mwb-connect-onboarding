import * as React from 'react'
import { Ripple } from 'react-preloaders';

export const Loader = () => {
  return (
    <Ripple color={'#fff'} background="radial-gradient(circle at center, #03378C, #01112b);"/>
  )
}