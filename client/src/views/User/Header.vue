<template>
    <nav class="navbar navbar-default">
        <div class="container" style="padding:0;">
            <div class="row" style="padding:0;">
                <div class="col-2 col-md-3  offset-2 d-inline-flex p-2 bd-highlight">
                    <img src="../../../src/assets/images/duhupng.png" style="width:30%;height: 3rem;" alt="">
                </div>
                <div class="col-3" id="search">
                    <input type="text" class="form-control" placeholder="Search">
                </div>
                <div class="col-5 col-md-4 justify-content-end">
                        <div style="margin-left:6rem;">
                            <button class="btn"><i class="fas fa-home"></i></button>
                            <button class="btn"><i class="fa fa-inbox"></i></button>
                            <button class="btn"><i class="fab fa-wpexplorer"></i></button>
                            <button class="btn"><i class="far fa-heart"></i></button>
                            <v-avatar size="36">
                            <img
                                src="../../assets/images/avatar/avatar.jpg"
                                alt="John"
                            >
                            </v-avatar>
                    </div>
                    
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>

@media screen and (max-width: 900px) {
    #search{
        display: none;
    }
}
@media screen and (max-width: 767px) {

}
/*Smart phone nhỏ*/
@media screen and (min-width: 240px){
    
}
/*Iphone(480 x 640)*/
@media screen and (min-width: 320px){
    
}
/*Tablet nhỏ(480 x 640)*/
@media screen and (min-width: 480px){
    
}
/*Ipad dọc(768 x 1024)*/
@media screen and (min-width: 768px){
    
}
/*Ipad ngang(1024 x 768)*/
@media screen and (min-width: 1024px){
  
}
</style>