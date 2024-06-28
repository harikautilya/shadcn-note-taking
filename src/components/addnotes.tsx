"use client";
import React, { useState } from "react";
import { Note } from "@/data";
import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "./ui/dialog"
import { Input } from "./ui/input"
import { useAppDispatch } from "@/lib/hooks";
import { addNote, updateNote } from "@/store";
import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "./ui/button";

const EmptyNote: Note = {
  name: "",
  content: "",
  createdAt: 0,
}

interface AddNoteProps extends
  React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof buttonVariants> {
  position: number,
  isNewNote?: boolean,
  preloadNote?: Note,
  buttonString?: string
}

const AddNote: React.FC<AddNoteProps> = ({
  isNewNote = false,
  position,
  preloadNote = { ...EmptyNote },
  variant,
  buttonString = "Add Note"
}) => {


  const dispatch = useAppDispatch();

  const [note, setNote] = useState({ ...preloadNote } as Note);


  const updateTitle = (value: string) => {
    const newNote = {
      name: value,
      content: note.content
    } as Note;
    updateState(newNote);
  }

  const updateDescription = (value: string) => {
    const newNote = {
      content: value,
      name: note.name
    } as Note;
    updateState(newNote);
  }

  const updateState = (state: Note) => {
    setNote({ ...state })
  }

  const saveNote = (e: any) => {
    const newNote: Note = { ...note };
    updateState({ ...EmptyNote } as Note)

    if (isNewNote) {
      dispatch(addNote(newNote));
    } else {
      dispatch(updateNote({ positon: position, note: newNote }))
    }
  }


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={variant} ><p className="text-white">{buttonString}</p></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Note</DialogTitle>
          <DialogDescription>
            Add you new note here
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="name"
              placeholder="Note title"
              defaultValue={note.name}
              onChange={(e) => updateTitle(e.target.value)}
              className="col-span-4"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="username"
              placeholder="Note Description"
              onChange={(e) => updateDescription(e.target.value)}
              defaultValue={note.content}
              className="col-span-4"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button onClick={saveNote}>Save changes</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export { AddNote };