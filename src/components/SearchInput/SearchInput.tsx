import { Input } from "./SearchInput.styles";

interface SearchInputProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
}

export default function SearchInput({ value, onChange, placeholder }: SearchInputProps) {
  return (
    <Input
      type="text"
      placeholder={placeholder || "Pesquisar filme..."}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
