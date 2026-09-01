# Tomás Navarro — Portfolio

Portfolio personal desarrollado con React + Vite.

## Perfil

Frontend Developer con foco en React y experiencia construyendo interfaces, aplicaciones web y proyectos integrados con servicios de datos como Supabase.

## Secciones

- Sobre mí
- Proyectos
- Laboratorio
- Servicios
- Contacto

El modo claro es la apariencia principal. El modo oscuro puede activarse desde la barra superior.

## Ejecutar localmente

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

El resultado se genera en:

```text
dist/
```

## Estructura principal

```text
src/
├── components/
│   ├── sections/
│   └── ...
├── data/
│   ├── profile.js
│   ├── projects.js
│   ├── services.js
│   ├── lab.js
│   └── navigation.js
├── styles/
│   └── global.css
├── App.jsx
└── main.jsx
```

## Contenido editable

### Perfil y contacto

```text
src/data/profile.js
```

### Proyectos

```text
src/data/projects.js
```

### Servicios

```text
src/data/services.js
```

### Laboratorio

```text
src/data/lab.js
```

### Navegación principal

```text
src/data/navigation.js
```

## Assets públicos

Las imágenes y archivos públicos deben ir dentro de:

```text
public/
```

Por ejemplo:

```text
public/images/Navarro.jpeg
```

y desde React se referencia como:

```text
/images/Navarro.jpeg
```

## Importante

`node_modules` y `dist` no deben subirse al repositorio ni incluirse al compartir el código fuente. Las dependencias se reconstruyen mediante:

```bash
npm install
```
