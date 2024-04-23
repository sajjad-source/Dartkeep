import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import AddNoteInput from './AddNoteInput';
import NoteList from './NoteList';
import {
  addNote,
  deleteNote,
  editNote,
  resizeNote,
  dragNote,
} from '../services/datastore';
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';

/*

TODO: Authentication/Sign In?
TODO: Reminder Tab
TODO: Trash Tab
TODO: Z Index on Select

*/

function App() {
  const [notes, setNotes] = useState({});
  const [filteredNotes, setFilteredNotes] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editingNoteId, setEditingNoteId] = useState(null);
  const [maxZIndex, setMaxZIndex] = useState(100);

  useEffect(() => {
    const notesRef = firebase.database().ref('notes');
    const zIndexRef = firebase.database().ref('maxZIndex');

    notesRef.on('value', (snapshot) => {
      const newNoteState = snapshot.val();
      setNotes(newNoteState);
      setFilteredNotes(newNoteState);
    });

    zIndexRef.on('value', (snapshot) => {
      const maxValue = snapshot.val();
      if (maxValue) setMaxZIndex(maxValue);
    });

    return () => {
      notesRef.off();
      zIndexRef.off();
    };
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
    dragNote(id, newX, newY, maxZIndex);
    console.log(notes[id].zIndex);
  };

  const handleResize = (id, width, height) => {
    resizeNote(id, width, height);
  };

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredNotes(notes);
    } else {
      const filtered = Object.fromEntries(
        Object.entries(notes).filter(([id, note]) => note.title.toLowerCase().includes(searchTerm.toLowerCase())
          || note.text.toLowerCase().includes(searchTerm.toLowerCase())),
      );
      setFilteredNotes(filtered);
    }
  };

  return (
    <div className="flex min-h-screen text-light-gray">
      <Sidebar />
      <main className="flex-1">
        {isEditing && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-50 transition duration-500 ease-in-out">
            <AddNoteInput
              note={notes[editingNoteId]}
              handleSaveEdit={handleSaveEdit}
              handleCancelEdit={handleCancelEdit}
              handleAddNote={handleAddNote}
              isEditing
            />
          </div>
        )}
        <div className="w-auto">
          <SearchBar handleSearch={handleSearch} />
        </div>
        <AddNoteInput handleAddNote={handleAddNote} />
        <NoteList
          notes={filteredNotes}
          handleNoteEdit={handleEditNote}
          handleNoteDelete={handleDeleteNote}
          handleDrag={handleDrag}
          handleResize={handleResize}
        />
      </main>
    </div>
  );
}

export default App;
