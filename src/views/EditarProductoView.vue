<template>
  <div class="editar-producto">
    <h1>Editar Producto</h1>
    <FormProducto 
      :productoData="producto" 
      :esNuevoProducto="false" 
      @guardar="actualizarProducto" 
    />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import apiService from '../services/apiService';
import FormProducto from '../components/FormProducto.vue';


export default {
  components: {
    FormProducto
  },
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

    const actualizarProducto = async (productoActualizado) => {
      try {
        await apiService.actualizarProducto(route.params.id, productoActualizado);
        alert('Producto actualizado con éxito.');
        router.push('/');
      } catch (error) {
        console.error('Error al actualizar el producto:', error);
        alert('No se pudo actualizar el producto.');
      }
    };

    onMounted(cargarProducto);

    return {
      producto,
      actualizarProducto
    };
  }
};
</script>

<style scoped>
.editar-producto {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 15px; 
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}
</style>