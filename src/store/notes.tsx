import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Note } from "@/data";



type SliceState = { notes: Note[] }

const initialState: SliceState = {
  notes: []
}


type UpdateNoteProps = {
  positon: number,
  note: Note
}

const noteSlice = createSlice({
  name: "notes",
  initialState: initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {

      const note = action.payload;
      state.notes.push(note);

    },
    updateNote: (state, action: PayloadAction<UpdateNoteProps>) => {

      const data = action.payload;
      state.notes[data.positon] = data.note

    },
    deleteNote: (state, action: PayloadAction<number>) => {

      const index = action.payload;
      state.notes.splice(index, 1);

    }
  }
})

export const { addNote, updateNote, deleteNote } = noteSlice.actions;
export default noteSlice.reducer;