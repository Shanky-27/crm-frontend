import { useEffect, useState } from "react";
import api from "../services/api";
import TicketTable from "../components/tickets/TicketTable";
import StatsCard from "../components/ui/StatsCard";
import SearchBar from "../components/ui/SearchBar";
import Loader from "../components/ui/Loader";
import EmptyState from "../components/ui/EmptyState";
import { Plus, Ticket } from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [tickets, setTickets] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true);
    const res = await api.get("/tickets", {
      params: { search, status },
    });
    setTickets(res.data);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, [search, status]);

  const total = tickets.length;
  const open = tickets.filter(t => t.status === "Open").length;
  const progress = tickets.filter(t => t.status === "In Progress").length;
  const closed = tickets.filter(t => t.status === "Closed").length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          <Ticket className="w-6 h-6" />
          <h1 className="text-2xl font-bold">Support CRM</h1>
        </div>

        <Link
          to="/create"
          className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-xl hover:scale-105 transition"
        >
          <Plus size={16} />
          New Ticket
        </Link>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <StatsCard title="Total Tickets" value={total} color={""} />
        <StatsCard title="Open" value={open} color={""} />
        <StatsCard title="In Progress" value={progress} color={""} />
        <StatsCard title="Closed" value={closed} color={""} />
      </div>

      {/* SEARCH + FILTER */}
      <div className="flex gap-4 mb-6">
        <SearchBar
          value={search}
          onChange={(e: any) => setSearch(e.target.value)}
        />

        <select
          className="border rounded-xl px-3 bg-white"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">All</option>
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Closed">Closed</option>
        </select>
      </div>

      {/* CONTENT */}
      {loading ? (
        <Loader />
      ) : tickets.length === 0 ? (
        <EmptyState />
      ) : (
        <TicketTable tickets={tickets} />
      )}
    </div>
  );
}