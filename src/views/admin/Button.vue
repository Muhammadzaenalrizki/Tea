<template>
    <div>
        <div class="grid grid-cols-1 gap-1 mb-4">
            <div class=" rounded bg-gray-50 dark:bg-gray-800">

                <div class="tea-card">
                    <div>
                        <h3 class="title-component">Default buttons</h3>
                        <DefaultButton bg="bg-blue-700" color="text-white " hover="hover:bg-blue-800">
                        </DefaultButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import DefaultButton from '../../components/buttons/DefaultButton.vue';
</script>