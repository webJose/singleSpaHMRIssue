<script setup lang="ts">
import { navigateToUrl } from 'single-spa';

defineProps<{ url: string }>();
</script>

<template>
    <a :href="url" @click.prevent="() => navigateToUrl(url)">
        <slot></slot>
    </a>
</template>
