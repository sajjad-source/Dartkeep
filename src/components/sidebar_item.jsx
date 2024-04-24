import React from 'react';

function SidebarItem({ icon, text, expanded }) {
  return (
    <li
      className=" group relative my-1 flex cursor-pointer items-center
        rounded-md bg-slate-900 px-3
        py-2 font-medium text-white
        transition-colors hover:bg-dark-blue"
    >
      {icon}
      <span
        className={`overflow-hidden text-white transition-all ${expanded ? 'ml-3 w-52' : 'w-0'}`}
      >
        {text}
      </span>

      {!expanded && (
        <div
          className={`
          invisible absolute left-full ml-6 -translate-x-3 rounded-md bg-slate-900
          px-2 py-1 text-sm opacity-20 transition-all
          group-hover:visible group-hover:translate-x-0 group-hover:opacity-100
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
}

export default SidebarItem;
