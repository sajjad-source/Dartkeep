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
        <div
          className="note m-2 flex flex-col justify-end rounded-lg bg-[#1E293B] p-5 shadow"
          style={{
            width: props.width,
            height: props.height,
            zIndex: props.zIndex,
          }}
        >
          <div className="note-handle -m-5 cursor-move rounded bg-[#111822] p-2">
            <h2 className="truncate text-lg font-semibold">
              {props.title ? props.title : 'Add Title'}
            </h2>
          </div>
          <div className="mt-6 flex-1 overflow-auto">
            <ReactMarkdown className="prose text-white">
              {props.text}
            </ReactMarkdown>
          </div>
          <div className="mt-4 flex justify-start space-x-2">
            <i onClick={onEditClick} className="cursor-pointer" role="none">
              <FontAwesomeIcon icon={faPenToSquare} />
            </i>
            <i onClick={onDeleteClick} className="cursor-pointer" role="none">
              <FontAwesomeIcon icon={faTrashCan} />
            </i>
          </div>
        </div>
      </Resizable>
    </Draggable>
  );
}

export default Note;
