<template>
  <div class="card-producto">
    <img :src="producto.image" :alt="producto.title" />
    <h3>{{ producto.title }}</h3>
    <p class="precio">${{ producto.price }}</p>
    <p class="descripcion">{{ producto.description }}</p>
    <div class="acciones">
      <router-link :to="{ name: 'DetalleProducto', params: { id: producto.id } }">Ver Detalles</router-link>
      <router-link :to="{ name: 'EditarProducto', params: { id: producto.id } }">Editar</router-link>
      <button @click="eliminarProducto(producto.id)" class="delete">Eliminar</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    producto: {
      type: Object,
      required: true
    }
  },
  methods: {
    async eliminarProducto(id) {
      try {
        await this.$emit('eliminar-producto', id);
      } catch (err) {
        console.error('Error al eliminar el producto:', err);
      }
    }
  }
};
</script>

<style scoped>
.card-producto {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  text-align: center;
  max-width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
}

.card-producto img {
  max-width: 100%;
  height: auto;
  max-height: 150px;
  object-fit: contain;
}

.card-producto h3 {
  margin: 8px 0;
}

.precio {
  color: green;
  font-weight: bold;
}

.descripcion {
  font-size: 0.9em;
  color: #282525;
  height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
}

.acciones button, .acciones a {
  margin-top: 10px;
  margin-right: 5px;
  padding: 8px 12px;
  border: none;
  background-color: #42b983;
  color: white;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  font-size: 0.9em;
}

.acciones button:hover, .acciones a:hover {
  background-color: #36a374;
}

.acciones button.delete {
  background-color: #e74c3c; 
}

.acciones button.delete:hover {
  background-color: #c0392b; 
}
</style>