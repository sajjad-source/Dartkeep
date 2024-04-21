import React, { useState } from 'react';

function AddNoteInput({
 handleAddNote, handleSaveEdit, handleCancelEdit, note, isEditing = false,
}) {
  const [inputTitle, setTitle] = useState(note ? note.title : '');
  const [inputText, setText] = useState(note ? note.text : '');

  const handleSubmit = (e) => {
    e.preventDefault();

    const noteData = {
      id: note ? note.id : Math.random(),
      title: inputTitle,
      text: inputText,
      x: note ? note.x : 100,
      y: note ? note.y : 100,
      zIndex: note ? note.zIndex : 1,
      width: note ? note.width : 200,
      height: note ? note.height : 200,
    };

    if (isEditing) {
      handleSaveEdit(noteData);
    } else {
      handleAddNote(noteData);
    }

    setTitle('');
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={inputTitle}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title"
        className="block w-full p-2 border border-gray-300 rounded"
      />
      <textarea
        value={inputText}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter note text"
        className="block w-full p-2 border border-gray-300 rounded"
      />
      <div className="flex justify-end space-x-4">
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {isEditing ? 'Save Changes' : 'Add Note'}
        </button>
        {isEditing && (
          <button type="button" onClick={handleCancelEdit} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default AddNoteInput;
