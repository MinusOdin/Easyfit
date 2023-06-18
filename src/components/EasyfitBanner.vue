<template>
    <div class="col-sm-12 p-0 m-0 position-relative">
        <img class="image-fluid" id="banner-img" src="@/assets/banner.jpg" alt="Banner"/>
        <div style="background-color: #FFFFFF; width: 80%;, height: 300px;"></div>
        <p id="webpage-name" class="center">EASYFIT</p>
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
    width: 100%;
    width: 100vw;
    object-fit: cover;
}

#webpage-name {
    font-size: 10ch;
    color: white;
    letter-spacing: 2rem;
}
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
}
</style>