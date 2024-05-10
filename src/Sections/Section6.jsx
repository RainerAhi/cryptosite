import { View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import CanvasContainer2 from "../CanvasContainer2";

export const Section6 = () => {
    return (
        <section className="six" >
            <div className="six-content" >
                <CanvasContainer2 />
            </div>
        </section>
    )
}