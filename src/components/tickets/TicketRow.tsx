import { Link } from "react-router-dom";
import StatusBadge from "../ui/StatusBadge";

export default function TicketRow({ ticket }: any) {
  return (
    <tr className="border-t hover:bg-gray-50">
      <td className="p-4 w-[92px]">
        <Link
          className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm font-medium hover:bg-gray-200 transition"
          to={`/ticket/${ticket.ticket_id}`}
        >
          {ticket.ticket_id}
        </Link>
      </td>

      <td className="p-4">{ticket.customer_name}</td>
      <td className="p-4">{ticket.subject}</td>

      <td className="p-4">
        <StatusBadge status={ticket.status} />
      </td>

      <td className="p-4">
        {ticket.created_at
          ? new Date(ticket.created_at).toLocaleDateString()
          : "—"}
      </td>
    </tr>
  );
}

