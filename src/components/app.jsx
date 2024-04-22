import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import AddNoteInput from './add_note_input';
import NoteList from './note_list';
import {
 addNote, deleteNote, editNote, resizeNote, dragNote,
} from '../services/datastore';

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
    <div className="min-h-screen text-light-gray">
      <div className="flex">
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
    </div>
  );
}

export default App;
