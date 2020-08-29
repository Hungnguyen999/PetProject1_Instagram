<template>
    <v-app>
        <Header></Header>
        <v-container>
            <div class="row">
                <div class="col-3 offset-2 center">
                    <v-avatar color="orange" size="150" @click="changePhoto()">
                        <v-img src="../../assets/images/avatar/avatar.jpg"></v-img>
                    </v-avatar>
                </div>
                <div class="col-6">
                    <div class="row">   
                        <div class="col-4" style="font-size: 18pt;">
                            zzz_hungreo_zzz
                        </div>
                        <div class="col-3">
                            <div class="text-center">
                                <v-btn rounded color="primary" dark>
                                    <v-icon>mdi-pencil</v-icon> Edit profile
                                </v-btn>
                            </div>
                        </div>
                        <div class="col-2">
                            <v-btn outlined small fab color="indigo">
                                <v-icon>mdi-wrench</v-icon>
                            </v-btn>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-2"><b>39</b> posts</div>
                        <div class="col-3"><b>99</b> followers</div>
                        <div class="col-3"><b>219</b> following</div>
                    </div>
                    <div class="row">
                        <div class="col-12"><b>Tớ là hưng </b></div>
                        <div class="col-12" style="margin-top: -2rem;">Tớ là hưngTớ là hưngTớ là hưngTớ là hưng</div>
                    </div>
                </div>
            </div>
            <div class="col-9 offset-2">
                <ListStories></ListStories>
            </div>
            <div class="col-9 offset-2">
              
            <UserListPost></UserListPost>
            </div>
        </v-container>
        <!-- <v-container>
            
            <v-row
            :align="alignment"
            :justify="justify"
            class="grey lighten-5"
            style="height: 300px;"
            >
            <v-card>
                <v-list-item>
                    <v-list-item-avatart>
                        <v-img src="../../assets/images/avatar/avatar.jpg"></v-img>
                    </v-list-item-avatart>
                </v-list-item>
            </v-card>
            </v-row>
        </v-container> -->
    </v-app>
</template>

<script>
import Header from '../../views/User/Header';
import ListStories from '../../components/StoryList/ListStories';
import UserListPost from '../../components/UserListPost/UserListPost';
export default {
    components:{
        Header,ListStories,UserListPost
    }
}
</script>

<style>

</style>