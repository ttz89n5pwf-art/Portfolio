// Footer date, formatted like a drawing revision date
const footerDate = document.getElementById('footer-date');
if (footerDate) {
  const now = new Date();
  const formatted = now.toLocaleDateString('en-AU', { year: 'numeric', month: 'short', day: '2-digit' });
  footerDate.textContent = formatted.toUpperCase();
}
