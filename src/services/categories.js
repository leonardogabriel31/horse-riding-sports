export const categories = [
    { name: 'ROPA', route: '/categories/clothesTotal' },
    // { name: 'ELECTRONICA', route: '/categories/electronics' },
    // { name: 'DEPORTES', route: '/categories/sports' },
    // Agrega más categorías aquí
  ];
  
  export const getRouteForCategory = (categoryName) => {
    const category = categories.find((cat) => cat.name === categoryName);
    return category ? category.route : `/categories/${categoryName.toLowerCase()}`;
  };