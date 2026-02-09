# Frontend - Gestión de Productos

Aplicación Vue.js minimalista para gestionar productos. Permite ver una tabla de productos y agregar nuevos productos conectándose a un backend.

## Requisitos

- Node.js (v16 o superior)
- Backend en ejecución (por defecto en `http://localhost:8080`)

## Instalación

```bash
npm install
```

## Configuración del Backend

Edita el archivo `src/api/products.js` para cambiar la URL del backend si es necesario:

```javascript
const API_URL = 'http://localhost:8080/api/productos'
```

## Ejecutar en Desarrollo

```bash
npm run dev
```

La aplicación se ejecutará en `http://localhost:3000`

## Compilar para Producción

```bash
npm run build
```

## Estructura del Proyecto

```
src/
├── api/
│   └── products.js       # Servicio API para productos
├── components/
│   ├── ProductTable.vue  # Tabla de productos
│   └── AddProductForm.vue # Formulario para agregar productos
├── App.vue              # Componente principal
├── main.js              # Punto de entrada
└── style.css            # Estilos globales
```

## Características

- ✅ Tabla de productos con datos desde el backend
- ✅ Formulario para agregar nuevos productos
- ✅ Diseño minimalista y responsive
- ✅ Manejo de errores
- ✅ Estados de carga
- ✅ Mensajes de éxito/error
