<template>
  <div class="detalle-producto" v-if="producto">
    <h1>{{ producto.title }}</h1>
    <img :src="producto.image" :alt="producto.title" />
    <p><strong>Precio:</strong> ${{ producto.price }}</p>
    <p><strong>Descripción:</strong> {{ producto.description }}</p>
    <p><strong>Categoría:</strong> {{ producto.category }}</p>
    <button @click="volver">Volver</button>
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
  max-width: 400px; 
  margin: 15px auto; 
  padding: 15px; 
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.detalle-producto img {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px; 
}

button {
  padding: 8px 12px; 
  font-size: 0.9em; 
  border: none;
  border-radius: 4px;
  background-color: #42b983;
  color: white;
  cursor: pointer;
}

button:hover {
  opacity: 0.9;
}
</style>