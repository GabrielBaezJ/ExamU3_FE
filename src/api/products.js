import axios from 'axios'

// Configura la URL de tu backend aquí
const API_URL = 'http://localhost:8080/api/productos'

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const productService = {
  // Obtener todos los productos
  async getAll() {
    const response = await api.get('/')
    return response.data
  },

  // Crear un nuevo producto
  async create(productData) {
    const response = await api.post('/', productData)
    return response.data
  },

  // Obtener un producto por ID
  async getById(id) {
    const response = await api.get(`/${id}`)
    return response.data
  },

  // Actualizar un producto
  async update(id, productData) {
    const response = await api.put(`/${id}`, productData)
    return response.data
  },

  // Eliminar un producto
  async delete(id) {
    const response = await api.delete(`/${id}`)
    return response.data
  }
}
