import React from "react"
import { Button, Dialog, DialogContent, DialogTrigger, Input } from "../ui"

export const EditDialog = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative inline-block cursor-pointer">
          <div className="absolute left-[-5px] top-[-1px] h-[calc(100%+2px)] w-[calc(100%+10px)] rounded-md transition-all hover:bg-gray-500/20" />
          {children}
        </div>
      </DialogTrigger>
      <DialogContent>
        <h2 className="text-xl font-bold">Edit roadmap title</h2>
        <Input value="Pedro Duarte" />
        <Button>Save</Button>
      </DialogContent>
    </Dialog>
  )
}
