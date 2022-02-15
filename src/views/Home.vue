<template>
  <div>
    <DashNav />
    <div class="md:pl-64 flex flex-col flex-1">
      <main class="bg-primary-bg h-screen	">
        <div class="py-6">
            <div class="grid grid-cols-3 gap-4 px-8">
              <div class=""> 
                  <div class="max-w-sm relative pb-6">
                    <img class="w-full" src="../assets/img/book.png" alt="Mountain">
                    <div class="flex items-center absolute bottom-0 left-0 right-0 px-6">
                      <div class="bg-primary rounded-l-lg py-3 justify-center text-white flex items-center w-full mr-1">
                          <img class="mr-3 w-8" src="../assets/img/svg/white-head.svg">
                        <div>
                          <div class="text-base font-semibold">Listen</div>
                          <div class="text-sm">12.min</div>
                        </div>
                      </div>
                      <div class="bg-primary rounded-r-lg py-3 justify-center text-white flex items-center w-full">
                        <img class="mr-3 w-8" src="../assets/img/svg/white-book.svg">
                        <div>
                          <div class="text-base font-semibold">Read</div>
                          <div class="text-sm">08.Pages</div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
              <div class="col-span-2 w-7/12">
                <h1 class="text-4xl font-bold py-2">Men Are from Mars, Women Are from Venus.</h1>
                <div class="py-2">
                  <span class="font-semibold mr-2">Written by:</span>
                  <span class="text-primary font-semibold">John Gray</span>
                </div>
                <div class="flex items-center justify-start py-9 font-semibold">
                  <div class="bg-white px-3 py-2 rounded mr-3">
                    <img class="inline-block mr-2 w-6" src="../assets/img/svg/library.svg">
                    <span class="font-semibold">Add to library</span>
                  </div>
                  <div class="bg-white px-3 py-2 rounded  mr-3">
                    <img class="inline-block mr-2 w-6" src="../assets/img/svg/rate.svg">
                    <span class="font-semibold">Rate the summary</span>
                  </div>
                  <div class="bg-white px-3 py-2 rounded">
                    <img class="inline-block mr-2 w-6" src="../assets/img/svg/share.svg">
                    <span class="font-semibold">Share</span>
                  </div>
                </div>
                <div class="flex items-center justify-start py-9">
                  <div class="bg-primary mr-3 shadow-md w-32 p-2 rounded-md text-white text-right">
                      <div class="flex items-start">
                          <img class="mr-3 w-6" src="../assets/img/svg/like.svg">
                        <div>
                          <span class="text-xl font-bold">1000</span>
                          <div class="">Likes</div>
                        </div>
                      </div>
                      <div class="self-end"> 😍</div>
                  </div>
                  <div class="bg-red mr-3 shadow-md w-32 p-2 rounded-md text-white text-right">
                      <div class="flex items-start">
                        <img class="mr-3 w-6 bg-white rounded" src="../assets/img/svg/dislike.svg">
                        <div>
                          <span class="text-xl font-bold">1000</span>
                          <div class="">Dislikes</div>
                        </div>
                      </div>
                      <div class=" self-end"> 😓</div>
                  </div>
                  <div class="bg-dark-gray mr-3 shadow-md w-32 p-2 rounded-md text-white text-right">
                      <div class="flex items-start">
                          <img class="mr-3 w-6 bg-white rounded-md" src="../assets/img/svg/listen.svg">
                        <div>
                          <span class="text-xl font-bold">1000</span>
                          <div class="">Read</div>
                        </div>
                      </div>
                      
                      <div class=" self-end"> 😎</div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <floating-audio-bar />
        <div class="grid grid-cols-2 gap-4 px-8">
          <div class="w-full">
            <ul class="flex mb-0 list-none flex-wrap pt-3 flex-row">
              <li class="-mb-px mr-2 last:mr-0 flex-auto text-center" v-for="tab in tabs" :key="tab.tab">
                <a :class="[tab.current ? 'border-primary text-primary' : 'border-gray-500 text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm']" class="text-gray-500 cursor-pointer text-lg active:bg-primary font-semibold px-5 py-3 block leading-normal" v-on:click="toggleTabs(tab.tab)">
                  {{ tab.title }}
                </a>
              </li>
            </ul>
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
              <div class="px-4 py-5 flex-auto">
                <div class="tab-content tab-space">
                  <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
                    <p>
                      قليلٌ جدًّا من الناس يجلسون لمجرد التفكير في كيفية تنفيذ
                      ما يريدون فعله، ومعظمنا في النهاية يُقدِم على أفعال قد لا
                      يكون فكَّر في كيفية تنفيذها بشكل كافٍ، فقد يخطر على بالك
                      شراء شيء ما من السوبر ماركت، وسرعان ما تشتريه بالفعل، ونحن
                      غالبًا ما نفترض أن مسألة التفكير عملية واضحة وسهلة، إلا أن
                      الأمر ليس بهذه السهولة. يدور هذا الكتاب عن مهارات مرحلة
                      تنفيذ الفعل، ويقدم إرشادات محددة عن التصرف المناسب الذي
                      عليك فعله، فأنت حين تطهو تختار المكونات التي ستستخدمها،
                      وكذلك تستطيع اختيار أسلوب العمل الذي يتوافق مع متطلَّبات
                      الموقف أمامك.
                    </p>
                  </div>
                  <!-- <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
                    <p>
                      Completely synergize resource taxing relationships via
                      premier niche markets. Professionally cultivate one-to-one
                      customer service with robust ideas.
                      <br />
                      <br />
                      Dynamically innovate resource-leveling customer service for
                      state of the art customer service.
                    </p>
                  </div>
                  <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
                    <p>
                      Efficiently unleash cross-media information without
                      cross-media value. Quickly maximize timely deliverables for
                      real-time schemas.
                      <br />
                      <br />
                      Dramatically maintain clicks-and-mortar solutions
                      without functional solutions.
                    </p>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <comments />
        <recent-published />
      </main>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import {
  Dialog,
  DialogOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import {
  BellIcon,
  MenuAlt2Icon,
  XIcon,
  ChevronDownIcon,
  AnnotationIcon,
  SpeakerphoneIcon,
} from '@heroicons/vue/outline'
import { SearchIcon, PlayIcon, PauseIcon, RewindIcon, FastForwardIcon,  } from '@heroicons/vue/solid'
import DashNav from '../layout/DashNav.vue'
import Comments from '../components/Comments.vue'
import RecentPublished from '../components/RecentPublished.vue'
import FloatingAudioBar from '../components/FloatingAudioBar.vue'


const tabs = [
  {
    tab: 1,
    title: 'About this book?',
    current: true,
  },
  {
    tab: 2,
    title: 'For whom is this book?',
    current: false,
  },
  {
    tab: 3,
    title: 'About the author',
    current: false,
  },
]


export default {
  components: {
    Dialog,
    DialogOverlay,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
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
    DashNav,
    Comments,
    RecentPublished,
    FloatingAudioBar,
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
  setup() {
    const sidebarOpen = ref(false)
    return {
      sidebarOpen,
      tabs,
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