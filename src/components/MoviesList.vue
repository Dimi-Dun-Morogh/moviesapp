<template>
  <b-container>
    <h1 class="list-title">IMDB TOP 250</h1>
    <b-row>
      <template v-if="isExist">
        <BCol cols="3" v-for="(movie, key) in list" :key="key">
          <MovieItem
            :movie="movie"
            @mouseover.native="onMouseOver(movie.Poster)"
          />
        </BCol>
      </template>
      <template v-else>
        <div>Empty List</div>
      </template>
    </b-row>
  </b-container>
</template>

<script>
import MovieItem from "./MovieItem";
export default {
  name: "MoviesList",
  components: {
    MovieItem
  },
  props: {
    list: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    isExist() {
      return Boolean(Object.keys(this.list).length);
    }
  },
  methods: {
    onMouseOver(poster) {
      this.$emit("changePoster", poster);
    }
  }
};
</script>
<style scoped>
.list-title {
  font-size: 50px;
  margin-bottom: 30px;
  color: #fff;
}
</style>
