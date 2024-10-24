<script setup lang="ts">
import { useRoute } from '#imports'

const route = useRoute()
const folderName = route.params.folder as string

definePageMeta({
  layout: 'photos'
})

useSeoMeta({
  title: computed(() => `Photos from ${folderName}`),
  description: computed(() => `Browse through photos from the ${folderName} collection.`)
})

const { images, imagesGrid, fetchImages } = useCloudinaryImages(route.params.folder as string)
const showCarousel = computed(() => route.query.image !== undefined)

onMounted(() => {
  fetchImages()
})
</script>

<template>
  <div>
    <NuxtLink
      to="/photos"
      class="back-link"
      aria-label="Back to folders"
    >
      <Icon name="i-hugeicons-arrow-left-02" />
      <span>Back to folders</span>
    </NuxtLink>

    <Carousel v-if="showCarousel" :images="images" />
    <ul id="carouselTargetList" class="masonry-grid">
      <li
        v-for="(img, i) in imagesGrid"
        :key="i"
        class="masonry-item"
        v-motion
        :initial="{
          opacity: 0,
          y: '5%'
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.1,
            duration: 0.75,
            ease: [0.36, 0.07, 0.25, 1]
          }
        }"
      >
        <div class="masonry-item__wrapper">
          <NuxtLink
            :to="`/photos/${route.params.folder}?image=${i}`"
            :data-carousel-index="i"
            class="masonry-item__link"
            :aria-label="`Open image ${img.alt || i}`"
          >
            <Photo v-bind="img" />
          </NuxtLink>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  padding: 0.75rem 0;
  @apply: dark:text-neutral-3 text-neutral-5;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s ease;

  &:hover {
    @apply: dark:text-neutral-5 text-neutral-4;
  }

  .back-arrow {
    width: 1.25rem;
    height: 1.25rem;
  }
}

.loading, .error {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 320px;
  font-size: 1.2rem;
  color: var(--text-color);
}

.masonry-grid {
  columns: 2 320px;
  column-gap: 2px;
  margin: 2px 0 0 0;
  padding: 0;
  list-style: none;
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 2px;
  opacity: 1;
  transition: opacity 0.3s ease;

  &__wrapper {
    height: 100%;
    transition: 0.25s cubic-bezier(0.36, 0.07, 0.25, 1);
    transition-property: transform, box-shadow;

    &:hover {
      cursor: pointer;
      // box-shadow: 0 0 1px 1px rgba(202, 202, 202, 0.5);
      // transform: translate3d(0, -2%, 0);
    }
  }

  &__link {
    display: block;
    line-height: 0; // Removes unwanted spacing

    img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
}
</style>