<script setup lang="ts">
definePageMeta({
  alias: ['/photos'],
  title: 'Photos',
  layout: 'photos'
});

useSeoMetaConfig({
  description: 'Displaying some of my best photos taken.',
});

defineOgImageComponent('PageOg', {
  link: '/photos',
});

interface CloudinaryFolder {
  name: string
  path: string
  thumbnail?: {
    public_id: string
    width: number
    height: number
    format: string
    secure_url: string
  }
}

const { data: folders, pending, error } = await useFetch<CloudinaryFolder[]>('/api/cloudinary')
</script>

<template>
  <div>
    <div v-if="pending">Loading folders...</div>
    <div v-else-if="error">Error loading folders</div>
    <div v-else class="folder-grid">
      <NuxtLink
        v-for="folder in folders"
        :key="folder.path"
        :to="`/photos/${folder.path}`"
        class="folder-item"
      >
        <div class="folder-preview">
          <NuxtImg
            v-if="folder.thumbnail"
            provider="cloudinary"
            :src="folder.thumbnail.secure_url"
            :alt="folder.name"
            :width="folder.thumbnail.width"
            :height="folder.thumbnail.height"
            loading="lazy"
            format="webp"
            quality="auto"
            fit="cover"
            class="h-full w-full object-cover transition-opacity duration-300"
            placeholder
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          <div v-else class="folder-placeholder">
            No preview
          </div>
        </div>
        <h3 class="folder-name op-60">{{ folder.name }}</h3>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.folder-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--space-m);
  padding: var(--space-m);
}

.folder-item {
  text-decoration: none;
  color: inherit;

  &:hover {
    .folder-preview {
      transform: translateY(-2%);
    }
  }
}

.folder-preview {
  aspect-ratio: 1;
  transition: 0.25s cubic-bezier(0.36, 0.07, 0.25, 1);
  transition-property: transform, box-shadow;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.folder-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
}

.folder-name {
  margin: var(--space-s) 0;
  text-align: center;
  font-size: 1.1rem;
}
</style>