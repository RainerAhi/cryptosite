import Experience from "./Experience";
import { Canvas, useFrame } from '@react-three/fiber'
import Experience2 from "./Experience2";

export default function CanvasContainer2() {

    return (
        <>
         <Canvas shadows camera={{ position: [15, 2, 5], fov: 35 }} >
            <Experience2 />
         </Canvas>
        </>
    )
}