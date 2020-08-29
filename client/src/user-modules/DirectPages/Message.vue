<template>
    <v-app>
        <v-main style="background-color: rgb(249,249,249)">
        <Header></Header>
        <div class="container">
            <div class="row">
                <div class="col-3 offset-2 text-center border" style="background:white;">    
                        <h5>Direct</h5>
                        <v-btn class="float-right mb-3" color="primary" fab small dark>
                            <v-icon>mdi-pencil</v-icon>
                        </v-btn>
                        <v-list class="list-person" subheader>
                            <v-subheader>Những người đã liên hệ</v-subheader>

                            <v-list-item
                                v-for="item in items"
                                :key="item.title"
                                class="text-left"
                                @click="viewChat(item)"
                            >
                                <v-list-item-avatar>
                                <v-img :src="item.avatar"></v-img>
                                </v-list-item-avatar>

                                <v-list-item-content>
                                    <v-list-item-title v-text="item.title"></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                </div>
                <div class="col-6 border" style="background:white;">
                    <div class="border">
                    <PersonInfo></PersonInfo>
                    </div>
                </div>
            </div>
        </div>
        </v-main>
    </v-app>
</template>

<script>
import Header from '../../views/User/Header';
import PersonInfo from '../../components/Message/PersonInfo';
export default {
    components: {
        Header,PersonInfo
    },
    data(){
        return {
            person: {
                avatar: "",
                name: "",
            },
            items: [
                { active: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
                { active: true, title: 'Ranee Carlson', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
                { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
                { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
                { active: true, title: 'Jason One1r', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
                { active: true, title: 'Ranee C1arlson', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },

            ],
            items2: [
                { title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg' },
            ],
        }
    },
    methods: {
        viewChat(id){
            console.log("đây nè",id.avatar)
            this.person.avatar = id.avatar;
            this.person.name = id.title;
            console.log("đây nè",this.person)
            return this.person;
        }
    }
}
</script>

<style>
    .border {
    }
    .list-person {
        height: 50rem;
        width: 100%;
        overflow-y: auto;
    }
</style>