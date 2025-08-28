import { Input, SearchButton, SearchIcon, Wrapper } from './SearchInput.styles';

interface SearchInputProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  onSearch?: () => void;
}

export default function SearchInput({
  value,
  onChange,
  placeholder,
  onSearch,
}: SearchInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSearch) {
      onSearch();
    }
  };

  return (
    <Wrapper>
      <Input
        type="text"
        placeholder={placeholder || 'Pesquise por filmes'}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <SearchButton type="button" onClick={onSearch}>
        <SearchIcon />
      </SearchButton>
    </Wrapper>
  );
}
