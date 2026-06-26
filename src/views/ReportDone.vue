<script setup>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()

setTimeout(() => {
 　router.push(`/reports`)
}, 2000)
</script>

<template>
<h2>自動で画面が遷移します</h2>
</template>