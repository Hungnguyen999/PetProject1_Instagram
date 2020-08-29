<template>
        <v-card class="mx-auto" style="width: 50rem;height:30rem;">
            <v-list-item>
                <v-list-item-avatar>
                    <v-img src="../../assets/images/avatar/avatar.jpg"></v-img>
                </v-list-item-avatar>
                    <v-list-item-content>
                            <v-list-item-title class="headline" href="/Profile/zzHungreozz">zzHungreozz</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="text--primary">Gợi ý theo dõi</v-list-item-title>
                </v-list-item-content>
                <v-btn
                        text
                        color="deep-purple accent-4"
                    >
                        Xem tất cả
                </v-btn>
            </v-list-item>
            <ListFollowerSuggested v-for="item in 5" :key="item"></ListFollowerSuggested>
        </v-card>
</template>
<script>
import ListFollowerSuggested from './ListFollowerSuggested';
export default {
    components:{
        ListFollowerSuggested
    }
}
</script>
<style scoped>

</style>