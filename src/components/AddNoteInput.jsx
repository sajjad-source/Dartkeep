import React, { useState } from 'react';

function AddNoteInput({
 handleAddNote, handleSaveEdit, handleCancelEdit, note, isEditing = false,
}) {
  const [inputTitle, setTitle] = useState(note ? note.title : '');
  const [inputText, setText] = useState(note ? note.text : '');

  const handleSubmit = (e) => {
    e.preventDefault();

    const noteData = {
      title: inputTitle,
      text: inputText,
      x: note ? note.x : 100,
      y: note ? note.y : 100,
      zIndex: note ? note.zIndex : 1,
      width: note ? note.width : 200,
      height: note ? note.height : 200,
    };

    if (isEditing) {
      noteData.id = note.id;
      handleSaveEdit(noteData);
    } else {
      handleAddNote(noteData);
    }

    setTitle('');
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto my-8 p-4 bg-gray-800 shadow-lg rounded-lg">
      <input
        type="text"
        value={inputTitle}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full p-2 rounded-lg border border-gray-900 mb-4 bg-gray-800 text-white placeholder-white"
      />
      <textarea
        value={inputText}
        onChange={(e) => setText(e.target.value)}
        placeholder="Take a note..."
        className="block w-full p-2 rounded-lg border border-gray-900 mb-4 bg-gray-800 text-white placeholder-white"
      />
      <div className="flex justify-end space-x-4">
        <button type="submit"
          className="background-color: transparent; hover:bg-gray-900 text-gray-100 font-bold py-2 px-4 rounded"
        >
          {isEditing ? 'Save Changes' : 'Add Note'}
        </button>
        {isEditing && (
          <button type="button" onClick={handleCancelEdit} className="hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default AddNoteInput;
