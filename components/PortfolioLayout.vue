<script lang="ts" setup>
import { css } from ".././styled-system/css";
</script>

<template>
  <div>
    <AppNavbar />
    <div :class="css({ fontSize: '5xl', fontWeight: 'bold' })">Hello 🐼!</div>
  </div>
</template>

<style scoped></style>
