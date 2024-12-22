---
title: 'The Nuxt 3 useFetch Navigation Conundrum: A Deep Dive'
description: Understanding Nuxt 3's useFetch and Navigation Blocking Issues
authors:
  - name: Teshane Crawford
    picture: https://github.com/TeshaneCrawford.png
    twitter: _d_shybrid
tags:
  - Nuxt
  - Vue
  - Typescript
date: 2024-10-25
---

## The Nuxt 3 useFetch Navigation Conundrum: A Deep Dive

I recently ran into an interesting challenge while working with Nuxt 3's `useFetch` composable. The issue manifested as sluggish page transitions and blocked navigation - something that was particularly noticeable on slower connections. After digging deep and even getting insight from Daniel Roe (Nuxt's lead maintainer), I wanted to share my findings and solution.

## The Initial Problem

At first, my code looked something like this:

```vue [post.vue]
<script setup>
const { data: posts } = await useFetch('/api/posts')
</script>

<template>
  <div class="posts-container">
    <h1>Latest Posts</h1>
    <div v-for="post in posts" :key="post.id" class="post-item">
      {{ post.title }}
    </div>
  </div>
</template>
```

Seems innocent enough, right? But this pattern was causing several issues:

1. Navigation would stall until the data fetch completed
2. Users had no visual feedback during the loading process
3. The page would appear frozen during data fetching

## The Root Cause

The core issue was the `await` keyword before `useFetch`. As Daniel Roe himself pointed out:

> "Unless you're statically generating your Nuxt site, then I would suggest not awaiting it - and instead handle displaying the loading state. I'd always prefer quicker feedback to the user, even if it means more work to handle the loading state."

![Daniel Roe's comment about useFetch](/dr.png "Screenshot of Daniel's comment on useFetch behavior")

## The Solution

Here's how I refactored the code to solve these issues:

```vue [post.vue]
<script setup>
const { pending, data: posts, error } = useFetch('/api/posts')
</script>

<template>
  <div class="posts-container">
    <h1>Latest Posts</h1>
    
    <!-- Loading State -->
    <div v-if="pending" class="loading-state">
      <LoadingSpinner />
    </div>
    
    <!-- Error State -->
    <div v-else-if="error" class="error-state">
      <p>Failed to load posts: {{ error.message }}</p>
      <button @click="refresh">Retry</button>
    </div>
    
    <!-- Success State -->
    <div v-else class="posts-grid">
      <div v-for="post in posts" :key="post.id" class="post-item">
        {{ post.title }}
      </div>
    </div>
  </div>
</template>
```

## Handling SSR Considerations

When working with SSR, we need to be extra careful about how we handle data fetching. Here's a pattern I've found to work well:

```vue [post.vue]
<script setup>
const { data, pending, error } = useFetch('/api/posts', {
  // Unique key for caching
  key: 'posts-list',
  
  // Default value to prevent undefined errors
  default: () => [],
  
  // Transform the data if needed
  transform: (response) => {
    return response.posts.map(post => ({
      ...post,
      createdAt: new Date(post.createdAt)
    }))
  },
  
  // Handle errors gracefully
  onResponseError({ response }) {
    console.error('Failed to fetch posts:', response._data)
  }
})
</script>
```

## Special Case: Static Site Generation

The one exception to the "don't await" rule is when you're doing static site generation. In this case, you actually want to wait for the data:

```vue [post.vue]
<script setup>
const { data } = import.meta.env.SSG 
  ? await useFetch('/api/posts')
  : useFetch('/api/posts')
</script>
```

## Creating a Reusable Composable

For better code organization, I extracted this logic into a composable:

```ts [composables/usePostsData.ts]
export const usePostsData = () => {
  const config = useRuntimeConfig()
  
  const { data, pending, error, refresh } = useFetch(`${config.apiBase}/posts`, {
    key: 'posts',
    default: () => [],
    onResponseError({ response }) {
      const error = new Error(response._data.message || 'Failed to fetch posts')
      showError({ statusCode: response.status, message: error.message })
    }
  })

  return {
    posts: data,
    isLoading: pending,
    error,
    refresh
  }
}
```

## Key Takeaways

1. Avoid awaiting `useFetch` unless you're doing static site generation
2. Always handle loading states to provide feedback to users
3. Implement proper error handling
4. Consider using a composable for reusable data fetching logic
5. Remember that faster feedback (even if loading) is better than a blocked UI

## Why This Matters

By removing the `await` and properly handling loading states, we've achieved:

- Faster perceived performance
- Better user feedback
- Smoother page transitions
- More resilient error handling
- Improved SSR compatibility

Remember, the goal isn't just to fetch data efficiently - it's to create a smooth, responsive user experience. Sometimes that means embracing asynchronous patterns and doing a bit more work to handle loading states properly.

## Conclusion

Daniel Roe's advice about not awaiting `useFetch` highlights an important principle in modern web development: prioritize user experience and perceived performance. While it might require a bit more code to handle loading states and errors properly, the end result is a much more polished and responsive application.

By following these patterns, you'll create Nuxt 3 applications that not only work well but feel well-crafted and professional. Your users might not notice the technical details, but they'll definitely appreciate the smooth, responsive experience.
