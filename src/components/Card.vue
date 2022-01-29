<template>
   <div class="cardContainer">
     <h2>{{item?.title ?? item.name}}</h2>
     <p>{{item?.release_date ?? item.length}}</p>
     <router-link :to="{name:name, params:{id:id}}">
        <button class="btn">{{buttonText}}</button> 
     </router-link>
   </div>
</template>

<script>

export default {

  name: 'Card',
  props: {
      buttonText: String,
      bgColor: String,
      item: Object,
      id: String,
      name: String

  },
  methods: {
    onClick() {
      console.log();
    }
  },
}
</script>

<style>
 @import '../assets/css/Global.css';
</style>