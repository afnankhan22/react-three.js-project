import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import state from '../store'
import { delay } from 'framer-motion'
const CameraRig = ({children}) => {
  const group =useRef();
  const snap = useSnapshot(state);
  useFrame((state , delta)=>{
    const isBreakpoint = window.innerWidth <=1260
    const ismobile = window.innerWidth<=600
     
    let targetposition = [-0.4, 0 ,2]
    if (snap.intro){
      if(isBreakpoint) targetposition = [-0.2,0,2]
      if(ismobile) targetposition=[0,0.2,3]

    }
    else{
      if(ismobile)targetposition=[0,0,3]
      else targetposition= [0,0,2]
    }
         
    easing.damp3(state.camera.position, targetposition,0.85,delta)
    easing.dampE(
    group.current.rotation,
    [state.pointer.y / 10, -state.pointer.x / 5,0],
    0.25,
    delta
  )

  })
  
  return (
    <group ref={group}>{children}</group>
  )
}

export default CameraRig