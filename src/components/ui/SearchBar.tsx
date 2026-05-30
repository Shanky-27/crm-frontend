export default function SearchBar({ value, onChange }: any) {
  return (
    <div className="relative w-full">
      <input
        value={value}
        onChange={onChange}
        placeholder="Search tickets, users, email..."
        className="w-full px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>
  );
}