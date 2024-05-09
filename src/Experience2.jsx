import { Suspense, useRef, useState, useEffect } from 'react'
import { OrbitControls, Environment, Float, SoftShadows } from '@react-three/drei'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Model from './Model'
import Model2 from './Model2'
gsap.registerPlugin(ScrollTrigger)

export default function Experience2() {

  const controlsRef = useRef()

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
    };

    // Add event listener to listen for window resize
    window.addEventListener('resize', handleResize);

    // Initial check for mobile device on component mount
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log(isMobile)
  

  return (
    <>
      <SoftShadows intensity={ 20 } />
      <Suspense fallback >
        <Float rotationIntensity={ 0.2 } floatIntensity={ 0.5 } speed={ 2 } >
          <Model2 position={ [ 0, -1.25, 0 ] } scale={ isMobile ? 0.75 : 1.5 } />
        </Float>  
      </Suspense>
      <OrbitControls ref={controlsRef} minPolarAngle={Math.PI / -2} maxPolarAngle={Math.PI / 1} enableZoom={ false } enableRotate={ true } enablePan={ false } />
      <Environment preset='city' />
      </>
  )
}