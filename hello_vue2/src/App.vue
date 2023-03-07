<script>
import Posts from './components/Posts.vue'
import About from "@/pages/About";
import Home from "@/pages/Home";

export default {
  name: 'App',
  components: {
    Posts,
    About,
    Home
  },
  data() {
    return {
      currentPage: 'Home',
      loading: true,
      loadedData: [],
      newPostTitle: '',
      viewOnlyPosts: -1,
      posts: [
        {
          title: 'Название 1',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eaque iure, non quae reprehenderit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eaque iure, non quae reprehenderit vel veritatis vitae voluptas voluptate voluptates?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eaque iure, non quae reprehenderit vel veritatis vitae voluptas voluptate voluptates?vel veritatis vitae voluptas voluptate voluptates? Eveniet itaque iure Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eaque iure, non quae reprehenderit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eaque iure, non quae reprehenderit vel veritatis vitae voluptas voluptate voluptates?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eaque iure, non quae reprehenderit vel veritatis vitae voluptas voluptate voluptates?vel veritatis vitae voluptas voluptate voluptates? Eveniet itaque iure laborum mollitia praesentium. laborum mollitia praesentium. Consequuntur nesciunt odio sapiente.',
          authorName: 'Вася',
          authorSurname: 'Петров'
        },
        {
          title: 'Название 2',
          content: 'Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eaque iure, non quae reprehenderit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eaque iure, non quae reprehenderit vel veritatis vitae voluptas voluptate voluptates?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eaque iure, non quae reprehenderit vel veritatis vitae voluptas voluptate voluptates?vel veritatis vitae voluptas voluptate voluptates? Eveniet itaque iure laborum mollitia praesentium. sit amet, consectetur adipisicing elit. Autem eaque iure, non quae reprehenderit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eaque iure, non quae reprehenderit vel veritatis vitae voluptas voluptate voluptates?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eaque iure, non quae reprehenderit vel veritatis vitae voluptas voluptate voluptates?vel veritatis vitae voluptas voluptate voluptates? Eveniet itaque iure laborum mollitia praesentium. Consequuntur nesciunt odio sapiente.',
          authorName: 'Джун',
          authorSurname: 'Джунович'
        },
      ],
    }
  },
  computed: {
    filteredPosts() {
      return this.viewOnlyPosts === -1 ? this.posts : [this.posts[this.viewOnlyPosts]]
    }
  },
  created() {
    this.fetchData()
  },

  methods: {
    changePage(pageName) {
      this.currentPage = pageName
    },
    addPost() {
      this.posts.push({
        title: this.newPostTitle,
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eaque iure, non quae reprehenderit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eaque iure, non quae reprehenderit vel veritatis vitae voluptas voluptate voluptates?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eaque iure, non quae reprehenderit vel veritatis vitae voluptas voluptate voluptates?vel veritatis vitae voluptas voluptate voluptates? Eveniet itaque iure laborum mollitia praesentium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eaque iure, non quae reprehenderit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eaque iure, non quae reprehenderit vel veritatis vitae voluptas voluptate voluptates?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eaque iure, non quae reprehenderit vel veritatis vitae voluptas voluptate voluptates?vel veritatis vitae voluptas voluptate voluptates? Eveniet itaque iure laborum mollitia praesentium. Consequuntur nesciunt odio sapiente.',
        authorName: 'Джун',
        authorSurname: 'Джунович'
      })
      this.newPostTitle = ''
    },

    fetchData() {
      setTimeout(() => {
        this.loadedData = [1, 2, 3, 4, 5]
        this.loading = false
        console.log(this.loadedData)
      }, 5000)
    },

    hidePostsExcept(index) {
      this.viewOnlyPosts = index
    },

    showAllPosts() {
      this.viewOnlyPosts = -1
    }
  },
}
</script>

<template>
  <div id="app">
    <p>
      <a href="" @click.prevent="changePage('Home')">Home</a> |
      <a href="" @click.prevent="changePage('About')">About</a> |
      <a href="" @click.prevent="changePage('Noname')">Noname</a> |
    </p>
    <Home v-if="currentPage === 'Home'"/>
    <About v-if="currentPage === 'About'"/>
    <div v-else>404 страница не найдена</div>
    <p v-for="num in loadedData" key="num">{{ num }}</p>
    <input v-model="newPostTitle"></input>
    <p class="spinner">
      <MoonLoader class="custom-class" color="#bada55" :loading="loading" :size="50"></MoonLoader>
    </p>


    <button @click="addPost">+ Пост</button>
    <Posts
        v-for="post, i in filteredPosts"
        :key="post.title"
        :title="post.title"
        :content="post.content"
        :authorName="post.authorName"
        :authorSurname="post.authorSurname"
        @expand="hidePostsExcept(i)"
        @rollUp="showAllPosts"
    >
      # {{ i + 1 }}
      <template v-slot:image>
        <p>
          <img src="@/assets/logo.png">
        </p>
      </template>
    </Posts>
    tempp
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.custom-class {
  margin: auto;
}
</style>
