export function initThemeToggle(): void {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  
  const currentTheme = localStorage.getItem('app_theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);

 
  toggleBtn.addEventListener('click', () => {
   
    const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    
    
    document.documentElement.setAttribute('data-theme', newTheme);
    
   
    localStorage.setItem('app_theme', newTheme);
  });
}