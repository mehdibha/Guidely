import React from "react"
import { Block } from "../types"

interface MyContextState {
  blocks: Block[]
  setBlocks: React.Dispatch<React.SetStateAction<Block[]>>
}

export const roadmapContext = React.createContext<MyContextState>({
  blocks: [],
  setBlocks: () => {},
})
