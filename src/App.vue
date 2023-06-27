<script setup>
import Layout from './views/admin/Layout.vue';
import { RouterView } from 'vue-router'
import { useRoute } from 'vue-router';
import "flowbite";

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
