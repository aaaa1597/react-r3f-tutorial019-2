import React, {useRef} from 'react';
import './App.css';
import { Canvas, useFrame, MeshProps  } from '@react-three/fiber'
import * as THREE from 'three'
import { OrbitControls, Environment, Html } from '@react-three/drei'

const Box = (props: MeshProps) => {
  const ref = useRef<THREE.Mesh>(null!)

  useFrame((_, delta) => {
    if( !ref.current) return
    ref.current.rotation.x += 1 * delta
    ref.current.rotation.y += 0.5 * delta
  })

  return (
    <mesh {...props} ref={ref}>
      <boxGeometry />
      <meshStandardMaterial roughness={0.75} emissive="#404057" />
      <Html distanceFactor={3} position={new THREE.Vector3(1.2, 1.2, 1.2)}>
        <div className="content">
          Boxにannotation
        </div>
      </Html>
      <arrowHelper args={[new THREE.Vector3(-1, -1, -1).normalize(), new THREE.Vector3(1.2, 1.2, 1.2), Math.sqrt(1.1), "red", 0.5]} />
    </mesh>
  )
}

const App = () => {
  return (
    <div style={{ width: "75vw", height: "75vh" }}>
      <Canvas camera={{ position: [3, 1, 2] }}>
        <Box position={[1, 1, 1]} name="A" />
        <Environment preset="forest" background />
        <Html key={112} position={[0.7, 1, 0]} className="annotation" style={{width:180}} transform distanceFactor={3}>
          空間にアノテーション
        </Html>
        <OrbitControls />
        <axesHelper args={[5]} />
        <gridHelper />
      </Canvas>
    </div>
  );
}

export default App;
