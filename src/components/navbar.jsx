import React, { useState } from 'react';
import {
  ChevronLast,
  ChevronFirst,
  Notebook,
  Bell,
  Users,
  Trash2,
} from 'lucide-react';
import SidebarItem from './sidebar_item';

export default function Navbar() {
  const [expanded, setExpanded] = useState(true);
  return (
    <aside className="h-screen overflow-y-auto">
      <nav className="flex h-full w-auto flex-col border-r-2 border-dark-blue bg-slate-900">
        <div className="flex items-center justify-end p-4">
          <button
            type="button"
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <ul className="flex-1 px-3">
          <SidebarItem
            icon={<Notebook size={20} />}
            text="Notes"
            expanded={expanded}
          />
          <SidebarItem
            icon={<Bell size={20} />}
            text="Reminder"
            expanded={expanded}
          />
          <SidebarItem
            icon={<Users size={20} />}
            text="Users"
            expanded={expanded}
          />
          <SidebarItem
            icon={<Trash2 size={20} />}
            text="Trash"
            expanded={expanded}
          />
        </ul>

        <div className="flex border-t border-dark-blue p-3">
          <img
            src="src/img/avatar.png"
            alt=""
            className="h-10 w-10 rounded-full"
          />
          <div
            className={`
              flex items-center justify-between
              overflow-hidden transition-all ${expanded ? 'ml-3 w-fit' : 'w-0'}
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
