import React from 'react';
import Note from './note';

function NoteList({
  notes,
  handleNoteDelete,
  handleDrag,
  handleResize,
  handleNoteEdit,
}) {
  const entries = notes ? Object.entries(notes) : [];

  return (
    <div className="note-list grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {entries.map(([id, note]) => (
        <Note
          key={id}
          id={id}
          title={note.title}
          text={note.text}
          x={note.x}
          y={note.y}
          zIndex={note.zIndex}
          width={note.width}
          height={note.height}
          handleNoteDelete={() => handleNoteDelete(id)}
          handleDrag={handleDrag}
          handleResize={handleResize}
          handleNoteEdit={handleNoteEdit}
        />
      ))}
    </div>
  );
}

export default NoteList;
