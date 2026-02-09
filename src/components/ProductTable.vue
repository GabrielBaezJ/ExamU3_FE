<template>
  <div>
    <div v-if="loading" class="loading">
      Cargando productos...
    </div>

    <div v-else-if="products.length === 0" class="empty-state">
      <p>No hay productos registrados</p>
      <p style="margin-top: 0.5rem; font-size: 0.9rem; color: #999;">
        Agrega tu primer producto usando el formulario
      </p>
    </div>

    <table v-else>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Precio</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.nombre }}</td>
          <td>{{ product.descripcion }}</td>
          <td>${{ formatPrice(product.precio) }}</td>
          <td>{{ product.stock }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ProductTable',
  props: {
    products: {
      type: Array,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    formatPrice(price) {
      return Number(price).toFixed(2)
    }
  }
}
</script>
