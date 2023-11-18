import { useRecoilValue } from "recoil";

import { NoteState } from "../state/atom/NoteState";

export default function NoteList() {
  const note = useRecoilValue<Note[]>(NoteState);
  // console.log(note);
  
  return (
    <section className="mt-[20px] grid sm:grid-cols-3 gap-[20px]">
      {note.map((note) => {
        return (
          <div key={note.id} className="bg-white rounded-[10px] shadow-[1px_2px_10px_2px_rgba(0,0,0,.5)] p-8 mb-[15px]">
            <p className="break-words">{note.text}</p>
          </div>
        );
      })}
    </section>
  );
}
