import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import toast from "react-hot-toast";
import { CheckCircle, MessageSquare } from "lucide-react";

export default function TicketDetail() {
  const { ticketId } = useParams();
  const [ticket, setTicket] = useState<any>(null);
  const [status, setStatus] = useState("");
  const [note, setNote] = useState("");

  const load = async () => {
    const res = await api.get(`/tickets/${ticketId}`);
    setTicket(res.data);
    setStatus(res.data.status);
  };

  useEffect(() => {
    load();
  }, []);

  const update = async () => {
    await api.put(`/tickets/${ticketId}`, {
      status,
      note,
    });

    toast.success("Updated successfully");
    setNote("");
    load();
  };

  if (!ticket) return <div className="p-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-8">

      <div className="bg-white p-6 rounded-2xl shadow-md max-w-3xl mx-auto">

        <h1 className="text-2xl font-bold mb-2">
          {ticket.ticket_id}
        </h1>

        <p className="text-gray-600 mb-4">
          {ticket.subject}
        </p>

        <div className="border rounded-xl p-4 mb-4">
          <p><b>Name:</b> {ticket.customer_name}</p>
          <p><b>Email:</b> {ticket.customer_email}</p>
        </div>

        {/* STATUS */}
        <select
          className="border p-2 rounded-xl w-full mb-4"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Open</option>
          <option>In Progress</option>
          <option>Closed</option>
        </select>

        {/* NOTE */}
        <textarea
          className="border p-3 w-full rounded-xl mb-4"
          placeholder="Add internal note..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />

        <button
          onClick={update}
          className="bg-black text-white w-full py-3 rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition"
        >
          <CheckCircle size={16} />
          Update Ticket
        </button>

        {/* NOTES */}
        <div className="mt-6">
          <h2 className="font-bold flex items-center gap-2">
            <MessageSquare size={16} />
            Notes
          </h2>

          {ticket.notes?.map((n: any, i: number) => (
            <div key={i} className="border p-3 rounded-xl mt-2 bg-gray-50">
              {n.note_text}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}