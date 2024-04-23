import React, { useState } from 'react';

function AddNoteInput({
  handleAddNote,
  handleSaveEdit,
  handleCancelEdit,
  note,
  isEditing = false,
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
    <form
      onSubmit={handleSubmit}
      className="mx-auto my-8 max-w-lg rounded-lg bg-gray-800 p-4 shadow-lg"
    >
      <input
        type="text"
        value={inputTitle}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="mb-4 w-full rounded-lg border border-gray-900 bg-gray-800 p-2 text-white placeholder-white"
      />
      <textarea
        value={inputText}
        onChange={(e) => setText(e.target.value)}
        placeholder="Take a note..."
        className="mb-4 block w-full rounded-lg border border-gray-900 bg-gray-800 p-2 text-white placeholder-white"
      />
      <div className="flex justify-end space-x-4">
        <button
          type="submit"
          className="background-color: transparent; rounded px-4 py-2 font-bold text-gray-100 hover:bg-gray-900"
        >
          {isEditing ? 'Save Changes' : 'Add Note'}
        </button>
        {isEditing && (
          <button
            type="button"
            onClick={handleCancelEdit}
            className="rounded px-4 py-2 font-bold text-white hover:bg-gray-900"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default AddNoteInput;
