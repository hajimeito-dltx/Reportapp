<script setup>
//前の画面で、その情報をこのページでも保持
//それをもとに編集し、これをPUTする。
import { ref,onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios';

const report = ref({holders: ""});
const route = useRoute()
const router = useRouter()


onMounted(async () => {
    const id = route.params.id;
    console.log("ID:", id);
  try {
    const res = await axios.get(`https://m3h-hajime-reportcontainerapp.salmonmushroom-ce85a467.japaneast.azurecontainerapps.io/api/reports/${id}`);
    report.value = res.data;
//ここに入ってる
    console.log(report.value.holders)
//これが選択肢
  }catch(err){
    console.error("取得失敗", err);
  }
});

const goToDone = async () => {
 const id = route.params.id;
try{
    await axios.put(`https://m3h-hajime-reportcontainerapp.salmonmushroom-ce85a467.japaneast.azurecontainerapps.io/api/reports/${id}`,report.value)
  router.push(`/reports/${route.params.id}/done`)
}catch(err){
    console.error("更新失敗", err)
}
}

</script>

<template>

<!--  description,status,currentHolderを編集するための画面である-->
<!-- Statusは初期値を決めておく -->
<!--　ここの　-->

    <input  type="text"
            v-model="report.description"
    />
<br>
<br>



    <select v-model="report.currentHolder">
        <option
         v-for = "holder in report.holders.split(',')"
         :key = "holder"
         :value = "holder"
        >
        {{ holder }}
        </option>
    </select>
    <p>帳票所有者: {{ report.currentHolder }}</p>
<br>



    <select v-model="report.status">
        <option>完了</option>
        <option>進行中</option>
    </select>
    <p>選択: {{ report.status }}</p>
<br>
　<RouterLink to="/reports">戻る</RouterLink>  
  <button @click="goToDone">編集内容を保存</button>
</template>