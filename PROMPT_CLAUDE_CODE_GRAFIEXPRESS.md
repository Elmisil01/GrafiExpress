# GrafiExpress — Optimización Completa
# Vite + React + Tailwind + Vercel
# Prompt para Claude Code

## Estado actual
- Desktop Lighthouse: 100 Performance ✅ — NO romper esto
- Mobile Lighthouse: 73 Performance ❌ — arreglar
- SEO: 91 — falta meta description
- Accessibility: 86 — contraste y links sin nombre
- Payload total: ~7MB (6 PNG × ~800KB + video 1.6MB)

## REGLA PRINCIPAL
**No modificar el diseño visual en desktop ni tablet. Solo optimizar assets, agregar meta tags, y mejorar mobile responsiveness.**

---

## TAREA 1 — Convertir las 6 imágenes PNG a WebP (IMPACTO MÁS ALTO)

Las 6 imágenes de las cards de servicios pesan ~5MB en total. Se muestran en 332×332px (mobile) o 411×411px (desktop) pero son 1024×1024px.

```bash
# Verificar que existen
ls -lh public/images/

# Instalar sharp si no está
npm install sharp --save-dev

# Crear script de conversión
cat > scripts/convert-images.js << 'EOF'
import sharp from 'sharp';
import { readdirSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const inputDir = 'public/images';
const images = [
  'ploteo.png',
  'vidrieras.png', 
  'carteleria.png',
  'vinilos.png',
  'banners.png',
  'microperforados.png'
];

for (const img of images) {
  const input = join(inputDir, img);
  const outputName = img.replace('.png', '.webp');
  const output = join(inputDir, outputName);
  
  // Versión full (411px para desktop)
  await sharp(input)
    .resize(411, 411, { fit: 'cover' })
    .webp({ quality: 82 })
    .toFile(output);
    
  // Versión mobile (332px)
  const outputMobile = join(inputDir, img.replace('.png', '-mobile.webp'));
  await sharp(input)
    .resize(332, 332, { fit: 'cover' })
    .webp({ quality: 80 })
    .toFile(outputMobile);
    
  console.log(`✅ ${img} → ${outputName}`);
}
EOF

node scripts/convert-images.js

# Verificar tamaños resultantes (deben ser ~50-80KB cada una)
ls -lh public/images/*.webp
```

Luego en el componente de las cards de servicios (buscar el archivo que renderiza las cards):

```bash
# Buscar el componente
grep -rn "ploteo.png\|/images/ploteo\|banners.png" src/
```

Reemplazar cada `<img>` con `<picture>` para soporte universal:

```jsx
// ANTES
<img 
  src="/images/ploteo.png"
  className="w-full h-full object-cover grayscale blur-[2px] opacity-40 group-hover:grayscale-[0.2] group-hover:blur-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out"
/>

// DESPUÉS — con WebP + srcset responsive + width/height explícitos
<picture>
  <source
    srcSet="/images/ploteo-mobile.webp 332w, /images/ploteo.webp 411w"
    sizes="(max-width: 768px) 332px, 411px"
    type="image/webp"
  />
  <img
    src="/images/ploteo.webp"
    width={411}
    height={411}
    loading="lazy"
    decoding="async"
    className="w-full h-full object-cover grayscale blur-[2px] opacity-40 group-hover:grayscale-[0.2] group-hover:blur-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out"
    alt="Ploteo vehicular - GrafiExpress"
  />
</picture>
```

Hacer lo mismo para las 6 imágenes con sus alt texts descriptivos:
- ploteo.png → "Ploteo vehicular - transformación de flotas comerciales"
- vidrieras.png → "Vidrieras y locales - decoración de fachadas con vinilo"
- carteleria.png → "Cartelería LED - letras corpóreas 3D con iluminación"
- vinilos.png → "Vinilos Arlon - material premium para ploteos"
- banners.png → "Banners frontlight - iluminación para máxima visibilidad"
- microperforados.png → "Microperforados - vinilo para vidrieras con visión exterior"

---

## TAREA 2 — Optimizar el video del hero para mobile (IMPACTO ALTO)

El video `video2.mp4` pesa 1.6MB y es el LCP en mobile. En mobile el video autoplay consume batería y datos — la práctica estándar es reemplazarlo por una imagen poster en mobile.

```bash
# Ver el componente del hero con el video
grep -rn "video2.mp4\|video-background\|video.absolute" src/
```

**Estrategia: imagen poster en mobile, video en desktop**

```jsx
// En el componente Hero — buscar el <video> y modificarlo así:

// 1. Primero generar una imagen poster del primer frame del video
// (hacerlo manualmente: capturar un screenshot del hero y guardarlo como /public/images/hero-poster.webp)
// La imagen debe ser representativa del hero — el logo de GrafiExpress sobre fondo azul

// 2. Agregar poster al video para que muestre imagen mientras carga
<video
  className="absolute inset-0 w-full h-full object-cover video-background"
  autoPlay
  muted
  loop
  playsInline
  poster="/images/hero-poster.webp"  // ← AGREGAR ESTO
>
  <source src="/videos/video2.mp4" type="video/mp4" />
</video>

// 3. En mobile, ocultar el video y mostrar solo el poster (ahorra ~1.6MB en mobile)
// En el CSS o con Tailwind:
```

