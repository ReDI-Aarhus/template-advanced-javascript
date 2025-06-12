// ThemeToggler.js
import { useTheme } from '../contexts/ThemeContext';

function ThemeToggler() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ThemeToggler;
