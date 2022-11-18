<template >
    <div>
        <div id="streetview" class="app3d"></div>
        <div id="hotspot-info" class="app3d"></div>
        <div id="mini-map" class="mini-map"></div>
    </div>
  </template>
  <script>
  
    import PanoViewer from "@/app/viewer"
    import MiniMap from "@/app/minimap/mscene"
    const baseUrl = "http://local.rollingant.com/thuthiemzeit/hinh/"
    let viewer, minimap, el, curr, opt, minimapopt
  export default {
    props: {
        panoId: String,
        miniId: String
    },
    mounted(){
        el = document.getElementById('streetview')
        // info = document.getElementById('hotspot-info')
        opt = {
            baseUrl: baseUrl,
            canZoom: true,
            projectId: '61ea54ed25',
            transitionscale: 0,
            showHotspot:true
        }
        viewer = new PanoViewer(el, opt)
  
        minimapopt = {
            baseUrl: baseUrl,
            runtime: true,
            border: 'all',
            colorError: 'blue',
            radius: 5,
            borderRadius: 2,
            canSelect: false,
            canPan: false,
            canZoom: false,
            isCustomColor: true,
            camera: {
                path: 'imgs/navigation_black_24dp.svg',
                transform: {
                    x: 32,
                    y: 32,
                    width: 64,
                    height: 64,
                    r: 45
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
    },
    methods:{
        loadPanoById(id, firstload = false) {
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
              background: #000;
              width: 50px;
              height: 50px;
          }
  
          .mini-map {
              position: fixed;
              right: calc(var(--default-boder-bg) *4 + 44px);
              bottom: calc(var(--default-boder-bg) *4 + 44px);
              width: 300px;
              height: 300px;
              /* border: 5px orange solid; */
          }
  
          #hotspot-info {
              pointer-events: none;
          }
  
          .pano-hotspot {
              position: absolute;
              padding: 2px 8px;
              background-color: rgba(240, 248, 255, .7607843137254902);
              border-radius: 5px;
              font-size: small;
          }
  </style>