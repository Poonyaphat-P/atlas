import { SearchIcon } from "lucide-react";

type SearchBarProps = {
  onFocus?: () => void;
  className?: string;
};

export default function SearchBar({ onFocus, className } : SearchBarProps) {
  return (
    <div className={`relative ${className}`}>
      <SearchIcon strokeWidth={1} className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
      <input
        type="text"
        placeholder="Search"
        onFocus={onFocus}
        className="w-full bg-gray-100 rounded-full pl-9 pr-4 py-2 text-md font-semibold outline-none text-gray-500"
      />
    </div>
  )
}