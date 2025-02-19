"# 🚀 **Bienvenidos al Curso Básico de ReactJS** 🚀

Este repositorio contiene un proyecto básico de **ReactJS** utilizando **Vite** y **Tailwind CSS**. El objetivo es enseñarles cómo crear una aplicación simple de e-commerce paso a paso, utilizando componentes reutilizables y buenas prácticas de desarrollo.

---

## 📝 **Índice**

- [¿Qué es React?](#qué-es-react)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Componentes Principales](#componentes-principales)
   - [Header](#header)
   - [ProductContainer](#productcontainer)
   - [Item](#item)
   - [Footer](#footer)
- [Cómo Ejecutar el Proyecto](#cómo-ejecutar-el-proyecto)
- [Recursos Adicionales](#recursos-adicionales)

---

## 🌟 **¿Qué es React?**

React es una biblioteca de JavaScript desarrollada por Facebook (ahora Meta) que nos permite construir interfaces de usuario interactivas y dinámicas. Es especialmente útil para aplicaciones web modernas porque:

- **Es modular**: Divide la interfaz en pequeños bloques llamados **componentes**.
- **Es eficiente**: Usa un **Virtual DOM** para optimizar el rendimiento.
- **Es flexible**: Se integra fácilmente con otras tecnologías como Node.js o APIs externas.

En este proyecto, aprenderemos a usar React para construir una tienda online básica con productos, un carrito y estilización profesional usando **Tailwind CSS**.

---

## 🏗️ **Estructura del Proyecto**

El proyecto está organizado de la siguiente manera:
```
src/
├── components/       # Componentes reutilizables
│   ├── Header.jsx    # Encabezado de la página
│   ├── Item.jsx      # Representa un producto individual
│   ├── ProductContainer.jsx  # Contenedor de productos
│   └── Footer.jsx    # Pie de página
├── App.jsx           # Componente principal que une todo
├── index.css         # Archivo de configuración de Tailwind CSS
└── main.jsx          # Punto de entrada de la aplicación
```

---

## 🧩 **Componentes Principales**

### **Header**

El componente `<Header />` representa el encabezado de nuestra aplicación. Aquí mostramos el título de la tienda y un botón de inicio de sesión.

#### **Preguntas para Investigar React**
- ¿Que sucederia si no utilizariamos el componente `<Header />`?
- ¿Que cambios le harias al encabezado usando useState?

---

### **ProductContainer**

El componente `<ProductContainer />` actúa como un contenedor para mostrar una lista de productos. Utiliza el componente `<Item />` para renderizar cada producto.

#### **Preguntas para Investigar TailwindCSS**
- ¿Cómo se maneja la responsividad de la cuadrícula de productos?
- ¿Qué función utiliza este componente para iterar sobre la lista de productos?

---

### **Item**

El componente `<Item />` representa un producto individual. Muestra una imagen, el nombre, el precio y un botón para agregarlo al carrito.

#### **Preguntas para Investigar**
- ¿Qué propiedades recibe este componente a modo de parametros?
- ¿De que manera se encuentra integrado con el componente `<ProductContainer />`?

---

### **Footer**

El componente `<Footer />` representa el pie de página de la aplicación. Aquí mostramos información básica como derechos de autor.

#### **Preguntas para Investigar**
- ¿Como recrearias el `<Footer />` y que informacion le agregarias?
- ¿Cómo se agrega margen superior al pie de página?

---

## 🚀 **Cómo Ejecutar el Proyecto**

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/tu-repositorio/react-basico.git
   ```

2. **Instala las Dependencias**:
   ```bash
   npm install
   ```

3. **Inicia la Aplicación**:
   ```bash
   npm run dev
   ```

4. **Accede a la Aplicación**:
   Abre tu navegador y navega a `http://localhost:5173/` para ver la aplicación en ejecución.

---

## 📚 **Recursos Adicionales**
Te dejo algunos recursos útiles para profundizar en React y Tailwind CSS: 

- Documentación oficial de React : https://reactjs.org/ 
- Documentación oficial de Tailwind CSS : https://tailwindcss.com/ 
- Documentación oficial de Vite : https://vitejs.dev/guide/ 

---
## 🎉 Conclusión  

Este proyecto es un punto de partida para aprender ReactJS. Hemos cubierto los conceptos básicos de componentes, estados, props y estilización con Tailwind CSS.  

Tu misión es explorar el código del repositorio, responder las preguntas planteadas y experimentar con cambios para personalizar la aplicación. Si tienes dudas o necesitas ayuda, no dudes en contactarme a traves del grupo, o consultar por privado ya sea a Demian o a mi, saludos!. 