<template>
    <v-app>
        <v-container>
            <h1 class="text-center">Login to DuHu Social !</h1>
            <v-row>
                <v-col cols="12" sm="12">
                    <v-row
                    :align="alignment"
                    :justify="justify"
                    class="white"
                    style="height: 20rem;"
                    >
                    <v-img src="../../assets/images/frame.jpg" class="img" style="height: 35rem;width: 20rem;"></v-img>
                    <v-card ref="form"
                        class="ma-3 pa-6"
                        outlined
                        tile
                        style="height: 35rem;width: 500px;">
                            <h1 class="text-center">DuHu</h1>
                            <v-col cols="12">
                                <v-card-text style="padding: 0 3rem 3rem 3rem;" >
                                    <v-text-field
                                        outlined
                                        ref="name"
                                        v-model="user.name"
                                        :rules="[() => !!user.name || 'This field is required']"
                                        label="Phone number, username, or email"
                                        required
                                    ></v-text-field>
                                    <v-text-field
                                        outlined
                                        ref="password"
                                        v-model="user.password"
                                        :rules="[() => !!user.password || 'This field is required']"
                                        required
                                        label="Password"
                                    ></v-text-field>
                                    <v-btn block x-medium color="primary" @click="login(user.name,user.password)" dark>Login</v-btn>
                                    <a class="mt-2 float-right" href="#" @click.stop.prevent="dialog = true">Forgot Password ?</a>
                            
                                    <v-divider class="mt-10"></v-divider>
                                    <v-card-actions class="white justify-center">
                                        <v-btn
                                            v-for="(social, i) in socials"
                                            :key="i"
                                            :color="social.color"
                                            class="white--text"
                                            fab
                                            icon
                                            small
                                        >
                                            <v-icon>{{ social.icon }}</v-icon>
                                        </v-btn>
                                    </v-card-actions>
                                    <div class="center">
                                            Don't have account? <a href="#">Sign up</a>
                                    </div>
                                </v-card-text>
                                <div class="center">
                                    <h5>Get the app</h5>
                                    <div class="row">
                                            <v-img src="../../assets/images/ios.png" style="height:100%;width:1rem;" @click="downIosApp()"></v-img>
                                            <v-img src="../../assets/images/android.png" style="height:100%;width:1rem;"  @click="downAndroidApp()"></v-img>
                                    </div>
                                </div>
                            </v-col>
                        </v-card>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>
<script>
import router from '../../router';
export default {
    data () {
        return {
            justify: 'center',
            alignment: 'center',
            user : {
                name: '',
                password:'',
            },
            socials: [
                {
                icon: 'mdi-facebook',
                color: 'indigo',
                },
                {
                icon: 'mdi-linkedin',
                color: 'cyan darken-1',
                },
                {
                icon: 'mdi-google',
                color: 'red lighten-3',
                },
            ],
        }
    },
    methods: {
        checkLogin() {
            if (this.user.name == "" || this.user.password == "") {
                this.$swal({
                icon: "error",
                title: "Notification",
                text: "Please enter your infomation !"
                });
                return false;
            } else return true;
        },
        login(name,password){
            if(this.checkLogin()){
                if(name == "1" && password == "1"){
                    localStorage.token = "token";
                    this.loginSuccess(true);
                }
                else{
                    this.loginSuccess(false);
                }
            }
        },
        loginSuccess(data){
            if(data == true){
                router.push({path: "/"})
            }
            else{
                this.$swal({
                icon: "error",
                title: "Notification",
                text: "Username or password was incorrect. Please double-check your information."
                });
            }
        }
    }
};
</script>
<style lang="scss">
    .center {
        text-align: center;
    }
    .img {
        background: center no-repeat;
    }
    @media (max-width: 900px){
        .img {
            display: none;
        }
    }
</style>