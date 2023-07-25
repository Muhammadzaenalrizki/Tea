<template>
  <div>
    <Sidebar />
    <div class="p-4 min-h-screen sm:ml-64 bg-[#F8F9FE]">
      <div class="p-4  rounded-lg dark:border-gray-700 mt-14">
        <router-view >
        </router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import "flowbite";
import Sidebar from './Sidebar.vue';
</script>
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