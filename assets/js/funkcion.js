fetch('pr.json')
  .then(response => response.json())
  .then(data => {
    let container = document.getElementById('product-container');
    data.forEach(product => {
      let productElement = document.createElement('div');
      productElement.innerHTML = `
        <h2>${product.name}</h2>
        <p>${product.price}</p>
        <p>${product.description}</p>
      `;
      container.appendChild(productElement);
    });
  })
  .catch(error => console.error('Error loading data:', error));
