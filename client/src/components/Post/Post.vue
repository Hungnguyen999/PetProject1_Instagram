<template>
    <v-app>
        <v-card class="mx-auto mb-5">
            <!--name poster-->
            <v-list-item>
                <v-list-item-avatar>
                    <v-img src="../../assets/images/avatar/avatar.jpg"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title class="headline" href="/Profile/zzHungreozz">zzHungreozz</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-img 
                src="../../assets/images/frame.jpg"
            >
            </v-img>
            <!--Actions-->
            <v-card-actions>
                <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>mdi-comment</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>mdi-share-variant</v-icon>
                </v-btn>
            </v-card-actions>
            <v-card-text class="headline" style="margin-top: -2rem;">
                99999 likes
            </v-card-text>
            <v-card-text class="headline" style="margin-top: -2rem;">
                <router-link
                    class="titleInfo"
                    :to="{name: 'detail-post'}"
                >ChampionLeague</router-link>
                <p>Bệnh nhân covid đầu tiên tử vong tại VN
                </p>
                <router-link
                    class="titleInfo"
                    :to="{name: 'detail-post'}"
                >view all 324898 comments</router-link>
                <ListComment v-for="item in 2" :key="item"></ListComment>
                <v-row>
                    <v-textarea
                    class="mx-4"
                    label="Nhập nội dung bình luận"
                    no-resize
                    rows="1"
                    :value="value"
                    ></v-textarea>
                    <v-btn class="mx-2" fab dark large color="cyan">
                    <v-icon dark>mdi-pencil</v-icon>
                    </v-btn>
                </v-row>
            </v-card-text>
        </v-card>
    </v-app>
</template>
<script>
import ListComment from './ListComment'
export default {
    components: {
        ListComment
    }
}
</script>
<style scoped>
    .titleInfo {
        color: black;
    }
    .titleInfo:hover {
        cursor: pointer;
        text-decoration: none;
    }
</style>