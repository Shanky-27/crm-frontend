import { useState } from "react";
import api from "../services/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Send } from "lucide-react";

export default function CreateTicket() {
  const nav = useNavigate();

  const [form, setForm] = useState({
    customer_name: "",
    customer_email: "",
    subject: "",
    description: "",
  });

  const submit = async (e: any) => {
    e.preventDefault();

    try {
      await api.post("/tickets", form);
      toast.success("Ticket created 🚀");
      nav("/");
    } catch {
      toast.error("Failed to create ticket");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">

      <form
        onSubmit={submit}
        className="bg-white p-8 rounded-2xl shadow-md w-[500px] space-y-4"
      >
        <h1 className="text-2xl font-bold mb-4">
          Create Ticket
        </h1>

        <input className="border p-3 w-full rounded-xl"
          placeholder="Customer Name"
          onChange={(e) =>
            setForm({ ...form, customer_name: e.target.value })
          }
        />

        <input className="border p-3 w-full rounded-xl"
          placeholder="Email"
          onChange={(e) =>
            setForm({ ...form, customer_email: e.target.value })
          }
        />

        <input className="border p-3 w-full rounded-xl"
          placeholder="Subject"
          onChange={(e) =>
            setForm({ ...form, subject: e.target.value })
          }
        />

        <textarea className="border p-3 w-full rounded-xl"
          placeholder="Description"
          rows={4}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        <button className="bg-black text-white w-full py-3 rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition">
          <Send size={16} />
          Create Ticket
        </button>
      </form>

    </div>
  );
}