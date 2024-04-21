import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import Draggable from 'react-draggable';
import { Resizable } from 'react-resizable';
import 'react-resizable/css/styles.css';
import ReactMarkdown from 'react-markdown';

function Note(props) {
  const onDeleteClick = () => props.handleNoteDelete(props.id);
  const onEditClick = () => props.handleNoteEdit(props.id);

  return (
    <Draggable
      key={props.id}
      handle=".note-handle"
      defaultPosition={{ x: props.x || 0, y: props.y || 0 }}
      position={{ x: props.x, y: props.y }}
      onDrag={(e, data) => props.handleDrag(props.id, data.x, data.y)}
    >
      <Resizable
        width={props.width}
        height={props.height}
        onResize={(event, { size }) => props.handleResize(props.id, size.width, size.height)}
        minConstraints={[200, 200]}
      >
        <div className="note bg-white rounded-lg shadow p-4" style={{ width: props.width, height: props.height }}>
          <h2 className="font-semibold text-lg note-handle cursor-move">
            {props.title}
          </h2>
          <ReactMarkdown className="prose text-gray-700">{props.text}</ReactMarkdown>
          <i onClick={onDeleteClick} className="cursor-pointer" role="none">
            <FontAwesomeIcon icon={faTrashCan} />
          </i>
          <i onClick={onEditClick} className="cursor-pointer" role="none">
            <FontAwesomeIcon icon={faPenToSquare} />
          </i>
        </div>
      </Resizable>
    </Draggable>
  );
}

export default Note;
