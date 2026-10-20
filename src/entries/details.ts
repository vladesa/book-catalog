import { initDetailsPage } from '../pages/detailsPage.ts';
import { initThemeToggle } from '../components/theme.ts';

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initDetailsPage();
});