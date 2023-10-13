import React from "react"
import ReactFlow, { Edge, Node } from "reactflow"
import { nodeTypes } from "./node-types"

interface RoadmapProps {
  nodes: Node[]
  edges: Edge[]
  height: number
}

const Roadmap = (props: RoadmapProps) => {
  const { height, nodes, edges } = props
  return (
    <div style={{ height: `${height}px` }}>
      <ReactFlow
        preventScrolling={false}
        zoomOnScroll={false}
        panOnDrag={false}
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
      />
    </div>
  )
}

export default Roadmap
