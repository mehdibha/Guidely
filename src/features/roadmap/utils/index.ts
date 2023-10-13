import { Edge, Node } from "reactflow"
import { Block, Variant } from "../types"

const viewportWidth = 600
const blockHeight = 600

export const getNodesFromBlocks = (
  blocks: Block[],
  variant: Variant
): Node[] => {
  let nodes: Node[] = []

  blocks.forEach((block, index) => {
    nodes.push({
      id: `node-parent-${index}`,
      type: "parent",
      position: getParentPosition(index),
      data: { value: block.title },
    })
    block.content.forEach((contentItem, contentItemIndex) => {
      nodes.push({
        id: `node-child-${index}-${contentItemIndex}`,
        type: "subchapter",
        position: getSubSubjectPosition(
          index,
          contentItemIndex,
          block.content.length
        ),
        data: { value: contentItem },
      })
    })
  })

  nodes.push({
    id: "node-creator-parent",
    type: "creator",
    position: getParentPosition(blocks.length),
    data: { value: "Add a section" },
  })

  return nodes
}

export const getEdgesFromBlocks = (
  blocks: Block[],
  variant: Variant
): Edge[] => {
  let edges: Edge[] = []

  blocks.slice(0, blocks.length - 1).forEach((block, index) => {
    const sourceHandle = `${
      ["left", "bottom", "right", "bottom"][index % 4]
    }-source`
    const targetHandle = `${["top", "left", "top", "right"][index % 4]}-target`
    edges.push({
      id: `edge-main-${index}`,
      source: `node-parent-${index}`,
      sourceHandle,
      targetHandle,
      target: `node-parent-${index + 1}`,
      animated: true,
      type: "default",
      style: { strokeWidth: "6px" },
    })
  })
  blocks.forEach((block, index) => {
    block.content.forEach((contentItem, contentItemIndex) => {
      const sourceHandle = `${
        ["right", "left"][contentItemIndex % 6 < 3 ? 0 : 1]
      }-source`
      const targetHandle = `${
        ["left", "right"][contentItemIndex % 6 < 3 ? 0 : 1]
      }-target`
      edges.push({
        id: `edge-for-child-${index}-${contentItemIndex}`,
        source: `node-parent-${index}`,
        sourceHandle,
        targetHandle,
        target: `node-child-${index}-${contentItemIndex}`,
        animated: false,
        type: "default",
        style: { strokeWidth: "2px" },
      })
    })
  })

  // for the node parent creator
  const indexEdgeCreator = blocks.length - 1
  const sourceHandle = `${
    ["left", "bottom", "right", "bottom"][indexEdgeCreator % 4]
  }-source`
  const targetHandle = `${
    ["top", "left", "top", "right"][indexEdgeCreator % 4]
  }-target`
  edges.push({
    id: `edge-main-creator-${indexEdgeCreator}`,
    source: `node-parent-${indexEdgeCreator}`,
    sourceHandle,
    targetHandle,
    target: `node-creator-parent`,
    animated: true,
    type: "default",
    style: { strokeWidth: "6px" },
  })
  return edges
}

const getParentPosition = (index: number) => {
  const x = [0, -1, 0, 1][index % 4] * (viewportWidth / 2)
  const y = (index * blockHeight) / 2
  return { x, y }
}
const getSubSubjectPosition = (
  parentIndex: number,
  childPosition: number,
  totalChildren: number
) => {
  const { x: xp, y: yparent } = getParentPosition(parentIndex)
  const yp = yparent + 5

  const right = xp + 180 + 50
  const left = xp - 300 - 50

  const isRight = childPosition <= Math.ceil(totalChildren / 2 - 1)
  const numberChildrenRight = Math.ceil(totalChildren / 2 - 1) + 1
  const numberChildrenLeft = totalChildren - numberChildrenRight
  const numberChildrenSide = isRight ? numberChildrenRight : numberChildrenLeft

  const x = isRight ? right : left

  const y =
    (isRight
      ? Math.ceil(childPosition - numberChildrenSide / 2) * 60 + yp
      : (childPosition - numberChildrenRight - numberChildrenSide / 2) * 60 +
        yp) + (numberChildrenSide % 2 === 0 ? 30 : 0)

  return { x, y }
}
