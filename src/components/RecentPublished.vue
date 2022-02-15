<template>
  <div class="relative bg-gray-100 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <h2 class="font-semibold text-2xl">Recently Published</h2>
    <div class="relative max-w-7xl mx-auto">
      <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none">
        <div v-for="post in 4" :key="post" class="flex flex-col rounded shadow-lg overflow-hidden">
          <div class="relative ">
            <a v-if="paused" @click="palyAudio"  class="absolute inset-0 z-10 bg-black text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-70 duration-300">
              <PlayIcon class="h-12 w-12 text-white" ria-hidden="true" />
            </a>
            <a @click="palyAudio" class="absolute inset-0 z-10 bg-black text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-70 duration-300" v-else>
              <PauseIcon class="h-12 w-12 text-white" aria-hidden="true" />
            </a>
            <a href="#" class="relative">
              <div class="w-full flex flex-wrap content-center">
                <img src="../assets/img/book.png" class="mx-auto object-cover rounded-lg" alt="">
              </div>
            </a>
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <a :href="post.href" class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">
                  Men are from Mars, Women are from Venus.
                </p>
              </a>
            </div>
            <div class="mt-6 flex justify-between">
              <div class="flex items-center">
                <img class="h-6 w-6 mr-3 rounded-full" src="../assets/img/svg/head.svg" alt="" />
                <p class="text-gray-500">12. Min</p>
              </div>
              <div class="flex items-center">
                <img class="h-6 w-6 mr-3 rounded-full" src="../assets/img/svg/book.svg" alt="" />
                <p class="text-gray-500">08 Pages</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PlayIcon, PauseIcon } from '@heroicons/vue/solid'

export default {
  components: {
    PlayIcon,
    PauseIcon,
  },
  data() {
    return {
      paused: true,
    }
  },
  mounted() {
    console.log(this.$parent)
  },
  methods: {
    palyAudio() {
      this.$parent?.playSound()
      this.paused = false
    }
  },
}
</script>