<template>
  <div class="location">
    <div class="location-map">

      <img src="@/assets/location/map_vn.svg" alt="map">
      
      <div v-show="true">
        <img v-show="true" src="@/assets/location/culture_vn.svg" alt="map">
        <img v-show="false" src="@/assets/location/adminCenter_vn.svg" alt="map">
        <img v-show="false" src="@/assets/location/sport_vn.svg" alt="map">
        <img v-show="false" src="@/assets/location/convalescence_vn.svg" alt="map">
        <img v-show="false" src="@/assets/location/hospital_vn.svg" alt="map">
        <img v-show="false" src="@/assets/location/edu_vn.svg" alt="map">

      </div>
      <div v-show="false">
        <img v-show="false"  src="@/assets/location/culture_en.svg" alt="map">
        <img v-show="false" src="@/assets/location/adminCenter_en.svg" alt="map">
        <img v-show="false" src="@/assets/location/sport_en.svg" alt="map">
        <img v-show="false" src="@/assets/location/convalescence_en.svg" alt="map">
        <img v-show="false" src="@/assets/location/hospital_en.svg" alt="map">
        <img v-show="false" src="@/assets/location/edu_en.svg" alt="map">
      </div>

      <img src="@/assets/location/logo_map.svg" alt="logo map">


    </div>
    <div class="location-option">
      <Btn type="text-btn"> <span><iconCulture/></span> 
        culture center
      </Btn>
      <Btn type="text-btn" > <span><iconAdminCenter/></span> 
        Administrative Center
      </Btn>
      <Btn type="text-btn"> <span><iconSport/></span> 
        Sports Center
      </Btn>
      <Btn type="text-btn"> <span><iconConvalescence/></span> 
        Resort
      </Btn>
      <Btn type="text-btn"> <span><iconEdu/></span> 
        span>School
      </Btn>
    </div>
  </div>
</template>
<script>
import Btn from '@/components/Button.vue'
import iconCulture from "@/Icons/iconCulture.vue"
import iconSport from "@/Icons/iconSport.vue"
import iconHospital from "@/Icons/iconHospital.vue"
import iconEdu from "@/Icons/iconEdu.vue"
import iconConvalescence from "@/Icons/iconConvalescence.vue"
import iconAdminCenter from "@/Icons/iconAdminCenter.vue"

// img map

// import logo_map from '@/assets/location/logo_map.svg'
// 
// import culture_vn from '@/assets/location/culture_vn.svg'
// import adminCenter_vn from '@/assets/location/adminCenter_vn.svg'
// import sport_vn from '@/assets/location/sport_vn.svg'
// import convalescence_vn from '@/assets/location/convalescence_vn.svg'
// import hospital_vn from '@/assets/location/hospital_vn.svg'
// import edu_vn from '@/assets/location/edu_vn.svg'

import map from '@/assets/location/map_vn.svg'

// import culture_en from '@/assets/location/culture_en.svg'
// import adminCenter_en from '@/assets/location/adminCenter_en.svg'
// import sport_en from '@/assets/location/sport_en.svg'
// import convalescence_en from '@/assets/location/convalescence_en.svg'
// import hospital_en from '@/assets/location/hospital_en.svg'
// import edu_en from '@/assets/location/edu_en.svg'


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
    data:{
      map: map,
      // img: {
      //   logo_map: logo_map,
      //   vn:{
      //     logo_map: logo_map,
      //     culture: culture_vn,
      //     adminCenter: adminCenter_vn,
      //     sport: sport_vn,
      //     convalescence: convalescence_vn,
      //     hospital: hospital_vn,
      //     edu: edu_vn,
      //   },
      //   en: {
      //     culture: culture_en,
      //     adminCenter: adminCenter_en,
      //     sport: sport_en,
      //     convalescence: convalescence_en,
      //     hospital: hospital_en,
      //     edu: edu_en,
      //   }
      // },
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