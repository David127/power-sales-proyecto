# Proyecto de Gestión de Tareas con Next.js, TypeScript, TailwindCSS y ShadCN

Este es un proyecto de gestión de tareas (CRUD) desarrollado en **Next.js** (v14 o superior) usando **TypeScript** para la tipificación estática, **TailwindCSS** para el diseño visual, y **ShadCN** para los componentes de la interfaz.

## Funcionalidades

- **Lista de Tareas**: Muestra una lista de tareas existentes con título, descripción, estado y fecha de vencimiento.
- **Crear Nueva Tarea**: Permite a los usuarios crear una nueva tarea especificando el título, descripción, estado (Pendiente o Completada) y fecha de vencimiento.
- **Editar Tarea**: Cada tarea se puede editar para modificar el título, descripción, estado y fecha de vencimiento.
- **Eliminar Tarea**: Permite la eliminación de tareas individuales de la lista.
- **Persistencia de Datos**: Las tareas se guardan en `localStorage`, lo que permite que los datos persistan al recargar la página.

## Instalación y Ejecución

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/David127/power-sales-proyecto.git
   cd power-sales-proyecto
   ```

2. **Instalar las dependencias**:
  ```bash
  npm install
  ```

3. **Ejecutar el proyecto**:
  ```bash
  npm run dev
  ```

## Persistencia de datos usando localstorage

Se realiza la persistencia de datos con el localstorage para mantener la información guardada si recargamos la web, manteniento las tareas con las que estabamos trabajando a nuestra disposición

## Toma de decisiones

Se utilizo context API para realizar un mejor manejo del estado global de las tareas, permitiendo que componentes y páginas accedan y actualicen la lsita de tareas fácilmente sin necesidad de pasar props entre múltiples niveles.

Se agrega un buscador por el nombre de la tarea para realizar una búsqueda más exacta.

