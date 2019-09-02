<template functional>
  <div>
    <p v-for="item in props.items" @click="props.itemClick(item);">{{ item }}</p>
  </div>
</template>

<!--<script>-->
  <!--export default {-->
    <!--props: ["items"]-->
  <!--};-->
<!--</script>-->

