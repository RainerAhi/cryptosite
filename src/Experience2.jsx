import { Suspense } from 'react'
import { OrbitControls, Environment, Float, SoftShadows } from '@react-three/drei'
import Model2 from './Model2'

export default function Experience2() {
  

  return (
    <>
      <SoftShadows intensity={ 20 } />
        <Float rotationIntensity={ 0.75 } floatIntensity={ 1 } speed={ 2 } >
          <Model2 position={ [ 0, 0, 0 ] } scale={ 1 } />
        </Float>  
      <OrbitControls minPolarAngle={Math.PI / -2} maxPolarAngle={Math.PI / 1} enableZoom={ false } enableRotate={ false } enablePan={ false } />
      <Environment preset='city' />
      </>
  )
}