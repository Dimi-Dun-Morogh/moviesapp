<template>
  <div class="movies-pagination d-flex justify-content-center">
    <BPagination
      v-model="currentPageModel"
      :per-page="perPage"
      :total-rows="total"
      prev-text="Prev"
      next-text="Next"
    />
  </div>
</template>
<script>
export default {
  name: "MoviesPagination",
  props: {
    currentPage: {
      Type: Number,
      default: 1
    },
    total: {
      Type: Number,
      default: 1
    },
    perPage: {
      Type: Number,
      default: 1
    }
  },
  computed: {
    currentPageModel: {
      get() {
        return this.currentPage;
      },
      set(value) {
        this.$emit("onPageChanged", value);
      }
    }
  }
};
</script>
<style scoped>
.movies-pagination {
  margin-top: 30px;
}
.movies-pagination >>> .pagination .page-item .page-link {
  background-color: transparent;
  font-size: 12px;
  color: #fff;
  box-shadow: none;
}
.movies-pagination >>> .pagination .page-item.active .page-link {
  border-color: #fff;
  background-color: #fff;
  color: #000;
}
.movies-pagination >>> .pagination .page-item.disabled .page-link {
  color: rgb(144, 156, 147);
}
</style>
