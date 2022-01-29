<template>
    <div>
        <router-link to="/films">Back to all films</router-link>
        <div class="cardContainer">
            <h1 class="title">{{item.title}}</h1>
            <p>Director: {{item?.director}}</p>
            <p>Release date: {{item.release_date}}</p>
            <p>Produced by: {{item.producer}}</p>
            <p>Opening crawl: {{item.opening_crawl}}</p>
        </div>
    </div>
</template>

<script>
import ItemsService from "../services/ItemsService"

export default ({
    props: [],
    data() {
        return {
            item: {}
        }
    },
    created() {
        ItemsService.getItem("films/", this.$route.params.id).then(response => this.item = response.data)
        document.body.style.backgroundColor = "#75934e";
    }
})
</script>

<style>
    @import '../assets/css/Global.css';
</style>
