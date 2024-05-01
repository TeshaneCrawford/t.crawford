<script lang="ts" setup></script>

<template>
  <AppAlert title="Note">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </AppAlert>
</template>

<style scoped></style>
