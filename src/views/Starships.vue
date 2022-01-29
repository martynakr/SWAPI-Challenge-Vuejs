<template>
    <div>
        <router-link to="/films">Films</router-link>
        <div class="header">
            <Header title="Starships" :style="{color: '#F3F3EF'}"/>
            <img class="img2" src="../assets/icons/spaceship3.svg"/>
        </div>
        <StarshipsList/>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import StarshipsList from '../components/StarshipsList.vue';

export default {
  components: { Header, StarshipsList },
  name: 'Films',
  props: {
  },
  methods: {
  },
created() {
    document.body.style.backgroundColor = "#001A45";
  },
  
}
</script>

<style>
  /* @import '.'; */

    .header {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .img2 {
        height: 100px;
        padding: 20px;
    }
</style>