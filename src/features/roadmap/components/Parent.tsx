import React from "react"
import { Handle, NodeProps, Position } from "reactflow"

type NodeData = {
  value: number
}

function Parent({ data, isConnectable }: NodeProps<NodeData>) {
  return (
    <>
      <div className="flex h-[60px] w-[180px] items-center justify-center rounded-md border bg-slate-300 shadow-lg">
        {data.value}
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
    </>
  )
}

export default Parent
