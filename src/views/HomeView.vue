<script setup>
import { ref,onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const reports = ref([]);
const router = useRouter()

onMounted(async () => {


  try {
    const res = await axios.get(`https://m3h-hajime-reportcontainerapp.salmonmushroom-ce85a467.japaneast.azurecontainerapps.io/api/reports`)
    reports.value = res.data;
  }catch(err){
    console.error("取得失敗", err);
  }
});

const goToDetail = (id) => {
  router.push(`/reports/${id}`)
}

</script>

<template>
  <main>
   <h2>帳票一覧</h2>
    <RouterLink to="/">戻る</RouterLink>
    <ul>
      <li v-for="report in reports" :key="report.id">
        {{ report.date }} - {{ report.status }}
        <button @click="goToDetail(report.id)">詳細</button>
      </li>
    </ul>
  </main>
</template>
