import { NodeTypes } from "reactflow"
import Parent from "./Parent"
import { NodeCreator } from "./node-creator"
import SubChapter from "./sub-chapter"

export const nodeTypes: NodeTypes = {
  creator: NodeCreator,
  parent: Parent,
  subchapter: SubChapter,
}
