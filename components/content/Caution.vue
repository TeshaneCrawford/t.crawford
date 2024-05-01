<script lang="ts" setup></script>

<template>
  <AppAlert title="Caution">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </AppAlert>
</template>

<style scoped></style>
