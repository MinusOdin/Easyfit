<template>
    <div class="col-sm-12 p-0 m-0 position-relative">
        <img id="banner-img" src="@/assets/banner.jpg" alt="Banner" class="p-0"/>
        <div style="background-color: #FFFFFF; width: 80%;, height: 300px;"></div>
        <p id="webpage-name" class="position-absolute top-50 start-50 translate-middle text-white fw-bolder">EASYFIT</p>
    </div>
</template>

<script>
export default {
    name: 'EasyfitBanner'
}
</script>

<style>
#banner-img {
    height: 600px;
    object-fit: cover;
}

#webpage-name {
    font-size: 10ch;
    letter-spacing: 2rem;
}
</style>