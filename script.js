  document.querySelectorAll('.dropdown-menu .dropdown-item').forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      document.getElementById('languageDropdown').textContent = this.textContent;
    });
  });