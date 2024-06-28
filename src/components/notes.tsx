"use client"
import * as React from "react"
import { cn } from "@/lib/utils";
import { Note } from "@/data";
import { Button } from "./ui/button";
import { AddNote } from "./addnotes";
import { useAppDispatch } from "@/lib/hooks";
import { deleteNote } from "@/store";

interface NoteProps
  extends React.HTMLAttributes<HTMLDivElement> {
  note: Note,
  index: number,
}

const NoteItem: React.FC<NoteProps> = ({ index, note, className, ...props }) => {

  const dispatch = useAppDispatch();
  return (
    <div
      className={cn(
        "flex flex-col px-5 py-4 border m-2 min-w-64 min-h-80 justify-between",
        className
      )}
      {...props}
    >
      <div className="flex flex-col">
        <p className="text-base p-1 font-bold">{note.name}</p>
        <p className="text-base p-1">{note.content}</p>
      </div>
      <div className="flex flex-row justify-between">
        <AddNote position={index} isNewNote={false} buttonString="Edit Note" preloadNote={note} />
        <Button onClick={(e) => dispatch(deleteNote(index))}>
          Delete Note
        </Button>
      </div>
    </div>
  )
};

interface NotesListProps
  extends React.HTMLAttributes<HTMLDivElement> {
}

const NoteList: React.FC<NotesListProps> = ({ className, ...props }) => (
  <div
    className={cn(
      "flex flex-row flex-wrap ",
      className
    )}
    {...props}
  />

)




export { NoteList, NoteItem }