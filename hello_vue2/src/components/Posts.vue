<template>
  <div class="content">
    <h3 :class="{'title_green': isTitleEven(), 'title_red' : !isTitleEven()}">
      {{ title }}

      <slot></slot>
    </h3>
    <p>{{ content }}</p>
    <p :title="authorName + ' ' + authorSurname">Автор {{ fullName }}</p>
    <slot name="image"></slot>

    <button @click="toggleView">
      <template v-if="viewModeFull">Скрыть</template>
      <template v-else>Раскрыть</template>
    </button>

  </div>
</template>

<script>
export default {
  name: 'Posts',
  props: {
    title: String,
    content: String,
    authorName: String,
    authorSurname: String,
    name: Number,
  },
  data() {
    return {
      viewModeFull: false,
    }
  },
  computed: {
    fullName: {
      set(fullName) {
        [this.authorName, this.authorSurname] = fullName.split(' ')
      },
      get() {
        return `${this.authorName[0]}. ${this.authorSurname}`
      }
    },
    text() {
      return this.viewModeFull ? this.content : this.content.slice(0, 300) + '...'
    }
  },
  methods: {
    setFullName() {
      this.fullName = 'Петя Смирнов'
    },
    changeF() {
      this.obj.f = 'Тест 2'
    },
    toggleView() {
      this.viewModeFull = !this.viewModeFull

      if (this.viewModeFull) {
        this.$emit('expand')
      } else {
        this.$emit('rollUp')
      }
    },
    isTitleEven() {
      return +this.title.split(' ')[1] % 2
    }
  },
  watch: {
    name(val) {
      alert(`Изменилось имя: ${val}`)
    },
    'obj.f'(val) {
      alert(`Изменился ${val}`)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.title_green {
  color: green;
}

.title_red {
  color: red;
}
</style>
