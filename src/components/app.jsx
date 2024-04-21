import React, { useState } from 'react';
import { produce } from 'immer';
import AddNoteInput from './add_note_input';
import NoteList from './note_list';

function App() {
  const [notes, setNotes] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editingNoteId, setEditingNoteId] = useState(null);

  const handleAddNote = (newNote) => {
    const { id } = newNote;
    setNotes(
      produce((draft) => {
        draft[id] = newNote;
      }),
    );
  };

  const handleDeleteNote = (id) => {
    setNotes(
      produce((draft) => {
        delete draft[id];
      }),
    );
  };

  const handleEditNote = (id) => {
    setIsEditing(true);
    setEditingNoteId(id);
  };

  const handleSaveEdit = (updatedNote) => {
    const { id } = updatedNote;
    setNotes(
      produce((draft) => {
        draft[id] = updatedNote;
      }),
    );
    setIsEditing(false);
    setEditingNoteId(null);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditingNoteId(null);
  };

  const handleDrag = (id, newX, newY) => {
    setNotes(
      produce((draft) => {
        if (draft[id]) {
          draft[id].x = newX;
          draft[id].y = newY;
        }
      }),
    );
  };

  const handleResize = (id, width, height) => {
    setNotes(
      produce((draft) => {
        if (draft[id]) {
          draft[id].width = width;
          draft[id].height = height;
        }
      }),
    );
  };

  return (
    <div className="relative">
      {isEditing && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-5 rounded-lg">
            <AddNoteInput
              note={notes[editingNoteId]}
              handleSaveEdit={handleSaveEdit}
              handleCancelEdit={handleCancelEdit}
              handleAddNote={handleAddNote}
              isEditing
            />
          </div>
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
    </div>
  );
}

export default App;
