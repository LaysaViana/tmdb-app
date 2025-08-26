import { useState } from "react";
import { Button, Dropdown } from "./FilterButton.style";

interface FilterButtonProps {
  value: string;
  onChange: (val: string) => void;
}

export default function FilterButton({ value, onChange }: FilterButtonProps) {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div>
      <Button onClick={() => setShowFilters((prev) => !prev)}>🎛 Filtros</Button>
      {showFilters && (
        <Dropdown value={value} onChange={(e) => onChange(e.target.value)}>
          <option value="">Todos os gêneros</option>
          <option value="28">Ação</option>
          <option value="35">Comédia</option>
          <option value="18">Drama</option>
          <option value="27">Terror</option>
          <option value="878">Ficção Científica</option>
        </Dropdown>
      )}
    </div>
  );
}
