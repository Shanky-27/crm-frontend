import { Link, useLocation } from "react-router-dom";
import { Plus, Ticket } from "lucide-react";

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center">
            <Ticket size={18} />
          </div>
          <div className="leading-tight">
            <div className="font-semibold text-gray-900">Support CRM</div>
            <div className="text-xs text-gray-500">
              {location.pathname === "/create"
                ? "Create ticket"
                : location.pathname.startsWith("/ticket")
                  ? "Ticket detail"
                  : "Dashboard"}
            </div>
          </div>
        </div>

        <nav className="flex items-center gap-2">
          <Link
            to="/"
            className="px-3 py-2 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            Dashboard
          </Link>
          <Link
            to="/create"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-black text-white hover:bg-gray-900 transition"
          >
            <Plus size={16} />
            New Ticket
          </Link>
        </nav>
      </div>
    </header>
  );
}

