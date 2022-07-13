import { createStore } from "https://framer.com/m/framer/store.js@^1.0.0"
import React from "react"
import useDeviceOrientation from "./useDeviceOrientation.tsx"

export const useStore = createStore({
  alpha: 0,
  beta: 0,
  gamma: 0,
  absolute: 0,
})

export default function OrientationInfo() {
  const { orientation, requestAccess, revokeAccess } = useDeviceOrientation()

  const onToggle = (toggleState: boolean): void => {
    try {
      document.body.requestFullscreen()
    } catch (e) {
      console.log(e)
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const result = toggleState ? requestAccess() : revokeAccess()
  }

  return (
    <div
      style={{ width: 100, height: 100 }}
      onClick={() => onToggle(true)}
    ></div>
  )
}
