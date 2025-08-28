import { Nav, Left, ThemeButton, LogoWrapper } from './Navbar.styles';

import SunIcon from '../../assets/icons/Sun_fill.svg';
import MoonIcon from '../../assets/icons/Moon_alt_fill.svg';
import LogoIcon from '../../assets/icons/logo-cubos.svg';
import { useNavigate } from 'react-router-dom';
import { useFiltersContext } from '../../contexts/useFiltersContext';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const navigate = useNavigate();
  const { resetFilters } = useFiltersContext();

  return (
    <Nav>
      <Left>
        <LogoWrapper
          onClick={() => {
            navigate('/');
            resetFilters();
          }}
        >
          <LogoIcon />
        </LogoWrapper>
        <h1>Movies</h1>
      </Left>
      <ThemeButton onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <SunIcon /> : <MoonIcon />}
      </ThemeButton>
    </Nav>
  );
}
