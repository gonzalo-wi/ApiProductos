<template>
  <nav class="navbar">
    <div class="navbar-container">
      <router-link to="/" class="navbar-logo">Tienda Wiñazki</router-link>
      <ul class="navbar-menu">
        <li class="navbar-item">
          <router-link to="/" class="navbar-link">Inicio</router-link>
        </li>
        <li class="navbar-item">
          <router-link to="/crear-producto" class="navbar-link">Crear Producto</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
};
</script>

<style scoped>
.navbar {
  width: 100%; 
  position: fixed; 
  top: 0;
  left: 0;
  z-index: 1000; 
  background: linear-gradient(90deg, #028d30, #72ddad); 
  padding: 10px 20px;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-logo {
  font-size: 1.5em;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.navbar-menu {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.navbar-item {
  margin-left: 20px;
}

.navbar-link {
  color: white;
  text-decoration: none;
  font-size: 1em;
  transition: color 0.3s;
}

.navbar-link:hover {
  color: #d4f1e3;
}
</style>
