<script setup>
import { usePdfStore } from '@/stores/pdfStore'
import { useRouter } from 'vue-router'
import axios from 'axios';
const store = usePdfStore()
const router = useRouter()

const pdfDone = async () => {
try{
    await axios.post(`https://m3h-hajime-reportcontainerapp.salmonmushroom-ce85a467.japaneast.azurecontainerapps.io/api/reports`,
    {
      date: store.date,
      currentHolder: store.holders[0],
      status: "PDF登録",
      description: "ここにメモを書いてください",
      holders: store.holders.join(',')
    })
    router.push(`/upload/check/done`)
}catch(err){
    console.error("更新失敗",err)
}
}
</script>




<template>


    <div>
        <input v-model="store.date"
        />
    </div>
    
    <div v-for="(holder, index) in store.holders"
         :key="index">
        <label>ユーザー</label>
        <input v-model="store.holders[index]" />
    </div>

    <button @click="pdfDone">この内容でDBに登録する</button>


　<RouterLink to="/upload">戻る</RouterLink>  
</template>