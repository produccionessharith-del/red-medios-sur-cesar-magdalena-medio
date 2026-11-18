# Red Regional de Medios de Comunicación — Sur del Cesar y Magdalena Medio

Primera versión del portal regional construida con Next.js, Supabase, GitHub y Vercel.

## Requisitos
- Node.js 20 o superior
- Cuenta de GitHub
- Cuenta de Supabase
- Cuenta de Vercel

## 1. Ejecutar localmente
```bash
npm install
cp .env.example .env.local
npm run dev
```
Abre http://localhost:3000.

La portada y las páginas informativas funcionan como base visual. El panel `/admin` ya incluye inicio de sesión con Supabase Auth. Las funciones de gestión y los permisos por medio se habilitarán después de configurar el primer administrador y las políticas RLS.

## 2. Crear Supabase
1. Crea un proyecto nuevo en https://supabase.com/dashboard.
2. Abre SQL Editor y ejecuta el contenido de `supabase/schema.sql`.
3. En Project Settings > API, copia Project URL y la clave pública `anon`/publishable.
4. El archivo `.env.local` incluido ya contiene los datos públicos que compartiste. Si necesitas configurarlo manualmente, pega los valores en `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://TU-PROYECTO.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=TU_CLAVE_PUBLICA
```
No compartas claves `service_role` ni las guardes en el repositorio.

## 3. Crear GitHub
1. Regístrate en https://github.com.
2. Crea un repositorio nuevo llamado `red-medios-sur-cesar-magdalena-medio`.
3. Sube todos los archivos de esta carpeta a la rama `main`.

Desde una terminal:
```bash
git init
git add .
git commit -m "Primera versión de la Red de Medios"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/red-medios-sur-cesar-magdalena-medio.git
git push -u origin main
```

## 4. Publicar en Vercel
1. Entra a https://vercel.com.
2. Selecciona Add New > Project.
3. Importa el repositorio de GitHub.
4. En Environment Variables agrega `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
5. Pulsa Deploy. Vercel asignará una dirección gratuita `*.vercel.app`.

## 5. Próximas etapas
- Conectar las consultas de noticias y medios a Supabase.
- Asignar el rol de administrador a la primera cuenta y aplicar políticas RLS seguras.
- Implementar permisos por medio y las pantallas CRUD de noticias, eventos y medios.
- Crear panel de administración completo.
- Configurar Storage para logos, fotografías y archivos audiovisuales.
- Integrar reproductores de radio y televisión según los enlaces de señal de cada medio.

## Importante
Este ZIP es el punto de partida del proyecto, no una plataforma terminada. El acceso administrativo y las publicaciones dinámicas requieren completar la autenticación, políticas RLS y conexión de datos antes de producción.
