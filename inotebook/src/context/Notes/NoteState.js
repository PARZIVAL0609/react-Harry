import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "66747220be2ee483da2fd4a9",
      user: "66743a0a2320b67f391d9aa7",
      title: "My title",
      description: "Please wake up early",
      tag: "Personal",
      date: "2024-06-20T18:17:04.244Z",
      __v: 0,
    },
    {
      _id: "6676f2b4f464090fb3d53953",
      user: "66743a0a2320b67f391d9aa7",
      title: "My title",
      description: "Please wake up early",
      tag: "Personal",
      date: "2024-06-22T15:50:12.353Z",
      __v: 0,
    },
    {
      _id: "66747220be2ee483da2fd3a9",
      user: "66743a0a2320b67f391d9aa7",
      title: "My title",
      description: "Please wake up early",
      tag: "Personal",
      date: "2024-06-20T18:17:04.244Z",
      __v: 0,
    },
    {
      _id: "6676f2b4f464090f33d53953",
      user: "66743a0a2320b67f391d9aa7",
      title: "My title",
      description: "Please wake up early",
      tag: "Personal",
      date: "2024-06-22T15:50:12.353Z",
      __v: 0,
    },
    {
      _id: "66747220be23e483da2fd4a9",
      user: "66743a0a2320b67f391d9aa7",
      title: "My title",
      description: "Please wake up early",
      tag: "Personal",
      date: "2024-06-20T18:17:04.244Z",
      __v: 0,
    },
    {
      _id: "6676f234f464090fb3d53953",
      user: "66743a0a2320b67f391d9aa7",
      title: "My title",
      description: "Please wake up early",
      tag: "Personal",
      date: "2024-06-22T15:50:12.353Z",
      __v: 0,
    },
    {
      _id: "66347220be2ee483da2fd4a9",
      user: "66743a0a2320b67f391d9aa7",
      title: "My title",
      description: "Please wake up early",
      tag: "Personal",
      date: "2024-06-20T18:17:04.244Z",
      __v: 0,
    },
    {
      _id: "3676f2b4f464090fb3d53953",
      user: "66743a0a2320b67f391d9aa7",
      title: "My title",
      description: "Please wake up early",
      tag: "Personal",
      date: "2024-06-22T15:50:12.353Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  //Add a note
  const addNote = (title, description, tag) => {
    //todo api
    const note = {
      _id: "3676f2b3f464093fb3d53953",
      user: "66743a0a2320b67f391d9aa7",
      title: title,
      description: description,
      tag: tag,
      date: "2024-06-22T15:50:12.353Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //Delete a note
  const deleteNote = (id) => {
    //todo api
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };

  //Edit a note
  const editNote = (id, describedby, tag) => {
    
  };

  return (
    <noteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
