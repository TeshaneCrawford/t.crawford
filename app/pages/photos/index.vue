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
  border-radius: 4px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border: 0 solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    transition: border-width 0.3s ease;
  }

  &:hover {
    .folder-overlay {
      opacity: 1;
      transform: translateY(0);
      background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2));
    }

    &::after {
      border-width: 4px;
    }

    img {
      filter: brightness(1.1) contrast(1.1);
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: filter 0.4s ease;
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
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  opacity: 0.9;
  transform: translateY(5px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
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
