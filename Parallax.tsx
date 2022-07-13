import type { ComponentType } from "react"
import { useStore } from "./OrientationInfo.tsx"
import { motion } from "framer-motion"
// Learn more: https://www.framer.com/docs/guides/overrides/

export function withBg(Component): ComponentType {
  return (props) => {
    const [store, setStore] = useStore()
    return (
      <Component
        {...props}
        style={{ x: -160 + store.gamma * 2 }}
      ></Component>
    )
  }
}

export function withFore(Component): ComponentType {
  return (props) => {
    const [store, setStore] = useStore()
    return (
      <Component
        {...props}
        style={{ x: -20 + store.gamma * 0.25 }}
      ></Component>
    )
  }
}
