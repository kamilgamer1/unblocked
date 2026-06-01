document.getElementById('searchInput').addEventListener('input', function () {
  const query = this.value.toLowerCase().trim();
  const sections = document.querySelectorAll('.letter-section');

  sections.forEach(section => {
    const buttons = section.querySelectorAll('input[type="button"]');
    let anyVisible = false;

    buttons.forEach(btn => {
      const label = btn.value.toLowerCase();
      const matches = query === '' || label.includes(query);
      btn.style.display = matches ? '' : 'none';
      if (matches) anyVisible = true;
    });
    section.style.display = anyVisible ? '' : 'none';
  });
});