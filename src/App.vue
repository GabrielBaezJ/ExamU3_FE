<template>
  <div>
    <h1>Gestión de Productos</h1>
    
    <AddProductForm @product-added="loadProducts" />
    
    <ProductTable :products="products" :loading="loading" />

    <div v-if="error" class="message error">
      {{ error }}
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import ProductTable from './components/ProductTable.vue'
import AddProductForm from './components/AddProductForm.vue'
import { productService } from './api/products'

export default {
  name: 'App',
  components: {
    ProductTable,
    AddProductForm
  },
  setup() {
    const products = ref([])
    const loading = ref(false)
    const error = ref(null)

    const loadProducts = async () => {
      try {
        loading.value = true
        error.value = null
        products.value = await productService.getAll()
      } catch (err) {
        error.value = 'Error al cargar los productos. Verifica que el backend esté en ejecución.'
        console.error('Error loading products:', err)
      } finally {
        loading.value = false
      }
    }

    onMounted(() => {
      loadProducts()
    })

    return {
      products,
      loading,
      error,
      loadProducts
    }
  }
}
</script>
