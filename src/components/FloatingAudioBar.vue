<template>
  <div>
    <div class="fixed bottom-0 inset-x-0 pb-2 sm:pb-5 z-50">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="p-2 rounded-lg bg-white shadow-lg sm:p-3">
          <div class="hidden">
            <audio ref="music" @timeupdate="timeUpdate1()" controls name="media">
              <source src="https://upload.wikimedia.org/wikipedia/en/a/a9/Webern_-_Sehr_langsam.ogg" type="audio/aac">
            </audio>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <span class="flex p-2">
                <img class="w-10" src="../assets/img/book.png" alt="">
              </span>
              <div class="ml-3 truncate">
                <div class="font-medium">Men Are From Mars</div>
              </div>
            </div>
            <div class="sm:ml-2 flex items-center">
              <RewindIcon class="h-8 w-8 text-primary" aria-hidden="true" />
              <ArrowCircleLeftIcon  @click="prevSeconds(10)" class="h-8 w-8 text-primary" aria-hidden="true" />
              <div>
                <a @click="playSound" v-if="music.paused">
                  <PlayIcon class="h-12 w-12 text-primary" aria-hidden="true" />
                </a>
                <a @click="playSound" v-else>
                  <PauseIcon class="h-12 w-12 text-primary" aria-hidden="true" />
                </a>
              </div>
              <ArrowCircleRightIcon  @click="nextSeconds(10)" class="h-8 w-8 text-primary" aria-hidden="true" />
              <FastForwardIcon class="h-8 w-8 mr-3 text-primary" aria-hidden="true" />
              <div class="relative pt-1 mr-3">
                <input @change="changeTime()" min="0" max="100" v-model="music.time" type="range" id="customRange1" />
              </div>
            </div>
            <div class="sm:ml-2">
              <XIcon class="h-6 w-6" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import {
  BellIcon,
  MenuAlt2Icon,
  XIcon,
  ChevronDownIcon,
  AnnotationIcon,
  SpeakerphoneIcon,
} from '@heroicons/vue/outline'
import { SearchIcon, PlayIcon, PauseIcon, RewindIcon, FastForwardIcon, ArrowCircleRightIcon, ArrowCircleLeftIcon  } from '@heroicons/vue/solid'
import DashNav from '../layout/DashNav.vue'
import Comments from '../components/Comments.vue'
import RecentPublished from '../components/RecentPublished.vue'


export default {
  components: {
    BellIcon,
    MenuAlt2Icon,
    SearchIcon,
    XIcon,
    ChevronDownIcon,
    AnnotationIcon,
    SpeakerphoneIcon,
    PlayIcon,
    RewindIcon,
    FastForwardIcon,
    PauseIcon,
    ArrowCircleRightIcon,
    DashNav,
    Comments,
    RecentPublished,
    ArrowCircleLeftIcon,
},
  data() {
    return {
      music: {
        paused: true,
        time: 0,
      },
      openTab: 1,
    }
  },
  methods: {
    toggleTabs(tabNumber){
      this.openTab = tabNumber
    },
    changeTime() {
      const pct = this.music.time / 100;
      this.$refs.music.currentTime = (this.$refs.music.duration || 0) * pct;
    },
    timeUpdate1() {
      this.music.time = this.$refs.music.currentTime / this.$refs.music.duration * 100;
    },
    playSound() {
      window.music= this.$refs.music
      if (this.$refs.music.paused) {
        this.$refs.music.play()
        this.music.paused = false
        this.time = this.$refs.music.currentTime / this.$refs.music.duration * 100;
      } else {
        this.$refs.music.pause()
        this.music.paused = true
      }
    },
    nextSeconds(num) {
      this.$refs.music.currentTime += num
    },
    prevSeconds(num) {
      this.$refs.music.currentTime -= num
    },
  },
}
</script>

<style lang="css">
@media screen and (-webkit-min-device-pixel-ratio:0) {
  input[type='range'] {
      overflow: hidden;
      width: 100%;
      -webkit-appearance: none;
      background-color: rgb(219, 216, 216);
      height: 8px;
      border-radius: 50px;
    }
    
    input[type='range']::-webkit-slider-runnable-track {
      height: 12px;
      -webkit-appearance: none;
      color: #3A9679;
      margin-top: -1px;
    }
    
    input[type='range']::-webkit-slider-thumb {
      width: 10px;
      -webkit-appearance: none;
      height: 10px;
      cursor: pointer;
      background:white;
      box-shadow: -80px 0 0 80px #3A9679;
      border: 1px solid #3A9679;
      border-radius: 50%;
    }
}
</style>