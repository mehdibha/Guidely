export interface Chapter {
  id: string
  label: string
}

export interface SubChapter {
  id: string
  label: string
}

export interface Block {
  title: string
  content: string[]
}

export type Variant = "default" | "roady"
