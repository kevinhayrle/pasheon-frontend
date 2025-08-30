document.addEventListener('DOMContentLoaded', () => {
  const headerHTML = `
    <header class="navbar">
      <div class="nav-left">
        <i class="fas fa-bars" onclick="toggleCategoryMenu()"></i>
        <div id="category-menu" class="category-dropdown" style="display: none;"></div>
      </div>
      <div class="nav-center">
        <div class="logo">
          <img src="log.png" alt="Pasheon Logo" class="log-img">
        </div>
      </div>
      <div class="nav-right">
        <i class="fas fa-shopping-cart" onclick="window.location.href='cart.html'"></i>
      </div>
    </header>
  `;

  document.body.insertAdjacentHTML('afterbegin', headerHTML);

  
  fetch('https://pasheon-backend-zgz5.onrender.com/api/products/categories')
    .then(res => res.json())
    .then(categories => {
      const menu = document.getElementById('category-menu');

 
      menu.innerHTML = `
        <a href="index.html">Home</a>
        <a href="contact.html">Contact Us</a>
        <hr/>
      `;

      categories.forEach(cat => {
        const item = document.createElement('a');
        item.href = `category.html?cat=${encodeURIComponent(cat)}`;
        item.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
        item.classList.add('category-link');
        menu.appendChild(item);
      });
    })
    .catch(err => console.error('Error loading categories:', err));
});


function toggleCategoryMenu() {
  const menu = document.getElementById('category-menu');
  if (menu) {
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  }
}