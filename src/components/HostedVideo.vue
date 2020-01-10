<template>
    <iframe
        v-if="item.videoHost.value.find(i => i.codename ==='vimeo')"
        class="hosted-video__wrapper"
        :src="`https://player.vimeo.com/video/${item.videoId.value}}?title=0&byline=0&portrait=0`"
        width="640"
        height="360"
        frameborder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
    >
    </iframe>
    <iframe
        v-else-if="item.videoHost.value.find(i => i.codename === 'youtube')"
        class="hosted-video__wrapper"
        width="560"
        height="315"
        :src="`https://www.youtube.com/embed/${item.videoId.value}`"
        frameborder="0"
        allowfullscreen
    >
    </iframe>
</template>
<script>
export default {
  props: ['item']
}
</script>
