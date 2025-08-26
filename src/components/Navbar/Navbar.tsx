import { Nav, Left, ThemeButton } from './Navbar.styles'; 

// import { ReactComponent as SunIcon } from '../../assets/icons/Sun_fill.svg';
// import { ReactComponent as MoonIcon } from '../../assets/icons/Moon_alt_fill.svg';
 
 interface NavbarProps { darkMode: boolean; setDarkMode: (val: boolean) => void; } 
 

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  return (
    <Nav>
      <Left>
        <h1>TMDB App</h1>
      </Left>
      <ThemeButton onClick={() => setDarkMode(!darkMode)}>
        {/* {darkMode ? <MoonIcon width={20} height={20} /> : <SunIcon width={20} height={20} />} */}
        {darkMode ? "🌙" : "☀️"}
      </ThemeButton>
    </Nav>
  );
}
