<script>
import { RouterView } from 'vue-router'
import TheNav from '@/components/Template/TheNav.vue';
import TheFooter from '@/components/Template/TheFooter.vue';

export default {
  components: {
    TheNav,
    TheFooter,
  },
  watch: {
    $route(to) {
      document.title = to.meta.title || 'Pokemon Shop';
    },
  },
}
</script>

<template>
  <TheNav v-if="$route.name !== 'login'" />
  <RouterView />
  <TheFooter v-if="$route.name !== 'login'" />
</template>