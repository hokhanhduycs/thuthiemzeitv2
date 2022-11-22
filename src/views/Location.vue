<template>
  <div class="location">
    <div class="location-map">

      <img src="@/assets/location/map_vn.svg" alt="map">
      
      <div v-show="false">
        <img v-show="mapItem == 1" src="@/assets/location/culture_vn.svg" alt="map">
        <img v-show="mapItem == 2" src="@/assets/location/adminCenter_vn.svg" alt="map">
        <img v-show="mapItem == 3" src="@/assets/location/sport_vn.svg" alt="map">
        <img v-show="mapItem == 4" src="@/assets/location/convalescence_vn.svg" alt="map">
        <img v-show="mapItem == 5" src="@/assets/location/hospital_vn.svg" alt="map">
        <img v-show="mapItem == 6" src="@/assets/location/edu_vn.svg" alt="map">

      </div>
      <div v-show="true">
        <img v-show="mapItem == 1"  src="@/assets/location/culture_en.svg" alt="map">
        <img v-show="mapItem == 2" src="@/assets/location/adminCenter_en.svg" alt="map">
        <img v-show="mapItem == 3" src="@/assets/location/sport_en.svg" alt="map">
        <img v-show="mapItem == 4" src="@/assets/location/convalescence_en.svg" alt="map">
        <img v-show="mapItem == 5" src="@/assets/location/hospital_en.svg" alt="map">
        <img v-show="mapItem == 6" src="@/assets/location/edu_en.svg" alt="map">
      </div>

      <img src="@/assets/location/logo_map.svg" alt="logo map">


    </div>
    <div class="location-option">
      <Btn :class="{active: mapItem == 1}" @click.native="mapItem = 1" type="text-btn"> <span><iconCulture/></span> 
       {{lang == "vn"? "Trung tâm văn hóa": "culture center"}} 
      </Btn>
      <Btn :class="{active: mapItem == 2}" @click.native="mapItem = 2" type="text-btn" > <span><iconAdminCenter/></span> 
        {{lang == "vn"? "Trung tâm hành chính": "Administrative Center"}} 
      </Btn>
      <Btn :class="{active: mapItem == 3}" @click.native="mapItem = 3" type="text-btn"> <span><iconSport/></span> 
        {{lang == "vn"? "Trung tâm Thể thao": "Sports Center"}} 
      </Btn>
      <Btn :class="{active: mapItem == 4}" @click.native="mapItem = 4" type="text-btn"> <span><iconConvalescence/></span> 
        {{lang == "vn"? "Khu Nghĩ Dưỡng": "Resort"}} 
      </Btn>
      <Btn :class="{active: mapItem == 5}" @click.native="mapItem = 5" type="text-btn"> <span><iconHospital/></span> 
        {{lang == "vn"? "Bệnh viện quốc tế": "Hospital"}} 
      </Btn>
      <Btn :class="{active: mapItem == 6}" @click.native="mapItem = 6" type="text-btn"> <span><iconEdu/></span> 
        {{lang == "vn"? "Trường học": "School"}}
      </Btn>
    </div>
  </div>
</template>
<script>

import { mapGetters } from 'vuex'

import Btn from '@/components/Button.vue'
import iconCulture from "@/Icons/iconCulture.vue"
import iconSport from "@/Icons/iconSport.vue"
import iconHospital from "@/Icons/iconHospital.vue"
import iconEdu from "@/Icons/iconEdu.vue"
import iconConvalescence from "@/Icons/iconConvalescence.vue"
import iconAdminCenter from "@/Icons/iconAdminCenter.vue"

export default {
    components: {
        Btn,
        iconCulture,
        iconSport,
        iconHospital,
        iconEdu,
        iconConvalescence,
        iconAdminCenter,
    },
    data(){
      return{
        mapItem: -1
      }

    },
    computed: {
        ...mapGetters(["lang"]),
    },
    methods:{
      test(){
        console.log("call fn test in location");
      }
    }

}
</script>
<style lang="scss" scoped>
  .location-map{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgb(250, 244, 244);

    img{
      position: absolute;
      top: 50%;
      left: 50%;
      height: 100%;
      width: 100%;
      transform: translate(-50%, -50%);
      object-fit: fill;
    }
  }
  .location-option{
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    right: 5%;
    border: var(--default-boder-bg) transparent solid;
        background-color: var(--primary-bg);
    &  .button{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 12px;

      &  span{
        margin-right: var(--default-boder-bg);
      }
    }
    .button ~ .button{
      margin-top: var(--default-boder-bg);
    }
  }
</style>