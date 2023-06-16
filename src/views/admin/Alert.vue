<template>
    <div>
        <div class="grid grid-cols-1 gap-1 mb-4">
            <div class=" rounded bg-gray-50 dark:bg-gray-800">

                <div class="tea-card">
                    <div>
                        <h3 class="title-component ">Default alert</h3>
                        <DefaultAlertVue class="text-blue-800 bg-blue-50" />
                        <DefaultAlertVue class="text-red-800 bg-red-50" />
                        <DefaultAlertVue class="text-green-800 bg-green-50" />
                        <DefaultAlertVue class="text-yellow-800 bg-yellow-50" />
                        <DefaultAlertVue class="text-gray-800 bg-gray-50" />

                    </div>
                    <div>
                        <h3 class="title-component">Icon alert</h3>
                        <IconAlert bg="bg-red-50" color="text-red-800">
                            <template v-slot:description>
                                A simple info alert with an .
                                Give it a click if
                                you like.
                            </template>
                            <template v-slot:icon>
                                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </template>

                        </IconAlert>



                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import DefaultAlertVue from './../../components/alert/DefaultAlert.vue';
import IconAlert from './../../components/alert/IconAlert.vue';
</script>