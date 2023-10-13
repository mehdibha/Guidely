"use client"

import React from "react"
import { RoadmapBuilder } from "@/features/roadmap/components/roadmap-content-builder"
import { EditDialog } from "@/components/guide/edit-text-dialog"
import { Badge } from "@/components/ui"

const tags = ["front-end", "development"]

export default function CreateGuidePage() {
  return (
    <div className="container pt-8">
      <div className="container max-w-4xl">
        <div className="mb-1">
          <EditDialog>
            <h1 className="text-3xl font-bold">Your roadmap title here</h1>
          </EditDialog>
        </div>
        <div>
          <EditDialog>
            <h1>Your summary description here</h1>
          </EditDialog>
        </div>
        <div className="mt-3">
          <EditDialog>
            <div className="flex space-x-1">
              {tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </EditDialog>
        </div>
      </div>
      <RoadmapBuilder />
    </div>
  )
}
