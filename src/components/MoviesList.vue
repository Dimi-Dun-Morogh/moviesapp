<template>
  <b-container>
    <h1 class="list-title">{{ listTitle }}</h1>
    <b-row>
      <template v-if="isExist">
        <BCol cols="3" v-for="(movie, key) in list" :key="key">
          <MovieItem
            :movie="movie"
            @mouseover.native="onMouseOver(movie.Poster)"
            @removeItem="onRemoveItem"
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
import { mapActions, mapGetters } from "vuex";
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
    ...mapGetters("movies", ["isSearch"]),
    isExist() {
      return Boolean(Object.keys(this.list).length);
    },
    listTitle() {
      return this.isSearch ? "search result:" : "IMDB TOP 250";
    }
  },
  methods: {
    ...mapActions("movies", ["removeMovie"]),
    ...mapActions(["shownotify"]),
    onMouseOver(poster) {
      this.$emit("changePoster", poster);
    },
    async onRemoveItem({ id, title }) {
      const isConfirmed = await this.$bvModal.msgBoxConfirm(
        `Are you sure to delete ${title}?`
      );
      if (isConfirmed) {
        this.removeMovie(id);
        this.shownotify({
          msg: "Movie deleted successfuly",
          variant: "success",
          title: "success"
        });
      }
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
