<script setup lang="ts">
definePageMeta({
  alias: ['/photos'],
  title: 'Photos',
  layout: 'photos',
})

useSeoMetaConfig({
  description: 'Displaying some of my best photos taken.',
})

defineOgImageComponent('PageOg', {
  link: '/photos',
})

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

const { data: folders, status, error } = await useFetch<CloudinaryFolder[]>('/api/cloudinary')

const isLoading = computed(() => status.value === 'pending')

const baseMotion = {
  initial: {
    opacity: 0,
    y: 30,
  },
  enter: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 800,
      delay: i * 50,
    },
  }),
}
</script>

<template>
  <div>
    <div v-if="isLoading">
      Loading folders...
    </div>
    <div v-else-if="error">
      Error loading folders
    </div>
    <div v-else class="folder-grid">
      <NuxtLink
        v-for="(folder, index) in folders"
        :key="folder.path"
        v-motion
        :to="`/photos/${folder.path}`"
        class="folder-item"
        :initial="baseMotion.initial"
        :enter="baseMotion.enter(index)"
      >
        <div class="folder-preview">
          <NuxtImg
            v-if="folder.thumbnail"
            provider="cloudinary"
            :src="folder.thumbnail.secure_url"
            :alt="folder.name"
            :width="800"
            :height="800"
            loading="lazy"
            format="webp"
            quality="100"
            fit="cover"
            class="h-full w-full object-cover transition-opacity duration-300"
            placeholder
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          <div v-else class="folder-placeholder shimmer">
            <i class="i-hugeicons:image-02 text-3xl opacity-20" />
          </div>
          <div class="folder-overlay">
            <div class="folder-content">
              <i class="i-hugeicons:album-01 mr-2" />
              <span class="folder-title">{{ folder.name }}</span>
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>
    <br>
    <BackButton />
  </div>
</template>

<style lang="scss" scoped>
.folder-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--space-m);
  // padding: var(--space-m);
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
  border-radius: 8px;
  transition: transform 0.4s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  &:hover {
    img {
      transform: scale(1.05);
    }

    .folder-overlay {
      opacity: 1;
    }
  }
}

.folder-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  position: relative;
  overflow: hidden;
}

.shimmer {
  &::before {
    content: '';
    position: absolute;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    width: 50%;
    height: 100%;
    animation: shimmer 1s infinite;
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(200%);
  }
}

.folder-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(0.5px);
  display: flex;
  align-items: flex-end;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.folder-content {
  display: flex;
  align-items: center;
  color: white;
  background: rgba(0, 0, 0, 0.6);
  padding: 0.75rem 1rem;
  border-radius: 6px;
  backdrop-filter: blur(10px);
  width: 100%;

  i {
    font-size: 1.2rem;
  }
}

.folder-title {
  font-size: 1.1rem;
  margin-left: 0.5rem;
  font-weight: 500;
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
