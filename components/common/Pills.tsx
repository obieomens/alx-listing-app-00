interface PillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, active = false, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full border ${
      active ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
    }`}
  >
    {label}
  </button>
);

export default Pill;
