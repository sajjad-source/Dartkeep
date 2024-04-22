import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import AddNoteInput from './AddNoteInput';
import NoteList from './NoteList';
import {
 addNote, deleteNote, editNote, resizeNote, dragNote,
} from '../services/datastore';
import Sidebar from './Sidebar';
import Header from './Header';

/*

TODO: Authentication/Sign In?
TODO: Reminder Tab
TODO: Trash Tab
TODO: Z Index on Select

*/

function App() {
  const [notes, setNotes] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editingNoteId, setEditingNoteId] = useState(null);

  useEffect(() => {
    firebase.database().ref('notes').on('value', (snapshot) => {
      const newNoteState = snapshot.val();
      setNotes(newNoteState);
    });
  }, []);

  const handleAddNote = (note) => {
    addNote(note);
  };

  const handleDeleteNote = (id) => {
    deleteNote(id);
  };

  const handleEditNote = (id) => {
    setIsEditing(true);
    setEditingNoteId(id);
  };

  const handleSaveEdit = (note) => {
    editNote(note);
    setIsEditing(false);
    setEditingNoteId(null);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditingNoteId(null);
  };

  const handleDrag = (id, newX, newY) => {
    dragNote(id, newX, newY);
  };

  const handleResize = (id, width, height) => {
    resizeNote(id, width, height);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen text-light-gray flex">
        <Sidebar />
        <main className="flex-1 p-5">
          {isEditing && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <AddNoteInput
              note={notes[editingNoteId]}
              handleSaveEdit={handleSaveEdit}
              handleCancelEdit={handleCancelEdit}
              handleAddNote={handleAddNote}
              isEditing
            />
          </div>
        )}
          <AddNoteInput handleAddNote={handleAddNote} />
          <NoteList
            notes={notes}
            handleNoteEdit={handleEditNote}
            handleNoteDelete={handleDeleteNote}
            handleDrag={handleDrag}
            handleResize={handleResize}
          />
        </main>
      </div>
    </>

  );
}

export default App;
