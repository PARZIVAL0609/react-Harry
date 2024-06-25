import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  //Get all notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3NDNhMGEyMzIwYjY3ZjM5MWQ5YWE3In0sImlhdCI6MTcxODg5ODIyMn0.Jz9t2LWUhC0q_5tHpoJ0MTyJLVIbww6jylkhnQAgmyg",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  //Add a note
  const addNote = async (title, description, tag) => {
    //todo api
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3NDNhMGEyMzIwYjY3ZjM5MWQ5YWE3In0sImlhdCI6MTcxODg5ODIyMn0.Jz9t2LWUhC0q_5tHpoJ0MTyJLVIbww6jylkhnQAgmyg",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
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
    console.log(json);
  };

  //Delete a note
  const deleteNote = async (id) => {
    //todo api
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3NDNhMGEyMzIwYjY3ZjM5MWQ5YWE3In0sImlhdCI6MTcxODg5ODIyMn0.Jz9t2LWUhC0q_5tHpoJ0MTyJLVIbww6jylkhnQAgmyg",
      },
    });
    const json = response.json();
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
    console.log(json);
  };

  //Edit a note
  const editNote = async (id, title, description, tag) => {
    //todo api
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3NDNhMGEyMzIwYjY3ZjM5MWQ5YWE3In0sImlhdCI6MTcxODg5ODIyMn0.Jz9t2LWUhC0q_5tHpoJ0MTyJLVIbww6jylkhnQAgmyg",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    //Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
    console.log(json);
  };

  return (
    <noteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote,getNotes }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
