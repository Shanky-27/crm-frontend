interface Props {
  title: string;
  value: number;
  color: string;
}

export default function StatsCard({ title, value, color }: Props) {
  return (
    <div className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition">
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className={`text-3xl font-bold mt-2 ${color}`}>
        {value}
      </h2>
    </div>
  );
}