<template>
  <v-app>
      <Header></Header>
      <div class="container">
        <div class="row">
            <div class="col-6 offset-2">
                <Story></Story>
                <Post v-for="item in 10" :key="item"></Post>
            </div>
            <div class="col-3">
                <FollowerSuggestion></FollowerSuggestion>
                <v-btn class="mx-auto mt-3" block  outlined color="success">
                  <v-icon left>mdi-pencil</v-icon> Thêm bài viết
                </v-btn>
            </div>
        </div>
      </div>
  </v-app>
</template>
<script>
import Header from '../../views/User/Header';
import Post from '../../components/Post/Post';
import FollowerSuggestion from '../../components/FollowerSuggestion/FollowerSuggestion'
import Story from '../../components/StoryList/Story';
export default {
  name: "Homepage",
  components: {
    Header,
    Post,
    FollowerSuggestion,
    Story,
  },
  data: () => ({})
};
</script>
<style>

</style>