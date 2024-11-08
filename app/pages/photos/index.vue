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
            quality="50"
            fit="cover"
            class="h-full w-full object-cover transition-opacity duration-300"
            placeholder
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          <div v-else class="folder-placeholder">
            No preview
          </div>
          <div class="folder-overlay">
            <div class="folder-content">
              <i class="i-hugeicons:album-01 mr-2"/>
              <span class="folder-title">{{ folder.name }}</span>
            </div>
          </div>
        </div>
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
  position: relative;
}

.folder-preview {
  aspect-ratio: 1;
  position: relative;
  overflow: hidden;

  &:hover {
    .folder-overlay {
      opacity: 1;
      transform: translateY(0);
    }

    img {
      transform: scale(1.05);
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
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

.folder-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  opacity: 0.9;
  transform: translateY(10px);
  transition: all 0.3s ease;
}

.folder-content {
  display: flex;
  align-items: center;
  color: white;

  i {
    font-size: 1.2rem;
  }
}

.folder-title {
  font-size: 1.1rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: white;
    transition: width 0.3s ease;
  }

  .folder-item:hover & {
    &::after {
      width: 100%;
    }
  }
}
</style>