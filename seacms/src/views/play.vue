<template>
<div>
    <h1>Vue-DPlayer</h1>
    <h2>A Vue 2.x component of <a href="https://github.com/DIYgod/DPlayer" target="_blank">DPlayer</a></h2>
    <dplayer :options="options" @play="play" ref="player"> </dplayer>
    <button class="btn btn-primary" @click="next">switch</button>
    </div>
</template>

<script type="text/ecmascript-6">
import dplayer from 'vue-dplayer'
import 'vue-dplayer/dist/vue-dplayer.css'
console.log(dplayer)

export default {
  name: 'in-video',
  props: {
    source: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      dp: null,
      options: {
        video: {
          url: '',
          front: this.front,
          next: this.next,
          quality: [
            {
              name: 'm3u8',
              url: 'https://pl.dogecloud.com/vcloud/hls/m3u8/99552?tm=1599367460&vtype=96&uid=17&sign=53b2c6b86575a8f40c55cd71a275ef1a&icp=0&durlimit=0&server=s5&vkey=748B04&token=4b125ef8ad0b3394ffbcce830754ebf0&oi=2874162804&ext=.m3u8',
              type: 'hls'
            },
            {
              name: 'mp4',
              url: 'https://webtorrent.io/torrents/Sintel/Sintel.mp4',
              type: 'normal'
            }
          ],
          defaultQuality: 0,
          pic: 'demo.png',
          thumbnails: 'thumbnails.jpg'
        },
        pluginOptions: {
          hls: {
            // hls config
          }
        },
        autoplay: false,
        contextmenu: [
          {
            text: 'GitHub',
            link: 'https://github.com/MoePlayer/vue-dplayer'
          }
        ]
      }
    }
  },
  mounted () {
    console.log('mounted', this.$refs.player)
    this.dp = this.$refs.player.dp
    this.setVideoUrl(this.source)
  },
  created () {
    console.log('create', this.$refs.player)
  },
  methods: {
    // 设置视频播放路径
    setVideoUrl (url) {
      this.dp.switchVideo({
        url: url
      })
    },
    play () {
      console.log('play callback')
    },
    front () {
      console.log('front')
    },
    next () {
      console.log('next')
    }
  },
  components: {
    dplayer
  }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    text-align: center;
  }
  a {
    color: #42b983;
    text-decoration: none;
  }
  .dplayer {
    width: 800px;
    margin: 50px auto;
  }
  h1 {
    font-size: 54px;
    color: #42b983;
    margin: 30px 0 10px;
  }
  h2 {
    font-size: 22px;
    color: #555;
  }
  @media (max-width: 768px) {
    .dplayer {
      width: 90%;
    }
    h1 {
      font-size: 30px;
    }
    h2 {
      font-size: 16px;
    }
  }
</style>
