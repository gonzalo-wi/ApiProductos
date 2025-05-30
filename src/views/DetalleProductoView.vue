<template>
  <div class="detalle-producto" v-if="producto">
    <img :src="producto.image" :alt="producto.title" class="producto-img" />
    <h1 class="producto-titulo">{{ producto.title }}</h1>
    <p class="producto-precio">$ {{ producto.price }}</p>
    <p class="producto-descripcion">{{ producto.description }}</p>
    <span class="producto-categoria">{{ producto.category }}</span>
    <button @click="volver" class="btn-volver">Volver</button>
  </div>
  <div v-else>
    <p>Cargando producto...</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import apiService from '../services/apiService';

export default {
  setup() {
    const producto = ref(null);
    const route = useRoute();
    const router = useRouter();

    const cargarProducto = async () => {
      try {
        const response = await apiService.obtenerProductoPorId(route.params.id);
        producto.value = response.data;
      } catch (error) {
        console.error('Error al cargar el producto:', error);
        alert('No se pudo cargar el producto.');
        router.push('/');
      }
    };

    const volver = () => {
      router.push('/');
    };

    onMounted(cargarProducto);

    return {
      producto,
      volver
    };
  }
};
</script>

<style scoped>
.detalle-producto {
  max-width: 320px;
  margin: 30px auto;
  padding: 20px;
  border-radius: 16px;
  background-color: #ffffff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  text-align: left;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.producto-img {
  width: 100%;
  border-radius: 12px;
  margin-bottom: 15px;
  object-fit: contain;
}

.producto-titulo {
  font-size: 1.3em;
  font-weight: bold;
  margin: 0 0 8px;
}

.producto-precio {
  font-size: 1.1em;
  color: #42b983;
  margin: 0 0 10px;
  font-weight: 600;
}

.producto-descripcion {
  font-size: 0.95em;
  margin-bottom: 10px;
  color: #555;
}

.producto-categoria {
  display: inline-block;
  padding: 4px 8px;
  background-color: #eee;
  color: #333;
  border-radius: 8px;
  font-size: 0.8em;
  margin-bottom: 15px;
}

.btn-volver {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 0.95em;
  border: none;
  border-radius: 6px;
  background-color: #42b983;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-volver:hover {
  background-color: #369f72;
}
</style>