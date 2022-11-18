import Vue from 'vue'
import Vuex from 'vuex'


import logo_map from '../assets/location/logo_map.svg'

import culture_vn from '../assets/location/culture_vn.svg'
import adminCenter_vn from '@/assets/location/adminCenter_vn.svg'
import sport_vn from '@/assets/location/sport_vn.svg'
import convalescence_vn from '@/assets/location/convalescence_vn.svg'
import hospital_vn from '@/assets/location/hospital_vn.svg'
import edu_vn from '@/assets/location/edu_vn.svg'

import map_vn from '@/assets/location/map_vn.svg'

import culture_en from '@/assets/location/culture_en.svg'
import adminCenter_en from '@/assets/location/adminCenter_en.svg'
import sport_en from '@/assets/location/sport_en.svg'
import convalescence_en from '@/assets/location/convalescence_en.svg'
import hospital_en from '@/assets/location/hospital_en.svg'
import edu_en from '@/assets/location/edu_en.svg'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseUrl: "http://local.rollingant.com/thuthiemzeit/hinh/",
    pano: "overview",
    location:{
      img: {
        vn:{
          map: map_vn,
          
          logo_map: logo_map,
          culture: culture_vn,
          adminCenter: adminCenter_vn,
          sport: sport_vn,
          convalescence: convalescence_vn,
          hospital: hospital_vn,
          edu: edu_vn,
        },
        en: {
          map: map_vn,
          logo_map: logo_map,
          
          culture: culture_en,
          adminCenter: adminCenter_en,
          sport: sport_en,
          convalescence: convalescence_en,
          hospital: hospital_en,
          edu: edu_en,
        }
      },
      text: {
        vn: {
          culture: "Trung tâm văn hóa",
          adminCenter: "Trung tâm hành chính",
          sport: "Trung tâm thể thao",
          convalescence: "KHU Nghĩ dưỡng",
          hospital: "Bệnh viên quốc tế",
          edu: "Trường học",
        },
        en: {
          culture: "Culture center",
          adminCenter: "administrative center",
          sport: "Sports Centre",
          convalescence: "Resort",
          hospital: "HOSPITAL",
          edu: "School",
        }
      }
    },
    menu:{
      vn:{
        views360: "360°",
        floorPlans: "Mặt bằng",
        location: "Vị Trí",
        facilities: "Tiện ích",
      },
      en: {
        views360: "360°",
        floorPlans: "floorPlans",
        location: "Location Map",
        facilities: "Facilities",
      }
    },
    facility:{
      level1: {
        
        vn:{
          title: "Tiện ích",
          text:{
            thap3: "View 1",
            h1: "View 2",
            h2: "View 3",
            relaxingSeatsArea: "View 4",
            shallowPool: "View 5",
            sunBathingArea: "View 6",
            swimmingBirdge: "View 7",
            floor53: "View 8",
          }

        },
        en:{
          title: "Facilities",
          text:{
            thap3: "View 1",
            h1: "View 2",
            h2: "View 3",
            relaxingSeatsArea: "View 4",
            shallowPool: "View 5",
            sunBathingArea: "View 6",
            swimmingBirdge: "View 7",
            floor53: "View 8",
          }
        }
    
      }
    },
    selectMinimap:{
      vn:{
        overview: "Toàn cảnh",
        floor5: "Tầng 5",
      },
      en:{
        overview: "Overiew",
        floor5: "Floor 5",
      }
    }
  },
  getters: {
    baseUrl: (state) => state.baseUrl,
    pano: (state) => state.pano,
    location: (state) => state.location,
    menu: (state) => state.menu,
    facility: (state) => state.facility,
    selectMinimap: (state) => state.selectMinimap,
    
  },
  mutations: {
    setPano(state, pano) {
      state.pano = pano
    },
  },
  actions: {
  },
  modules: {
  }
})
