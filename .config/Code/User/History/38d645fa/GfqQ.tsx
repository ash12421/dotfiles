"use client";
import { Canvas } from "@react-three/fiber";
import { Sphere } from "three/src/Three.js";

function CanvasElem() {
	return (
		<Canvas>
            <ambientLight />
		</Canvas>
	);
}


export default CanvasElem;
