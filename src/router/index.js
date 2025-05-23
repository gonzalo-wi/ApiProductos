import { createRouter, createWebHistory } from 'vue-router';
import Inicio from '../views/Inicio.vue';
import CrearProductoView from '../views/CrearProductoView.vue';
import DetalleProductoView from '../views/DetalleProductoView.vue';
import EditarProductoView from '../views/EditarProductoView.vue';

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/crear-producto',
    name: 'CrearProducto',
    component: CrearProductoView
  },
  {
    path: '/producto/:id',
    name: 'DetalleProducto',
    component: DetalleProductoView,
    props: true
  },
  {
    path: '/editar-producto/:id',
    name: 'EditarProducto',
    component: EditarProductoView,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;