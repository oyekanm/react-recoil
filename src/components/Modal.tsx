import  { useState } from "react";
import {  useRecoilState } from "recoil";

import Button from "../libs/Button";
import { NoteState } from "../state/atom/NoteState";

type Props = {
  close: () => void;
  visible: boolean;
};

function Modal(props: Props) {
  const [note, setNote] = useRecoilState<Note[]>(NoteState);
  const [noteText, setNoteText] = useState("");
  const [editText, setEditText] = useState("");

  const saveNote = async() => {
    const newNote =  {
      id: note[note?.length - 1].id + 1,
      text: noteText,
    }
       setNote((prev): any => [
          ...prev,
         newNote
        ])
        const allNotes:typeof newNote[] = JSON.parse(localStorage.getItem("noteList") || '{}')
        allNotes.push(newNote)
        localStorage.setItem("noteList", JSON.stringify(allNotes) )
        setNoteText("")
        props.close()
  };
  console.log(note);

  return (
    <section
      className={`fixed ${
        props.visible ? " top-0 " : "top-[100%]"
      } transition-all bottom-0 left-0 right-0 w-full h-full bg-[rgba(0,0,0,.5)]  backdrop-blur-[2px]`}
    >
      <div className="bg-white h-[80%] w-full absolute bottom-0 rounded-t-[50px] p-[3rem] ">
        <div className="flex items-center justify-between ">
          {noteText && <Button text="save" onPress={saveNote} />}
          {editText && <Button text="update" onPress={props.close} />}
          <span className="absolute right-[3rem] ">
            <Button text="close" onPress={props.close} />
          </span>
        </div>
        <article className="max-w-[500%] w-full sm:w-[80%] mx-auto h-[70%] bg-slate-500 overflow-hidden mt-[5rem]">
          <textarea
            placeholder="What's on your mind?"
            className="w-full h-full bg-transparent text-[1.6rem] focus-visible:outline-none p-4"
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
          ></textarea>
          {/* {editText &&  <textarea
            placeholder="What's on your mind?"
            className="w-full h-full bg-transparent text-[1.6rem] focus-visible:outline-none p-4"
            value={noteText}
            onChange={(e) => setEditText(e.target.value)}
          ></textarea>} */}
        </article>
      </div>
    </section>
  );
}

export default Modal;
