
# Aplicativo UTP + Portal

Este proyecto es una aplicación de React que utiliza Tailwind CSS para el diseño, React Router Dom para el manejo de rutas, Lucide React y React Icons para los íconos. Este archivo README te guiará en los pasos necesarios para ejecutar este proyecto localmente.

# StoryBoard

- [StoryBoard del aplicativo UTP + Portal](https://www.canva.com/design/DAGRlzNsCBk/yKR5SEGE2vTcIwkgdp2S7A/edit?utm_content=DAGRlzNsCBk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

## Requisitos previos

Antes de comenzar, asegúrate de tener lo siguiente instalado en tu entorno:

- [Node.js](https://nodejs.org/en/) (versión 16 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

## Clonar el repositorio

Clona este repositorio en tu máquina local usando el siguiente comando:

```bash
git clone <url-del-repositorio>
```

## Instalación de dependencias

Una vez que hayas clonado el repositorio, navega a la carpeta del proyecto e instala las dependencias:

```bash
cd nombre-del-proyecto
npm install
```

O si prefieres usar yarn:

```bash
yarn install
```

Esto instalará todas las bibliotecas necesarias para que el proyecto funcione, incluidas las siguientes:

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router Dom](https://reactrouter.com/)
- [Lucide React](https://lucide.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)

## Configuración de Tailwind CSS

El proyecto ya está configurado para usar Tailwind CSS. Sin embargo, si necesitas modificar la configuración, revisa el archivo `tailwind.config.js`.

## Ejecución del proyecto

Para ejecutar el proyecto en tu entorno local, usa el siguiente comando:

```bash
npm run dev
```

O con yarn:

```bash
yarn dev
```

Esto iniciará un servidor de desarrollo y la aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## Estructura del proyecto

- **src/components**: Contiene todos los componentes reutilizables como Sidebar, Header, etc.
- **src/pages**: Contiene las páginas principales de la aplicación.
- **src/assets**: Almacena imágenes, íconos, y otros archivos estáticos. (Si estás importando imágenes directamente, usa esta carpeta en lugar de `public`).

## Uso de React Router Dom

Este proyecto utiliza `React Router Dom` para la navegación entre diferentes páginas. Puedes encontrar la configuración de las rutas en el archivo `src/App.jsx`. Asegúrate de revisar y personalizar las rutas según tus necesidades.

## Uso de Lucide React y React Icons

Para agregar íconos a tus componentes, puedes utilizar las bibliotecas `Lucide React` y `React Icons`. Por ejemplo:

```jsx
import { Home } from 'lucide-react';
import { FaBeer } from 'react-icons/fa';

<Home />
<FaBeer />
```

## Compilación para producción

Para compilar el proyecto para producción, ejecuta:

```bash
npm run build
```

O con yarn:

```bash
yarn build
```

Esto generará una versión optimizada del proyecto en la carpeta `dist`.

## Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).
