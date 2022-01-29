<template>
    <!-- <div class="header"> -->
        <h1>
            {{ title }}
        </h1>
        <!-- <img class="img" src="{{image}}"/> -->
    <!-- </div> -->
</template>

<script>

export default {
  name: 'Header',
  props: {
      title: String,
      color: String,
      image: String
  },
  methods: {
  },

}
</script>

<style>
    .header {
        display: flex;
        justify-content: center;
    }

    .img {
        height: 140px;
    }
</style>