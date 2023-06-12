<template>
  <div>
    <Navbar />
    <Sidebar />
    <div class="p-4 min-h-screen sm:ml-64 bg-[#f1f1f1]">
      <div class="p-4  rounded-lg dark:border-gray-700 mt-14">
        <slot></slot>
      </div>
    </div>

  </div>
</template>

<script setup>

import Navbar from './Navigation.vue';
import Sidebar from './Sidebar.vue';
</script>