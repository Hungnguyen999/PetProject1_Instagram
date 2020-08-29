<template>
<v-main>
    <v-card>
        <v-tabs
        background-color="white"
        color="deep-purple accent-4"
        right
        >
        <v-tab v-for="i in tabs"  :key="i">{{ i }}</v-tab>
    
        <v-tab-item
            v-for="n in 3"
            :key="n"
        >
            <v-container fluid>
            <v-row> 
                <v-col
                class="card"
                v-for="i in 7"
                :key="i"
                cols="12"
                md="4"
                >
                <v-img
                    class="image"
                    :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                    :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                    aspect-ratio="1"
                ></v-img>
                <div class="middle">
                    <div class="row">
                        <div class="col-5">
                            <b>12</b>
                            <v-icon color="red darken-2" dark>mdi-heart</v-icon>
                        </div>
                        <div class="col-5">
                            <b>12</b>
                            <v-icon color="blue darken-2" dark>mdi-comment</v-icon>
                        </div>
                    </div>
                </div>
                </v-col>
            </v-row>
            
            </v-container>
        </v-tab-item>
        </v-tabs>
    </v-card>
</v-main>
    
</template>
<script>
export default {
    data(){
        return {
            tabs : ['Post','Saved','Tagged'],
        }
    }
}
</script>

<style>
    .card:hover .image {
        opacity: 0.5;
        cursor: pointer;
        background-color: Black;
    }

    .card:hover .middle {
        opacity: 1;
        cursor: pointer;
    }
    .image {
        opacity: 1;
        display: block;
        width: 100%;
        height: auto;
        transition: .5s ease;
        backface-visibility: hidden;
    }
    .middle {
        transition: .5s ease;
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-40%, -50%);
        -ms-transform: translate(-40%, -50%);
        text-align: center;
    }
</style>