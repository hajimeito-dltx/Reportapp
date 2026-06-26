<script setup>
import { useRoute, useRouter } from 'vue-router'
import { usePdfStore } from '@/stores/pdfStore'
import { ref } from 'vue';
import axios from 'axios';

const router = useRouter()
const store = usePdfStore()

const goNewPdf = async () => {
try{
  const res = await axios.get(`https://m3h-hajime-reportcontainerapp.salmonmushroom-ce85a467.japaneast.azurecontainerapps.io/api/pdfanalyze`)

  store.date = res.data.date
  store.holders = res.data.holders

  router.push(`/upload/check`)
}catch(err){
  console.error("失敗",err)
}
}

</script>

<template>

  <p>PDFをC:\VSworkspace3\demo\src\main\resourcesここにsample.pdfこの名前で入れると反応する</p>
 <button @click="goNewPdf">登録PDFの内容を確認する</button>
<br>
 <RouterLink to="/">戻る</RouterLink>

</template>