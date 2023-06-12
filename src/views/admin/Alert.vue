<template>
    <div>
        <div class="grid grid-cols-1 gap-1 mb-4">
            <div class=" rounded bg-gray-50 dark:bg-gray-800">

                <div
                    class="w-100 p-6 bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 shadow-my">
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

import Layout from './Layout.vue';
import { onMounted } from 'vue'
import { Modal } from 'flowbite'

onMounted(() => {
    const $buttonElement = document.querySelector('#button');
    const $modalElement = document.querySelector('#modal');
    const $closeButton = document.querySelector('#closeButton');

    const modalOptions = {
        backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40'
    }

    if ($modalElement) {
        const modal = new Modal($modalElement, modalOptions);
        $buttonElement.addEventListener('click', () => modal.toggle());
        $closeButton.addEventListener('click', () => modal.hide());

        // programatically show
        // modal.show();
    }
})
</script>