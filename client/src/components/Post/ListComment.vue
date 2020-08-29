<template>
    <main>
        <router-link
            class="titleInfo"
            :to="{name: 'detail-post'}"
        >ChampionLeague</router-link>
        <p class="mb-1">Bệnh nhân covid đầu tiên tử vong tại VN
        </p>
    </main>
</template>

<script>
export default {

}
</script>

<style>
    .titleInfo {
        color: black;
    }
    .titleInfo:hover {
        cursor: pointer;
        text-decoration: none;
        margin-top: -1rem;
    }
</style>