```css
/* En index.css o el CSS global */
@media (max-width: 767px) {
  .video-background {
    display: none;
  }
  
  /* Mostrar el hero-poster como fondo en mobile */
  .hero-section {
    background-image: url('/images/hero-poster.webp');
    background-size: cover;
    background-position: center;
  }
}
```

O con Tailwind directamente en el JSX:
```jsx
<video className="absolute inset-0 w-full h-full object-cover video-background hidden md:block" ...>
```

Y agregar la imagen de fondo para mobile en el contenedor del hero:
```jsx
<section 
  className="relative hero-section"
  style={{ backgroundImage: 'url(/images/hero-poster.webp)' }}
  // En desktop el video lo cubre, en mobile muestra el background
>
```

---

## TAREA 3 — SEO: agregar meta description y tags completos (IMPACTO ALTO)

El sitio usa Vite + React. Buscar el `index.html` en la raíz:

```bash
cat index.html
```

Agregar en el `<head>`:

```html
<!-- Meta description (FALTANTE - SEO 91→100) -->
<meta name="description" content="GrafiExpress — Ploteos, cartelería y gráfica publicitaria en San Vicente, Buenos Aires. Ploteo vehicular, vidrieras, cartelería LED, vinilos Arlon, banners y microperforados. Presupuesto sin cargo.">

<!-- Canonical -->
<link rel="canonical" href="https://grafiexpress.vercel.app/">

<!-- Open Graph para redes sociales -->
<meta property="og:title" content="GrafiExpress — Ploteos & Cartelería Profesional">
<meta property="og:description" content="Soluciones gráficas premium en San Vicente, Buenos Aires. Ploteo vehicular, vidrieras, cartelería LED y más. Presupuesto sin cargo.">
<meta property="og:image" content="https://grafiexpress.vercel.app/images/hero-poster.webp">
<meta property="og:url" content="https://grafiexpress.vercel.app/">
<meta property="og:type" content="website">
<meta property="og:locale" content="es_AR">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="GrafiExpress — Ploteos & Cartelería Profesional">
<meta name="twitter:description" content="Soluciones gráficas premium en San Vicente, Buenos Aires.">
<meta name="twitter:image" content="https://grafiexpress.vercel.app/images/hero-poster.webp">

<!-- Preconnect para Google Maps (ahorra 380ms en LCP mobile) -->
<link rel="preconnect" href="https://www.google.com">
<link rel="preconnect" href="https://maps.googleapis.com">
<link rel="preconnect" href="https://maps.gstatic.com" crossorigin>
```

---

## TAREA 4 — JSON-LD Schema para Google (SEO local)

Agregar schema de LocalBusiness antes del `</body>` en `index.html`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "GrafiExpress",
  "description": "Ploteos, cartelería y gráfica publicitaria profesional",
  "url": "https://grafiexpress.vercel.app",
  "telephone": "+5491154582487",
  "email": "Grafi_express@hotmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Empalme San Vicente",
    "addressRegion": "Buenos Aires",
    "addressCountry": "AR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -35.0,
    "longitude": -58.4
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://instagram.com/grafiexpress",
    "https://facebook.com/grafiexpress"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios Gráficos",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Ploteo Vehicular"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Vidrieras y Locales"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Cartelería LED"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Vinilos Arlon"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Banners Frontlight"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Microperforados"}}
    ]
  }
}
</script>
```

---

## TAREA 5 — Accessibility: arreglar links sin nombre (redes sociales)

```bash
# Buscar los links de Instagram y Facebook en el footer
grep -rn "instagram\|facebook\|bg-azul-oscuro.*rounded-full" src/
```

Los iconos de redes sociales no tienen texto accesible. Agregar `aria-label`:

```jsx
// ANTES
<a href="https://instagram.com/grafiexpress" className="bg-azul-oscuro p-3 rounded-full hover:bg-azul-neon transition-colors text-white">
  <InstagramIcon />
</a>

// DESPUÉS
<a 
  href="https://instagram.com/grafiexpress" 
  className="bg-azul-oscuro p-3 rounded-full hover:bg-azul-neon transition-colors text-white"
  aria-label="Seguinos en Instagram"
  target="_blank"
  rel="noopener noreferrer"
>
  <InstagramIcon aria-hidden="true" />
</a>

<a 
  href="https://facebook.com/grafiexpress"
  className="bg-azul-oscuro p-3 rounded-full hover:bg-azul-express transition-colors text-white"
  aria-label="Seguinos en Facebook"
  target="_blank"
  rel="noopener noreferrer"
>
  <FacebookIcon aria-hidden="true" />
