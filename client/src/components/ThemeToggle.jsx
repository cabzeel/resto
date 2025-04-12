import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from './ThemeContext';

export const ThemeToggle = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="theme-toggle"
    >
      {theme === 'light' ? (
        <FiMoon size={20} className="icon moon-icon" />
      ) : (
        <FiSun size={20} className="icon sun-icon" />
      )}
    </button>
  )
}