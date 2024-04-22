import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: 'AIzaSyD4tgOVyfsCqbsdAYlTGR7_gnnUyMACsbM',
  authDomain: 'react-notes-app-f2cd8.firebaseapp.com',
  databaseURL: 'https://react-notes-app-f2cd8-default-rtdb.firebaseio.com',
  projectId: 'react-notes-app-f2cd8',
  storageBucket: 'react-notes-app-f2cd8.appspot.com',
  messagingSenderId: '391225066329',
  appId: '1:391225066329:web:6a973e4a0eaaabcbff0248',
  measurementId: 'G-L2P57T49EX',
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export const addNote = (newNote) => {
  const noteRef = database.ref('notes').push();
  const newNoteWithId = { ...newNote, id: noteRef.key };
  noteRef.set(newNoteWithId);
};

export const editNote = (updatedNote) => {
  const { id } = updatedNote;
  database.ref('notes').child(id).update(updatedNote);
};

export const deleteNote = (id) => {
  database.ref('notes').child(id).remove();
};

export const dragNote = (id, newX, newY) => {
  database.ref('notes').child(id).update({ x: newX });
  database.ref('notes').child(id).update({ y: newY });
};

export const resizeNote = (id, newWidth, newHeight) => {
  database.ref('notes').child(id).update({ width: newWidth });
  database.ref('notes').child(id).update({ height: newHeight });
};
