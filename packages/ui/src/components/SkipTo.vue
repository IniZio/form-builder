<template>
<a role="link" tabindex="0" :href="props.to" ref="skipLink" class="skip-link">Skip to main content</a>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useEventListener } from '@vueuse/core'

import { focusOnElement } from '../commands/focusOnElement'

const props = defineProps({
  to: {
    type: String,
    default: '#main'
  }
})

const skipLink = ref<HTMLElement | null>(null)

useEventListener(window, 'popstate', () => {
  if (skipLink.value) {
    focusOnElement(skipLink.value)
  }
})
</script>

<style scoped>
.skip-link {
  white-space: nowrap;
  margin: 1em auto;
  top: 0;
  position: fixed;
  left: 50%;
  margin-left: -72px;
  opacity: 0;
}
.skip-link:focus {
  opacity: 1;
  background-color: white;
  padding: 0.5em;
  border: 1px solid black;
}
</style>