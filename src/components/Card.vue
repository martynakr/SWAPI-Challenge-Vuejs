<template>
  <div class="cardContainer">
    <h2 :style="{color: hedColor}">{{item?.title ?? item.name}}</h2>
    <p><strong>{{label}}: </strong>{{item?.release_date ?? item.length}}</p>
    <router-link :to="{name:name, params:{id:id}}">
      <button :style="{backgroundColor:bgColor, color:color}" class="btn">{{buttonText}}</button> 
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
      name: String,
      color:String,
      hedColor: String,
      label: String
  },
}
</script>

<style>
  @import '../assets/css/Global.css';
</style>