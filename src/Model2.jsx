import React, { useEffect, useRef } from "react";
import { Html, useGLTF } from "@react-three/drei";
import gsap from 'gsap'
import { useThree } from "@react-three/fiber";
import { useLayoutEffect } from "react";
import SplitType from 'split-type'

export default function Model2(props) {

  const { camera, scene } = useThree()

  const model = useRef()
  const modelScale = useRef()

  const tl = gsap.timeline()

  let mm  = gsap.matchMedia();

  const cameraLoads = () => {
    gsap.to(camera.position, {
      duration: 5,
      x: 0,
      y: 0,
      z: 10,
      ease: 'power3.out',
    });
  };

  useEffect(() => {
      cameraLoads();
  }, []);

  useLayoutEffect(() => {

    const cont = document.querySelector(".carousel");
    const splitTypes = document.querySelectorAll('.reveal-type')

    splitTypes.forEach((char,i) => {

      const bg = char.dataset.bgColor
      const fg = char.dataset.fgColor

      const text = new SplitType(char, { types: 'chars'})

      gsap.from(text.chars, {
              scrollTrigger: {
                  trigger: char,
                  start: 'top bottom',
                  end: 'bottom center',
                  scrub: true,
              },
              opacity: 0.2,
              stagger: 0.1,
      })
  })

    mm.add({
      isDesktop: "(min-width: 800px)",
      isMobile: "(max-width: 799px)"
    }, (context) => {
      let { isMobile, isDesktop } = context.conditions;


      // FIRST TO SECOND


      tl
      .to(model.current.rotation, {
        y: Math.PI / 0.75,
        scrollTrigger: {
          trigger: ".six",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(model.current.rotation, {
        scrollTrigger: {
          trigger: ".footer",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      

    })
    

  }, [])
  const { nodes, materials } = useGLTF('./eth.glb')
  return (
    <group ref={model} rotation={ [ Math.PI * -0.15, Math.PI * 0.2, 0 ] } {...props} dispose={null}>
      <group ref={modelScale} position={[-2.998, 0, 0.987]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={materials['Material.007']}
            position={[2.998, 0, -0.99]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={2.409}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_10.geometry}
            material={materials['Material.003']}
            position={[2.998, 0, -0.99]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={2.409}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_12.geometry}
            material={materials['Material.006']}
            position={[2.998, 0, -0.99]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={2.409}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./eth.glb')