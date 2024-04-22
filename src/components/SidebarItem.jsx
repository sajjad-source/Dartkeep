import React from 'react';

function SidebarItem({
 icon, text, expanded,
}) {
  return (
    <li
      className=" relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group text-white
        bg-slate-900 hover:bg-dark-blue"
    >
      {icon}
      <span
        className={`text-white overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'}`}
      >
        {text}
      </span>

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6 text-sm
          bg-slate-900 invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
}

export default SidebarItem;
