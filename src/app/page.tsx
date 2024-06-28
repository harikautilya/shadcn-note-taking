'use client'
import Image from "next/image";
import { NoteList, NoteItem, AddNote } from "@/components";
import { useAppSelector } from "@/lib/hooks";
import StoreProvider from "@/app/StoreProvider";


const notes = [
  {
    name: "Sample",
    content: "sample",
    createdAt: 0,
  }
];

const Home = () => {
  const noteState = useAppSelector((state) => state.notes.notes);

  return (
    <main className="flex min-h-screen  flex-col p-8 ">
      <div className="flex items-stretch  border rounded-md overflow-hidden flex-row flex-1">
        <div className="flex flex-col bg-gray-900 w-64 p-4">
          <div className="py-2">
            <p className="text-xl text-white font-bold" > Shadcn Note taking app </p>
          </div>
          <AddNote position={0} isNewNote={true} variant="link" />
        </div>
        <div className="flex flex-col flex-1">
          <NoteList>
            {noteState.map((item, index) => <NoteItem key={`${index}-note-list`} index={index} note={item} />)}
          </NoteList>
        </div>
      </div>
    </main>
  );
}

const HomeWrapper = () => (
  <StoreProvider>
    <Home />
  </StoreProvider>
)

export default HomeWrapper;
