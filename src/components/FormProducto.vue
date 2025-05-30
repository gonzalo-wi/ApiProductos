<template>
  <form @submit.prevent="guardarProducto" class="form-producto">
    <div>
      <label for="title">Nombre:</label>
      <input type="text" id="title" v-model="producto.title" required>
    </div>
    <div>
      <label for="price">Precio:</label>
      <input type="number" id="price" v-model.number="producto.price" required min="0" step="0.01">
    </div>
    <div>
      <label for="description">Descripción:</label>
      <textarea id="description" v-model="producto.description" required></textarea>
    </div>
    <div>
      <label for="category">Categoría:</label>
      <input type="text" id="category" v-model="producto.category" required>
    </div>
    <div>
      <label for="image">URL de la Imagen:</label>
      <input type="url" id="image" v-model="producto.image">
    </div>
    <button type="submit">{{ esNuevoProducto ? 'Crear Producto' : 'Actualizar Producto' }}</button>
    <button type="button" @click="cancelar">Cancelar</button>
  </form>
</template>

<script>
export default {
  props: {
    productoData: {
      type: Object,
      default: () => ({ title: '', price: null, description: '', category: '', image: '' })
    },
    esNuevoProducto: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      producto: { ...this.productoData }
    };
  },
  watch: {
    productoData: {
      handler(nuevoValor) {
        this.producto = { ...nuevoValor };
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    guardarProducto() {
      this.$emit('guardar', this.producto);
    },
    cancelar() {
      this.$emit('cancelar');
    }
  }
};
</script>

<style scoped>
.form-producto {
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #080808;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-producto div {
  margin-bottom: 15px;
}

.form-producto label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-producto input,
.form-producto textarea {
  width: 100%;
  padding: 4px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white; /* Fondo blanco */
  color: black; /* Letras negras */
}

.form-producto textarea {
  height: 100px;
  resize: vertical;
}

.form-producto button {
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
}

.form-producto button[type="submit"] {
  background-color: #42b983;
  color: white;
}

.form-producto button[type="button"] {
  background-color: #f0f0f0;
  color: #333;
}

.form-producto button:hover {
  opacity: 0.9;
}
</style>