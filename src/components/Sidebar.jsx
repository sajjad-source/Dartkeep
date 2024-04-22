import React, { useState } from 'react';
import {
ChevronLast, ChevronFirst, Notebook, Bell, Users, Trash2,
} from 'lucide-react';
import SidebarItem from './SidebarItem';

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  return (
    <aside className="h-screen">
      <nav className="h-full w-auto flex flex-col bg-slate-900 border-r-2 border-dark-blue">
        <div className="p-4 flex justify-end items-center">

          <button type="button"
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <ul className="flex-1 px-3">
          <SidebarItem icon={<Notebook size={20} />} text="Notes" expanded={expanded} />
          <SidebarItem icon={<Bell size={20} />} text="Reminder" expanded={expanded} />
          <SidebarItem icon={<Users size={20} />} text="Users" expanded={expanded} />
          <SidebarItem icon={<Trash2 size={20} />} text="Trash" expanded={expanded} />
        </ul>

        <div className="border-t border-dark-blue flex p-3">
          <img
            src="src/img/avatar.png"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? 'w-fit ml-3' : 'w-0'}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold text-white">Sajjad C Kareem</h4>
              <span className="text-xs text-white">sajjadck04@gmail.com</span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}
