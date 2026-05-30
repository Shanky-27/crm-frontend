import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Plus } from "lucide-react";

export default function Sidebar() {
  const location = useLocation();

  const items = [
    { to: "/", label: "Dashboard", icon: LayoutDashboard },
    { to: "/create", label: "Create", icon: Plus },
  ];

  return (
    <aside className="hidden md:block w-64 border-r border-gray-200 bg-white">
      <div className="p-4">
        <div className="text-xs font-semibold text-gray-500 mb-3">Navigation</div>
        <div className="space-y-1">
          {items.map((item) => {
            const Icon = item.icon;
            const active = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={
                  active
                    ? "flex items-center gap-3 px-3 py-2 rounded-xl bg-black text-white text-sm font-medium"
                    : "flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100"
                }
              >
                <Icon size={16} />
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

