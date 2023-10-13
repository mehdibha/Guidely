import React from "react"
import { Handle, NodeProps, Position } from "reactflow"
import { roadmapContext } from "../context"

type NodeCreatorProps = NodeProps<{
  value: string
}>

export const NodeCreator = (props: NodeCreatorProps) => {
  const { data, isConnectable } = props
  const { value } = data
  const { setBlocks } = React.useContext(roadmapContext)
  const createEmptyBlock = () => {
    setBlocks((blocks) => [
      ...blocks,
      {
        title: `parent${blocks.length + 1}`,
        content: [
          "child 1",
          "child 2",
          // "child 3",
          // "child 4",
          // "child 5",
          // "child 6",
        ],
      },
    ])
  }
  return (
    <React.Fragment>
      <div
        onClick={createEmptyBlock}
        className="text-foreground-secondary flex h-[60px] w-[180px] cursor-pointer items-center justify-center rounded-md border border-dashed bg-gray-200 shadow-lg transition-all hover:bg-gray-300"
      >
        {value}
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="bottom-source"
        isConnectable={isConnectable}
        style={{ background: "none", border: "none" }}
      />
      <Handle
        type="target"
        position={Position.Top}
        id="top-target"
        isConnectable={isConnectable}
        style={{ background: "none", border: "none" }}
      />

      <Handle
        type="source"
        position={Position.Left}
        id="left-source"
        isConnectable={isConnectable}
        style={{ background: "none", border: "none" }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="left-target"
        isConnectable={isConnectable}
        style={{ background: "none", border: "none" }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="right-source"
        isConnectable={isConnectable}
        style={{ background: "none", border: "none" }}
      />
      <Handle
        type="target"
        position={Position.Right}
        id="right-target"
        isConnectable={isConnectable}
        style={{ background: "none", border: "none" }}
      />
    </React.Fragment>
  )
}
