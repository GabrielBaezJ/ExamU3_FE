<template>
  <div class="form-container">
    <h2 style="margin-bottom: 1.5rem; font-size: 1.5rem; color: #2c3e50;">
      Agregar Nuevo Producto
    </h2>

    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="nombre">Nombre</label>
        <input
          id="nombre"
          v-model="formData.nombre"
          type="text"
          required
          placeholder="Ingresa el nombre del producto"
        />
      </div>

      <div class="form-group">
        <label for="descripcion">Descripción</label>
        <input
          id="descripcion"
          v-model="formData.descripcion"
          type="text"
          required
          placeholder="Ingresa la descripción"
        />
      </div>

      <div class="form-group">
        <label for="precio">Precio</label>
        <input
          id="precio"
          v-model.number="formData.precio"
          type="number"
          step="0.01"
          min="0"
          required
          placeholder="0.00"
        />
      </div>

      <div class="form-group">
        <label for="stock">Stock</label>
        <input
          id="stock"
          v-model.number="formData.stock"
          type="number"
          min="0"
          required
          placeholder="0"
        />
      </div>

      <div v-if="message" class="message" :class="messageType">
        {{ message }}
      </div>

      <div class="form-actions">
        <button type="submit" :disabled="submitting">
          {{ submitting ? 'Guardando...' : 'Agregar Producto' }}
        </button>
        <button type="button" @click="resetForm" :disabled="submitting">
          Limpiar
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { productService } from '../api/products'

export default {
  name: 'AddProductForm',
  emits: ['product-added'],
  setup(props, { emit }) {
    const formData = ref({
      nombre: '',
      descripcion: '',
      precio: 0,
      stock: 0
    })

    const submitting = ref(false)
    const message = ref('')
    const messageType = ref('')

    const resetForm = () => {
      formData.value = {
        nombre: '',
        descripcion: '',
        precio: 0,
        stock: 0
      }
      message.value = ''
    }

    const handleSubmit = async () => {
      try {
        submitting.value = true
        message.value = ''

        await productService.create(formData.value)
        
        message.value = 'Producto agregado exitosamente'
        messageType.value = 'success'
        
        resetForm()
        emit('product-added')
        
        setTimeout(() => {
          message.value = ''
        }, 3000)
      } catch (error) {
        message.value = 'Error al agregar el producto. Verifica que el backend esté en ejecución.'
        messageType.value = 'error'
        console.error('Error creating product:', error)
      } finally {
        submitting.value = false
      }
    }

    return {
      formData,
      submitting,
      message,
      messageType,
      handleSubmit,
      resetForm
    }
  }
}
</script>
