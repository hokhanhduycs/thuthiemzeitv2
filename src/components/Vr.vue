<template >
    <div>
        <div id="streetview" class="app3d"></div>
        <div id="hotspot-info"  class="app3d hotspot-info"></div>
        <div :class="{show: isMap}" id="mini-map" class="mini-map"></div>
    </div>
  </template>
  <script>

    import {mapGetters, mapMutations} from "vuex"
  
    import PanoViewer from "@/app/viewer"
    import MiniMap from "@/app/minimap/mscene"
    const baseUrl = "http://local.rollingant.com/thuthiemzeit/hinhtest/"
    let viewer, minimap, el, curr, opt, minimapopt, info
  export default {
    props: {
        panoId: String,
        miniId: String
    },
    computed: {
        ...mapGetters(["pano", "minimap", "zoom", "rotation", "isMap"]),
    },
    mounted(){
        info = document.getElementById('hotspot-info') 
        el = document.getElementById('streetview')
        // info = document.getElementById('hotspot-info')
        opt = {
            baseUrl: baseUrl,
            canZoom: true,
            projectId: '61ea54ed25',
            transitionscale: 0,
            showHotspot:true,
            updateOnChange: false,
        }
        viewer = new PanoViewer(el, opt)
  
        minimapopt = {
            baseUrl: baseUrl,
            runtime: true,
            border: 'all',
            colorError: 'blue',
            radius: 6,
            borderRadius: 1,
            canSelect: false,
            canPan: false,
            canZoom: false,
            isCustomColor: true,
            camera: {
                path: 'imgs/cung.svg',
                transform: {
                    x: 75,
                    y: 7,
                    width: 150,
                    height: 100,
                    r: 47
                }
            }
        }
        minimap = new MiniMap(document.getElementById('mini-map'), minimapopt)
        minimap.load(this.miniId)
        minimap.onclick = (hp) => {
          console.log(hp.name);
            this.loadPanoById(hp.name)
        }
  
        viewer.init().then(() => {
            this.loadPanoById(this.panoId, true)
        })
  
        viewer.onChangeRot = (z) => {
            if (curr)
                minimap.updateCam(curr.pos, z);
        }
        viewer.onRequestLoadPano = (hp) => {
            console.log('onRequestLoadPano')
            this.loadPanoById(hp.name)
        }
        const allhotspot = []
        viewer.onChangeHotspot = (ls) => {
            for (const hp of allhotspot) {
                hp.el.style = `display:none`
            }
            for (const item of ls) {
                let hp = allhotspot.find(x => x.name == item.name)
                if (!hp) {
                    hp = {
                        name: item.name,
                        el: this.createElementFromHTML(`<div class="pano-hotspot" ><img src="imgs/hotspot.svg"/></div>`)
                    }
                    allhotspot.push(hp)
                    info.appendChild(hp.el)
                }
                hp.el.style = `position: absolute; top:${item.pos2d.y - 36}px;left:${item.pos2d.x - 36}px; width: 50px;height:50px`

            }
        }
    },
    methods:{
        ...mapMutations(["setPano"]),
        loadPanoById(id, firstload = false) {
            this.setPano(id)
            viewer
                .loadPanoById(id, firstload)
                
                // .loadPanoById(id + 'vn', firstload)
                .then((res) => {
                    curr = res
                    minimap.updateCam(curr.pos, curr.rotZ)
                })
                .catch(console.log)
        },
        createElementFromHTML(htmlString) {
            const div = document.createElement('div');
            div.innerHTML = htmlString.trim();
  
            // Change this to div.childNodes to support multiple top-level nodes
            return div.firstChild;
        }
  
    },
    watch:{
        pano(){
            this.loadPanoById(this.pano, true)
        },
        minimap(){
            minimap.load(this.minimap)
        }, 
        zoom(){
            console.log(`zoom`);
            if(this.zoom > 0){
                viewer.zoomOut()
            } else if(this.zoom < 0){
                viewer.zoomIn()
            }
        },
        rotation(){
            viewer.autoRot(this.rotation)
        }
    }
  
  }
  </script>
  <style scoped> 
  .app3d {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
    }

    .app3d.hotspot-clickable {
        cursor: pointer;
    }

    .mini-map {
        position: fixed;
              right: calc(var(--default-boder-bg) *4 + 44px);
              bottom: calc(var(--default-boder-bg) *4 + 44px);
        width: 300px;
        height: 300px;
        background-color: #faebd77a;
        border-radius: 50px 0 0 0;
    }

    #hotspot-info {
        pointer-events: none;
    }

    .pano-hotspot {
        position: absolute;
        width: 72px;
        height: 72px;
    }
  </style>