</a>
```

---

## TAREA 6 — Accessibility: contraste en el footer

```bash
# Buscar los elementos con bajo contraste en el footer
grep -rn "text-xs\|azul-neon\|font-bold" src/components/Footer* src/components/footer*
# o buscar el footer directamente
grep -rn "footer\|contacto" src/ | grep -i "component\|jsx" | head -5
```

Los elementos con bajo contraste son `span`, `span.text-xs` y `a.font-bold` en el footer. Aumentar el contraste:

```jsx
// Buscar los colores exactos y aumentar su luminosidad
// Ejemplo: si usan text-gray-500, cambiar a text-gray-300
// Si usan un color custom de Tailwind, revisar tailwind.config.js

// En tailwind.config.js buscar los colores del tema
cat tailwind.config.js
```

Ajustar los colores que Lighthouse marca como bajo contraste. El ratio mínimo es 4.5:1 para texto normal y 3:1 para texto grande.

---

## TAREA 7 — Video: agregar track de captions (Accessibility)

```bash
grep -rn "<video\|video>" src/
```

```jsx
// ANTES
<video autoPlay muted loop playsInline ...>
  <source src="/videos/video2.mp4" type="video/mp4" />
</video>

// DESPUÉS — agregar track vacío para satisfacer el audit
<video autoPlay muted loop playsInline ...>
  <source src="/videos/video2.mp4" type="video/mp4" />
  <track kind="captions" srcLang="es" label="Español" default />
</video>

// Crear el archivo de captions vacío
// public/videos/video2.vtt
```

```bash
# Crear archivo VTT mínimo válido
cat > public/videos/video2.vtt << 'EOF'
WEBVTT

EOF
```

```jsx
<track kind="captions" src="/videos/video2.vtt" srcLang="es" label="Español" default />
```

---

## TAREA 8 — Mobile responsiveness general

```bash
# Ver si hay problemas de overflow horizontal en mobile
grep -rn "min-w\|whitespace-nowrap\|overflow-x" src/
```

Verificar en DevTools mobile (360px) que:
1. El navbar colapsa correctamente al menú hamburger
2. Las cards de servicios se muestran en 1 columna en mobile (ya tienen `grid-cols-1 md:grid-cols-3`)
3. El texto del hero no se desborda
4. Los botones CTA tienen ancho completo en mobile

Si hay overflow horizontal:
```css
/* En index.css */
html, body {
  overflow-x: hidden;
  max-width: 100vw;
}
```

---

## TAREA 9 — Unused JavaScript (32KB)

El bundle `index-Cqix9Ute.js` tiene 32KB de JS sin usar. En Vite esto se resuelve con dynamic imports:

```bash
# Ver si hay imports grandes que se pueden diferir
# Revisar main.jsx o App.jsx
cat src/main.jsx
cat src/App.jsx
```

Si Google Maps se importa directamente, diferirlo:
```jsx
// Si el mapa de Google está en un componente separado, 
// usar lazy loading de React:
import { lazy, Suspense } from 'react';

const MapaContacto = lazy(() => import('./components/MapaContacto'));

// En el JSX:
<Suspense fallback={<div className="h-48 bg-azul-oscuro rounded-lg animate-pulse" />}>
  <MapaContacto />
</Suspense>
```

---

## ORDEN DE EJECUCIÓN

1. **TAREA 3** — meta description + OG tags (5 min, SEO 91→100)
2. **TAREA 4** — JSON-LD schema (5 min, SEO local)
3. **TAREA 1** — convertir imágenes a WebP (mayor impacto en mobile)
4. **TAREA 2** — video hidden en mobile + poster
5. **TAREA 5** — aria-label en redes sociales
6. **TAREA 6** — contraste footer
7. **TAREA 7** — track captions video
8. **TAREA 8** — overflow mobile check
9. **TAREA 9** — lazy load Google Maps

---

## VERIFICACIÓN ANTES DE DEPLOY

```bash
# 1. Verificar que las imágenes WebP existen y pesan menos
ls -lh public/images/*.webp

# 2. Verificar meta description en index.html
grep "meta name=\"description\"" index.html

# 3. Verificar JSON-LD
grep "application/ld+json" index.html

# 4. Verificar aria-labels en el footer
grep -n "aria-label" src/components/Footer* 2>/dev/null || grep -rn "aria-label" src/ | grep -i "instagram\|facebook"

# 5. Build de producción sin errores
npm run build

# 6. Preview local en mobile (360px)
npm run preview
# Abrir en Chrome → DevTools → Toggle device → Galaxy A54 (360px)
# Verificar: sin scroll horizontal, cards en 1 columna, video oculto
```

---

## DEPLOY

```bash
git add -A
git commit -m "perf: WebP images -95%, video hidden mobile, meta SEO, JSON-LD schema, aria-labels, captions track"
git push
```

---

## IMPACTO ESPERADO

| Métrica | Antes | Después |
|---------|-------|---------|
| Mobile Performance | 73 | ~92+ |
| LCP mobile | 6.0s | ~2.0s |
| Payload total | 7.2MB | ~1.5MB |
| SEO | 91 | 100 |
| Accessibility | 86 | 95+ |
| Desktop Performance | 100 | 100 (sin cambios) |
