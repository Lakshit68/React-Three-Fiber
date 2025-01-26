import { Canvas } from '@react-three/fiber'
import React from 'react'
import "./style.css";
import { OrbitControls } from '@react-three/drei';
import Cyl from "./Cyl";
import * as THREE from "three";

const App = () => {
  
  return (
   <Canvas camera={{fov:35}}>
    <OrbitControls/>
    <ambientLight/>
    <Cyl/>
   </Canvas>
  )
}

export default App
