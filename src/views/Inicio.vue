<template>
  <div class="inicio">
    <h1>Lista de Productos</h1>
    <div v-if="cargando" class="cargando">
      Cargando productos...
    </div>
    <div v-if="error" class="error">
      <p>Error al cargar los productos: {{ error.message }}</p>
      <p>Por favor, inténtalo de nuevo más tarde.</p>
    </div>
    <div v-if="!cargando && !error" class="lista-productos">
      <CardProducto 
        v-for="producto in productos" 
        :key="producto.id" 
        :producto="producto"
        @eliminar-producto="confirmarEliminacion"
      />
    </div>
  </div>
</template>

<script>
import apiService from '../services/apiService';
import CardProducto from '../components/CardProducto.vue';


export default {
  components: {
    CardProducto,
  },
  data() {
    return {
      productos: [],
      cargando: true,
      error: null
    };
  },
  created() {
    this.cargarProductos();
  },
  methods: {
    async cargarProductos() {
      this.cargando = true;
      this.error = null;
      try {
        const response = await apiService.obtenerProductos();
        this.productos = response.data;
      } catch (err) {
        this.error = err;
      } finally {
        this.cargando = false;
      }
    },
    confirmarEliminacion(idProducto) {
      if (window.confirm('¿Estás seguro de que quieres eliminar este producto?')) {
        this.eliminarProducto(idProducto);
      }
    },
    async eliminarProducto(idProducto) {
      try {
        await apiService.eliminarProducto(idProducto);
        this.productos = this.productos.filter(p => p.id !== idProducto);
        alert('Producto eliminado con éxito.');
      } catch (error) {
        console.error('Error al eliminar el producto:', error);
        alert('Error al eliminar el producto.');
      }
    }
  }
};
</script>

<style scoped>
.inicio {
  padding: 20px;
}

.lista-productos {
  display: flex;
  flex-wrap: wrap;
  gap: 16px; 
  justify-content: center; 
}

.cargando, .error {
  text-align: center;
  padding: 20px;
  font-size: 1.2em;
}

.error {
  color: red;
}
</style>