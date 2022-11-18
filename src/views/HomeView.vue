<template>
  <div class="home">
    <Vr panoId = 'overview' miniId = '0'/>
    <Minimap/>
  </div>
</template>

<script lang="ts">

import Vr from '@/components/Vr.vue'; // @ is an alias to /src
import Minimap from '@/components/Minimap.vue'
export default({
  name: 'HomeView',
  components: {
    Vr,
    Minimap
  },
});
</script>
