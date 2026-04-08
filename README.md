# ZonaCómic - Tienda de Cómics Premium 🎨📚

Una tienda de cómics moderna y elegante construida con **Next.js 16** y **React 19**. ZonaCómic es una plataforma especializada en la curaduría selecta de novelas gráficas y cómics premium para lectores exigentes.

## 🚀 Descripción del Proyecto

**ZonaCómic Elite** es una aplicación web de e-commerce dedicada a la venta de cómics, novelas gráficas y material relacionado con el arte secuencial. La plataforma ofrece una experiencia de usuario sofisticada con:

- **Interfaz moderna y responsiva**: Diseño limpio y profesional optimizado para todos los dispositivos.
- **Catálogo dinámico**: Organización de cómics por editorial (Marvel, DC Comic, Image, etc.).
- **Sistema de carrito**: Gestión de compras integrada.
- **Experiencia de usuario premium**: Animaciones fluidas y transiciones elegantes.

## 📋 Estado actual del Proyecto

### ✅ Funcionalidades Implementadas

1. **Navbar Premium**
   - Navegación fija con efecto scroll adaptativo
   - Menú desplegable de catálogo con dos columnas
   - Carrito de compras con contador
   - Acceso a cuenta de usuario
   - Respuesta visual al desplazamiento

2. **Sección Hero**
   - Fondo dinámico con animación "slow-zoom" subtle (respiración)
   - Gradientes estratégicos para legibilidad
   - Llamadas a la acción principales
   - Indicador de scroll sutil
   - Tipografía impactante y moderna

3. **Sistema de Rutas**
   - Página principal (home) funcional
   - Estructura preparada para secciones futuras
   - Layout responsive con Tailwind CSS v4

4. **Estilos y Temas**
   - Variables de marca personalizadas (colores, animaciones)
   - Sistema de colores coherente (Indigo como color primario)
   - Animaciones CSS personalizadas
   - Tipografía optimizada

### 🔄 Características en Desarrollo

- Grid de catálogo de productos
- Sistema de filtros y búsqueda
- Páginas de detalles de cómics
- Carrito de compras funcional
- Sistema de autenticación
- Integración con API backend

### 📦 Stack Tecnológico

- **Framework**: Next.js 16.2.2
- **Librería UI**: React 19.2.4
- **Estilos**: Tailwind CSS v4 (PostCSS)
- **Iconos**: Lucide React 1.7.0
- **Lenguaje**: TypeScript 5
- **Linting**: ESLint 9
- **Package Manager**: pnpm

## 🛠️ Instalación y Configuración

### Requisitos Previos

- Node.js 18+
- pnpm (recomendado) o npm

### Pasos de Instalación

1. **Clonar el repositorio o navegar al directorio del proyecto**

```bash
cd comic-shop-store
```

2. **Instalar dependencias**

```bash
pnpm install
# o
npm install
```

3. **Configurar variables de entorno** (si es necesario)

```bash
cp .env.example .env.local
```

4. **Iniciar el servidor de desarrollo**

```bash
pnpm dev
# o
npm run dev
```

5. **Acceder a la aplicación**
   Abre tu navegador en [http://localhost:3000](http://localhost:3000)

## 📖 Uso de la Aplicación

### Estructura del Proyecto

```
comic-shop-store/
├── app/
│   ├── globals.css          # Estilos globales y animaciones
│   ├── layout.tsx           # Layout principal
│   ├── (shop)/
│   │   └── page.tsx         # Página de tienda
│   └── components/
│       ├── layout/
│       │   ├── Navbar.component.tsx
│       │   └── Hero.component.tsx
│       ├── shop/            # Componentes de tienda
│       └── ui/              # Componentes reutilizables
├── public/                  # Archivos estáticos
├── package.json
└── tailwind.config.js       # Configuración de Tailwind
```

### Comandos Disponibles

```bash
# Desarrollo
pnpm dev              # Inicia servidor con hot-reload

# Build y Producción
pnpm build            # Compila la aplicación
pnpm start            # Inicia el servidor en modo producción

# Linting
pnpm lint             # Verifica errores de ESLint
```

## 🎨 Personalización

### Variables de Marca

Edita los colores y estilos en `app/globals.css`:

```css
:root {
  --color-brand-dark: #020617; /* Slate-950 */
  --color-brand-primary: #4f46e5; /* Indigo */
  --color-brand-accent: #6366f1; /* Indigo claro */
}
```

### Animaciones

Las animaciones personalizadas están definidas en `app/globals.css`:

- `animate-slow-zoom`: Animación de respiración en el Hero (4s)
- Puedes agregar más animaciones en la sección de `@keyframes`

### Colores de Tailwind

Los colores están registrados en Tailwind y pueden usarse como:

- `bg-brand-primary`
- `text-brand-accent`
- `border-brand-dark`

## 📱 Características Responsive

La aplicación está optimizada para:

- ✅ Mobile (320px+)
- ✅ Tablet (768px+)
- ✅ Desktop (1024px+)
- ✅ Ultra-wide (1536px+)

Utiliza las clases de Tailwind como `md:`, `lg:`, `xl:` para media queries.

## 🔗 Integración Backend

Para conectar con el API backend, asegúrate de:

1. Revisar la carpeta `services/` para implementar llamadas API
2. Configurar URLs de API en variables de entorno
3. Implementar la lógica de autenticación necesaria

Ver proyecto hermano: `comic-store-api` (NestJS)

## 🚀 Próximos Pasos

1. Implementar grid de productos
2. Conectar API endpoint de cómics
3. Sistema de carrito con persistencia
4. Autenticación de usuarios
5. Página de detalles de producto
6. Sistema de búsqueda y filtros
7. Checkout y pago

## 📝 Notas de Desarrollo

### Tailwind v4

- Se utiliza `@import "tailwindcss"` en globals.css
- Las animaciones personalizadas deben estar en CSS puro (no en `@theme inline`)
- Reinicia el servidor después de cambios en globals.css

### Convenciones de Código

- Componentes con sufijo `.component.tsx`
- Uso de `"use client"` para componentes interactivos
- Estructura clara con comentarios en JSX

## 🤝 Contribuciones

Para reportar issues o sugerir mejoras, crea un issue en el repositorio.

## 📞 Información de Contacto

Proyecto desarrollado como parte del stack de e-commerce ZonaCómic.

---

**Última actualización**: Abril 7, 2026
**Versión**: 0.1.0 (En Desarrollo)
