import TicketRow from "./TicketRow";

export default function TicketTable({ tickets }: any) {
  return (
    <div className="bg-white border rounded-2xl overflow-hidden shadow-sm">
      <table className="w-full">
        <thead className="bg-gray-50 text-left">
          <tr className="text-sm text-gray-600">
            <th className="p-4 font-semibold w-[92px]">ID</th>
            <th className="p-4 font-semibold">Customer</th>
            <th className="p-4 font-semibold">Subject</th>
            <th className="p-4 font-semibold">Status</th>
            <th className="p-4 font-semibold w-[160px]">Date</th>
          </tr>
        </thead>

        <tbody>
          {tickets.map((t: any) => (
            <TicketRow key={t.ticket_id} ticket={t} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

