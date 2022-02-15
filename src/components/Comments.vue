<template>
  <div
    class="
      relative
      bg-gray-50
      pb-20
      pt-10
      px-4
      sm:px-6
      lg:px-8
    "
  >
    <h2 class="font-semibold text-2xl">Reviews</h2>
    <div class="relative max-w-7xl mx-auto">
      <div
        class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
      >
        <div
          v-for="comment in comments"
          :key="comment.title"
          class="flex flex-col rounded-lg shadow-lg overflow-hidden"
        >
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="mt-6 flex items-center">
              <div class="flex-shrink-0">
                <a :href="comment.author.href">
                  <span class="sr-only">{{ comment.author.name }}</span>
                  <img
                    class="h-10 w-10 rounded-full"
                    :src="comment.author.imageUrl"
                    alt=""
                  />
                </a>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">
                  <a :href="comment.author.href" class="hover:underline">
                    {{ comment.author.name }}
                  </a>
                </p>
                <div class="flex space-x-1 text-sm text-gray-500">
                  <p>{{ comment.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-between bg-white pt-0 pb-3 px-3">
            <div class="bg-light-blue text-dark-gray p-2 rounded-full">
              <p>😎 #Happy</p>
            </div>
            <div class="bg-light-blue text-dark-gray p-2 rounded-full">
              <p>😂 #Joyful</p>
            </div>
            <div class="bg-light-blue text-dark-gray p-2 rounded-full">
              <p>😫 #Boring</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const comments = [
  {
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]
export default {
  setup() {
    return {
      comments,
    }
  },
}
</script>

<style>
</style>