"use client"

import React from "react"
import Parent from "@/features/roadmap/components/Parent"
import SubChapter from "@/features/roadmap/components/sub-chapter"
import ReactFlow, {
  Edge,
  Node,
  NodeTypes,
  OnConnect,
  OnEdgesChange,
  OnNodesChange,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow"
import "reactflow/dist/style.css"

const viewportWidth = 600
const blockHeight = 600

const getParentPosition = (index: number) => {
  const x = [0, -1, 0, 1][index % 4] * (viewportWidth / 2)
  const y = (index * blockHeight) / 2
  return { x, y }
}

const getSubSubjectPosition = (parentIndex: number, childPosition: number) => {
  const { x: xp, y: yp } = getParentPosition(parentIndex)
  const right = xp + 250 + 50
  const left = xp - 300 - 50

  const x = childPosition % 6 < 3 ? right : left
  const y = [yp - 60, yp, yp + 60][childPosition % 3]
  return { x, y }
}

const chapters = [
  "Inernet",
  "HTML",
  "CSS",
  "Javascript",
  "VCS Hosting",
  "Package managers",
  "Pick a framerwork",
  "Writing CSS",
  "CSS architecture",
]

const subChapters = [
  "How does the Internet Work?",
  "What is HTTP?",
  "What is a Domain Name?",
  "What Is Web Hosting?",
  "DNS and how it works",
  "Browsers and how they work",
]

const initialNodes: Node[] = chapters
  .map((elem, index) => {
    return {
      id: `node-parent-${index}`,
      type: "parent",
      position: getParentPosition(index),
      data: { value: elem },
    }
  })
  .concat(
    subChapters.map((elem, index) => {
      return {
        id: `node-subChapter-${index}`,
        type: "subchapter",
        position: getSubSubjectPosition(0, index),
        data: { value: elem },
      }
    })
  )
  .concat(
    subChapters.map((elem, index) => {
      return {
        id: `node-subChapter1-${index}`,
        type: "subchapter",
        position: getSubSubjectPosition(1, index),
        data: { value: elem },
      }
    })
  )
  .concat(
    subChapters.map((elem, index) => {
      return {
        id: `node-subChapter2-${index}`,
        type: "subchapter",
        position: getSubSubjectPosition(2, index),
        data: { value: elem },
      }
    })
  )
  .concat(
    subChapters.map((elem, index) => {
      return {
        id: `node-subChapter3-${index}`,
        type: "subchapter",
        position: getSubSubjectPosition(3, index),
        data: { value: elem },
      }
    })
  )

const initialEdges: Edge[] = chapters
  .slice(0, chapters.length - 1)
  .map((elem, index) => {
    const sourceHandle = `${
      ["left", "bottom", "right", "bottom"][index % 4]
    }-source`
    const targetHandle = `${["top", "left", "top", "right"][index % 4]}-target`
    return {
      id: `edge-${index}`,
      source: `node-parent-${index}`,
      sourceHandle,
      targetHandle,
      target: `node-parent-${index + 1}`,
      animated: true,
      type: "default",
      style: { strokeWidth: "6px" },
    }
  })
  .concat(
    subChapters.map((elem, index) => {
      const sourceHandle = `${["right", "left"][index % 6 < 3 ? 0 : 1]}-source`
      const targetHandle = `${["left", "right"][index % 6 < 3 ? 0 : 1]}-target`

      return {
        id: `edge-0-${index}`,
        source: `node-parent-0`,
        sourceHandle,
        targetHandle,
        target: `node-subChapter-${index}`,
        animated: false,
        type: "default",
        style: { strokeWidth: "2px" },
      }
    })
  )
  .concat(
    subChapters.map((elem, index) => {
      const sourceHandle = `${["right", "left"][index % 6 < 3 ? 0 : 1]}-source`
      const targetHandle = `${["left", "right"][index % 6 < 3 ? 0 : 1]}-target`

      return {
        id: `edge-0-${index}`,
        source: `node-parent-1`,
        sourceHandle,
        targetHandle,
        target: `node-subChapter1-${index}`,
        animated: false,
        type: "default",
        style: { strokeWidth: "2px" },
      }
    })
  )
  .concat(
    subChapters.map((elem, index) => {
      const sourceHandle = `${["right", "left"][index % 6 < 3 ? 0 : 1]}-source`
      const targetHandle = `${["left", "right"][index % 6 < 3 ? 0 : 1]}-target`

      return {
        id: `edge-0-${index}`,
        source: `node-parent-2`,
        sourceHandle,
        targetHandle,
        target: `node-subChapter2-${index}`,
        animated: false,
        type: "default",
        style: { strokeWidth: "2px" },
      }
    })
  )
  .concat(
    subChapters.map((elem, index) => {
      const sourceHandle = `${["right", "left"][index % 6 < 3 ? 0 : 1]}-source`
      const targetHandle = `${["left", "right"][index % 6 < 3 ? 0 : 1]}-target`

      return {
        id: `edge-0-${index}`,
        source: `node-parent-3`,
        sourceHandle,
        targetHandle,
        target: `node-subChapter3-${index}`,
        animated: false,
        type: "default",
        style: { strokeWidth: "2px" },
      }
    })
  )

const nodeTypes: NodeTypes = { parent: Parent, subchapter: SubChapter }

export default function CreateGuidePage() {
  const [nodes, setNodes] = React.useState<Node[]>([])
  const [edges, setEdges] = React.useState<Edge[]>(initialEdges)

  const onNodesChange: OnNodesChange = React.useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  )
  const onEdgesChange: OnEdgesChange = React.useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  )
  const onConnect: OnConnect = React.useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  )

  return (
    <div
      style={{ height: `${((blockHeight * 1) / 2) * (chapters.length - 1)}px` }}
    >
      <ReactFlow
        preventScrolling={false}
        zoomOnScroll={false}
        panOnDrag={false}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      ></ReactFlow>
    </div>
  )
}
