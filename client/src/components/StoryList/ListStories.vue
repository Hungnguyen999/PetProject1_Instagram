<template>
    <v-sheet
    class="mx-auto mb-3"
    elevation="8"
    max-width="100%"
    >
    <v-slide-group
        v-model="model"
        class="pa-4"
        :prev-icon="prevIcon ? 'mdi-minus' : undefined"
        :next-icon="nextIcon ? 'mdi-plus' : undefined"
        :multiple="multiple"
        :mandatory="mandatory"
        :show-arrows="showArrows"
        :center-active="centerActive"
    >
        <v-slide-item
        v-for="n in 15"
        :key="n"
        v-slot:default="{ active, toggle }"
        >
        <v-card
            :color="active ? 'primary' : 'grey lighten-1'"
            class="ma-1"
            height="10rem"
            width="100"
            @click="toggle"
            
        >
        <v-img src="../../assets/images/avatar/avatar.jpg"></v-img>
            <v-row
            class="fill-height"
            align="center"
            justify="center"
            >
            <v-scale-transition>
                <v-icon
                v-if="active"
                color="white"
                size="20"
                v-text="'mdi-close-circle-outline'"
                ></v-icon>
            </v-scale-transition>
            </v-row>
        </v-card>
        </v-slide-item>
    </v-slide-group>
    </v-sheet>
</template>

<script>
export default {
    data(){
        return {
            model: null,
            multiple: false,
            mandatory: false,
            showArrows: true,
            prevIcon: false,
            nextIcon: false,
            centerActive: false,
        }
    },
}
</script>

<style>

</style>