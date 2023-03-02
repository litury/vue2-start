<template>
  <div class="content">
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>
    <p v-text="content"></p>
    <p v-html="html"></p>
    <p>Автор: {{ fullName }}</p>
  </div>
</template>

<script>
export default {
  name: 'Posts',
  props: {
    msg: String,
  },
  data() {
    return {
      title: 'Название',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eaque iure, non quae reprehenderit vel veritatis vitae voluptas voluptate voluptates? Eveniet itaque iure laborum mollitia praesentium. Consequuntur nesciunt odio sapiente.',
      html: '<p style="color: red">TEST</p>',
      name: 'Вася',
      surname: 'Иванов'
    }
  },
  computed: {
    fullName() {
      return `${this.name[0]}. ${this.surname}`
    }
  },
  methods: {
    fullName() {
      return `${this.name[0]}. ${this.surname}`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.content {

}
</style>
