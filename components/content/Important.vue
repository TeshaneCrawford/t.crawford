<script lang="ts" setup></script>

<template>
  <AppAlert title="Important">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </AppAlert>
</template>

<style scoped></style>
