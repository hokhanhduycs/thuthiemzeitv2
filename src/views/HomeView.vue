<template>
  <div class="home">
    <Vr panoId = 'overview' miniId = '0'/>
    
  </div>
</template>

<script lang="ts">

import Vr from '@/components/Vr.vue'; // @ is an alias to /src

export default({
  name: 'HomeView',
  components: {
    Vr,
  },
});
</script>
