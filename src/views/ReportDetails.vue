<script setup>
import { ref,onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios';

const report = ref([]);
const route = useRoute()
const router = useRouter()

onMounted(async () => {
    const id = route.params.id;
    console.log("ID:", id);
  try {
    const res = await axios.get(`https://m3h-hajime-reportcontainerapp.salmonmushroom-ce85a467.japaneast.azurecontainerapps.io/api/reports/${id}`);
    report.value = res.data;
  }catch(err){
    console.error("取得失敗", err);
  }
});

const goToEdit = () => {
  const id = route.params.id
  router.push(`/reports/${route.params.id}/edit`)
}

//routeが情報で、routerが操作

</script>

<template>
  <main>

    <h2>詳細画面</h2>
     <p>日付: {{ report.date }}</p>
     <p>帳票保持者: {{ report.currentHolder }}</p>
     <p>状態: {{ report.status }}</p>
     <p>memo: {{ report.description }}</p>
     <p>回覧者: {{ report.holders }}</p>
     <br>
     <button @click="goToEdit">編集</button>
     <br>
  　<RouterLink to="/reports">戻る</RouterLink>     
  </main>
</template>