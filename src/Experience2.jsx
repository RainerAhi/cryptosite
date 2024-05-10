import { Suspense } from 'react'
import {  Environment, Float } from '@react-three/drei'
import Model2 from './Model2'

export default function Experience2() {
  
  return (
    <>
    <Suspense fallback>
      <Float rotationIntensity={ 0.75 } floatIntensity={ 1 } speed={ 2 } >
        <Model2 position={ [ 0, 0, 0 ] } scale={ 1 } />
      </Float>
      </Suspense>  
      <Environment preset='city' />
      </>
  )
}