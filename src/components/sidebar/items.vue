<template>
    <div>
        <li>
            <router-link class=" flex items-center px-2 py-[13px]  rounded-lg" :to="to">
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
        }
    },
}
</script>