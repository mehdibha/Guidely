import React from "react"
import { Handle, NodeProps, Position } from "reactflow"

type NodeData = {
  value: number
}

function SubChapter({ data, isConnectable }: NodeProps<NodeData>) {
  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        id="left-target"
        isConnectable={isConnectable}
        style={{ background: "none", border: "none", width: "1px" }}
      />
      <Handle
        type="target"
        position={Position.Right}
        id="right-target"
        isConnectable={isConnectable}
        style={{ background: "none", border: "none", width: "1px" }}
      />
      <div className="flex h-[50px] w-[300px] items-center justify-center rounded-md border bg-gray-300 shadow-md">
        {data.value}
      </div>
    </>
  )
}

export default SubChapter
