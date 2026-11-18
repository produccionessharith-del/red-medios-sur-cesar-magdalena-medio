-- Esquema inicial de la Red de Medios.
-- Ejecutar en Supabase > SQL Editor.
create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  role text not null default 'editor' check (role in ('admin','editor')),
  media_id uuid,
  created_at timestamptz not null default now()
);

create table if not exists public.media_outlets (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  media_type text not null check (media_type in ('television','radio','press','digital')),
  description text,
  logo_url text,
  website_url text,
  live_url text,
  municipality text,
  department text default 'Colombia',
  contact_email text,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

alter table public.profiles
  add constraint profiles_media_id_fkey
  foreign key (media_id) references public.media_outlets(id) on delete set null;

create table if not exists public.articles (
  id uuid primary key default gen_random_uuid(),
  media_id uuid references public.media_outlets(id) on delete set null,
  author_id uuid references public.profiles(id) on delete set null,
  title text not null,
  slug text unique not null,
  excerpt text,
  body text,
  cover_image_url text,
  category text,
  municipality text,
  status text not null default 'draft' check (status in ('draft','published','archived')),
  is_featured boolean not null default false,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.programs (
  id uuid primary key default gen_random_uuid(),
  media_id uuid references public.media_outlets(id) on delete set null,
  title text not null,
  description text,
  thumbnail_url text,
  video_url text,
  created_at timestamptz not null default now()
);

create table if not exists public.live_streams (
  id uuid primary key default gen_random_uuid(),
  media_id uuid references public.media_outlets(id) on delete cascade,
  title text not null,
  stream_type text not null check (stream_type in ('television','radio')),
  stream_url text not null,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.media_outlets enable row level security;
alter table public.articles enable row level security;
alter table public.programs enable row level security;
alter table public.live_streams enable row level security;

-- Lectura pública de medios activos y contenido publicado.
create policy "Public can view active media" on public.media_outlets
for select using (is_active = true);

create policy "Public can view published articles" on public.articles
for select using (status = 'published');

create policy "Public can view programs" on public.programs
for select using (true);

create policy "Public can view active streams" on public.live_streams
for select using (is_active = true);

-- Los cambios administrativos se habilitarán mediante políticas por rol
-- después de crear y verificar la cuenta administradora. No habilitar
-- escrituras públicas en estas tablas.
