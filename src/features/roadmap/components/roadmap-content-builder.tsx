"use client"

import React from "react"
import ReactFlow, { ReactFlowProvider, useReactFlow } from "reactflow"
import "reactflow/dist/style.css"
import { roadmapContext } from "../context"
import { Block } from "../types"
import { getEdgesFromBlocks, getNodesFromBlocks } from "../utils"
import { nodeTypes } from "./node-types"

const Roadmap = () => {
  const reactFlow = useReactFlow()
  const { blocks } = React.useContext(roadmapContext)
  const nodes = React.useMemo(
    () => getNodesFromBlocks(blocks, "default"),
    [blocks]
  )
  const edges = React.useMemo(
    () => getEdgesFromBlocks(blocks, "default"),
    [blocks]
  )

  const height = 2500

  return (
    <>
      <div
        style={{
          width: "100%",
          height: `${height}px`,
          minHeight: "calc(100vh - 200px)",
        }}
      >
        <ReactFlow
          preventScrolling={false}
          zoomOnScroll={false}
          panOnDrag={false}
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          defaultViewport={{ x: 620, y: 100, zoom: 0.85 }}
          proOptions={{ hideAttribution: true }}
        />
      </div>
    </>
  )
}

const RoadmapBuilderWrapper = () => {
  const [blocks, setBlocks] = React.useState<Block[]>([])

  return (
    <roadmapContext.Provider value={{ blocks, setBlocks }}>
      <ReactFlowProvider>
        <Roadmap />
      </ReactFlowProvider>
    </roadmapContext.Provider>
  )
}

export { RoadmapBuilderWrapper as RoadmapBuilder }
