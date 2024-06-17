<script setup lang="ts">
import { Github, Mail } from 'lucide-vue-next'
</script>

<template>
  <header></header>
  <body class="bg-purple-dark">
    <div class="flex h-screen">
      <div class="m-auto">
        <img alt="Hydra" class="logo" src="@/assets/logo.svg" width="500" height="500" />
        <div class="flex justify-center gap-4">
          <a href="https://github.com/hydra-tex" target="_blank">
            <Github color="#c000ed" :size="32" />
          </a>
          <a href="mailto:inquiry@hydra.bg">
            <Mail color="#c000ed" :size="32" />
          </a>
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped></style>
