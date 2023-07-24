<template>
    <div>
        <div class="grid grid-cols-1 gap-1 mb-4">
            <Card>
                <!-- default buttons -->
                <h3 class="title-component">Default buttons</h3>
                <div class="flex flex-wrap">
                    <ButtonDefault class="default-button bg-blue-500 text-white hover:bg-blue-700">Default</ButtonDefault>
                    <ButtonDefault class="default-button bg-red-500 text-white hover:bg-red-700">Default</ButtonDefault>
                    <ButtonDefault class="default-button bg-green-500 text-white hover:bg-green-700">
                        Default</ButtonDefault>
                    <ButtonDefault class="default-button bg-yellow-300 text-white hover:bg-yellow-500">
                        Default</ButtonDefault>
                    <ButtonDefault class="default-button bg-gray-500 text-white hover:bg-gray-700">
                        Default</ButtonDefault>
                </div>
            </Card>

        </div>
    </div>
</template>

<script setup>
import ButtonDefault from './../../components/buttons/DefaultButton.vue';
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>