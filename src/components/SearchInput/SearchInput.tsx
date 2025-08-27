import { Input, SearchIcon, Wrapper } from './SearchInput.styles';

interface SearchInputProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
}

export default function SearchInput({
  value,
  onChange,
  placeholder,
}: SearchInputProps) {
  return (
    <Wrapper>
      <Input
        type="text"
        placeholder={placeholder || 'Pesquise por filmes'}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <SearchIcon />
    </Wrapper>
  );
}
