<template>
  <div>
    <Sidebar />
    <div class="p-4 min-h-screen sm:ml-64 bg-[#F8F9FE]">
      <div class="p-4  rounded-lg dark:border-gray-700 mt-14">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from './Sidebar.vue';
</script>