<script setup>
import Layout from './views/admin/Layout.vue';
import { RouterLink, RouterView } from 'vue-router'
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<template>
  <div v-if="route.name != 'login'">
    <transition name="slide-fade">
      <Layout>

        <router-view v-slot="{ Component }">
          <transition name="route" mode="out-in">
            <component :is="Component"></component>
          </transition>
        </router-view>

      </Layout>
    </transition>
  </div>
</template>

<style scoped>
.route-enter-active,
.route-leave-active {
  transition: opacity 0.5s ease;
}

.route-enter-from,
.route-leave-to {
  opacity: 0;
}
</style>
