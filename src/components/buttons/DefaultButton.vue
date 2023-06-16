<template>
    <div>
        <button type="button" :class="[bg, color, hover]"
            class="  focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">Default</button>
    </div>
</template>

<script>
export default {
    props: ['bg', 'color', 'hover']
}
</script>