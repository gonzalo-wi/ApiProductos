<template>
  <div class="crear-producto">
    <h1>Crear Producto</h1>
    <FormProducto 
      :esNuevoProducto="true" 
      @guardar="crearProducto" 
      @cancelar="volver" 
    />
  </div>
</template>

<script>
import FormProducto from '../components/FormProducto.vue';
import apiService from '../services/apiService';
import { useRouter } from 'vue-router';

export default {
  components: {
    FormProducto
  },
  setup() {
    const router = useRouter();

    const crearProducto = async (nuevoProducto) => {
      try {
        await apiService.crearProducto(nuevoProducto);
        alert('Producto creado con éxito');
        router.push('/');
      } catch (err) {
        console.error('Error al crear el producto:', err);
        alert('No se pudo crear el producto.');
      }
    };

    const volver = () => {
      router.push('/');
    };

    return {
      crearProducto,
      volver
    };
  }
};
</script>

<style scoped>
.crear-producto {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: black;
}
</style>