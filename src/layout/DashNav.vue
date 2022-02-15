<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="fixed inset-0 flex z-40 md:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>
        <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
          <div class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-primary">
            <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
              <div class="absolute top-0 right-0 -mr-12 pt-2">
                <button type="button" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click="sidebarOpen = false">
                  <span class="sr-only">Close sidebar</span>
                  <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </TransitionChild>
            <div class="flex-shrink-0 flex items-center px-4">
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg" alt="Workflow" />
            </div>
            <div class="mt-5 flex-1 h-0 overflow-y-auto">
              <nav class="px-2 space-y-1">
                <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-primary-light text-white' : 'text-indigo-100 hover:bg-primary-light', 'group flex items-center px-2 py-2 text-base font-medium rounded-md']">
                  <component :is="item.icon" class="mr-4 flex-shrink-0 h-6 w-6 text-white" aria-hidden="true" />
                  {{ item.name }}
                </a>
              </nav>
            </div>
          </div>
        </TransitionChild>
        <div class="flex-shrink-0 w-14" aria-hidden="true">
          <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex flex-col flex-grow pt-5 bg-primary overflow-y-auto">
        <div class="flex items-center flex-shrink-0 px-4">
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg" alt="Workflow" />
        </div>
        <div class="mt-5 flex-1 flex flex-col">
          <nav class="flex-1 px-2 pb-4 space-y-1">
            <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-primary-light text-white' : 'text-indigo-100 hover:bg-primary-light', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']">
              <component :is="item.icon" class="mr-3 flex-shrink-0 h-6 w-6 text-white" aria-hidden="true" />
              {{ item.name }}
            </a>
          </nav>
        </div>
      </div>
    </div>
    <div class="md:pl-64 flex flex-col flex-1">
      <div class="sticky top-0 z-10 flex-shrink-0 flex h-20 bg-primary shadow">
        <button type="button" class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden" @click="sidebarOpen = true">
          <span class="sr-only">Open sidebar</span>
          <MenuAlt2Icon class="h-6 w-6" aria-hidden="true" />
        </button>
        <div class="flex-1 px-4 flex justify-between">
          <div class="flex-1 flex">
            <form class="w-full flex md:ml-0" action="#" method="GET">
              <label for="search-field" class="sr-only">Search</label>
              <div class="relative w-full text-white focus-within:text-gray-300 m-auto h-12">
                <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none p-1">
                  <SearchIcon class="h-6 w-6" aria-hidden="true" />
                </div>
                <input id="search-field" class="bg-primary-light rounded-lg block w-full h-full px-8  pr-5 py-2 border-transparent text-white placeholder-white focus:outline-none focus:placeholder-gray-300 focus:ring-0 focus:border-transparent sm:text-sm" placeholder="Search for a Book, Author, Revision" type="search" name="search" />
              </div>
            </form>
          </div>
          <div class="ml-4 flex items-center md:ml-6">
            <button type="button" class="bg-primary-light p-2 rounded-full text-gray-400 hover:text-gray-500 focus:ring-primary">
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6 text-white" aria-hidden="true" />
            </button>

            <!-- Profile dropdown -->
            <Menu as="div" class="ml-3 relative">
              <div>
                <MenuButton class="w-52 bg-primary-light rounded-lg p-2 flex items-center text-sm focus:ring-primary">
                  <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  <p class="p-2 text-white">Ahmed Mohamed</p>
                  <ChevronDownIcon class="h-6 w-6 border rounded-full text-white" aria-hidden="true" />
                </MenuButton>
              </div>
              <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                    <a :href="item.href" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">{{ item.name }}</a>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>
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
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
  ChevronDownIcon,
  AnnotationIcon,
  SpeakerphoneIcon,
} from '@heroicons/vue/outline'
import { SearchIcon } from '@heroicons/vue/solid'

const navigation = [
  { name: 'Home', href: '#', icon: HomeIcon, current: true },
  { name: 'Discover', href: '#', icon: UsersIcon, current: false },
  { name: 'Library', href: '#', icon: FolderIcon, current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
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
  },
  data() {
    return {
      music: {
        paused: true,
        time: 0,
      }
    }
  },
  setup() {
    const sidebarOpen = ref(false)
    return {
      navigation,
      userNavigation,
      sidebarOpen,
    }
  },
  methods: {
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