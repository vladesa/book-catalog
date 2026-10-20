import { initHomePage } from '../pages/home.ts';
import { initThemeToggle } from '../components/theme.ts';

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initHomePage();
});