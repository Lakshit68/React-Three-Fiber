import React, { useRef } from 'react'; // Import useRef from React
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import image from './assets/sarthak.png';
import { useFrame } from '@react-three/fiber';

const Cyl = () => {
    // Load texture from the assets folder
    let tex = useTexture(image);
    
    // Create a reference for the cylinder mesh
    let cyl = useRef(null);

    // Rotate the cylinder on every frame
    useFrame((state, delta) => {
        cyl.current.rotation.y += delta;
    });

    return (
        <group rotation={[0, 1.4, 0.5]}>
        <mesh ref={cyl} >
            <cylinderGeometry args={[1.5, 1.5, 1.5, 60, 60, true]} />
            <meshStandardMaterial map={tex} side={THREE.DoubleSide} />
        </mesh>
        </group>
    );
};

export default Cyl;
