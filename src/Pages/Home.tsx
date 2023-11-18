import { useState } from "react";
import { useRecoilState } from "recoil";

import { NoteState } from "../state/atom/NoteState";
import Modal from "../components/Modal";
import NoteList from "../components/NoteList";

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [note] = useRecoilState(NoteState)
  console.log(note);


  return (
    <section className="p-4 sm:p-8">
      <div className="flex justify-between items-center">
        <p className="text-[2rem] font-bold ">Recoil NotePad</p>
        <span onClick={()=> setVisible(!visible)} className="cursor-pointer text-[1.8rem] font-medium text-white bg-slate-500 p-4 px-8 rounded-[10px] shadow-sm">
          add a note
        </span>
      </div>
      <NoteList />
      <Modal close={()=> setVisible(!visible)} visible={visible}/>
    </section>
  );
}
