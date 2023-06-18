<template>
    <div>
        <li>
            <router-link @click="CloseMenu" class=" flex items-center px-2 py-[13px]  rounded-lg" :to="to">
                <slot :class="getClassActive(title)"></slot>
                <span class="ml-3 text-menu">{{ title }}</span>
            </router-link>

        </li>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
        },
        to: {
            type: Object,
        }
    },
    methods: {
        getClassActive(path) {
            return this.$route.path === path ? this.$router.options.linkActiveClass : '';
        },
        CloseMenu() {
            const widthScreen = window.screen.availWidth;
            console.log(widthScreen);
            if (widthScreen <= 642) {
                const hamburger = document.querySelector('#hamburger');
                hamburger.click()
            }
        }

    },
}
</script>