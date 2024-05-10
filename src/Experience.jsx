import { Suspense } from 'react'
import { OrbitControls, Environment, Float, SoftShadows } from '@react-three/drei'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Model from './Model'
gsap.registerPlugin(ScrollTrigger)

export default function Experience() {
  

  return (
    <>
      <SoftShadows intensity={ 20 } />
        <Float rotationIntensity={ 0.2 } floatIntensity={ 0.5 } speed={ 2 } >
          <Model position={ [ 0, -1.25, 0 ] } scale={ 1.5 } />
        </Float>  
      <OrbitControls minPolarAngle={Math.PI / -2} maxPolarAngle={Math.PI / 1} enableZoom={ false } enableRotate={ false } enablePan={ false } />
      <Environment preset='city' />
      </>
  )
}