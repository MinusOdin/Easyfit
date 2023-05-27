<template>
    <nav class="col-sm-12 row bg-light">
        <router-link to="/" id="logo" class="col-sm-1 p-0 ms-3"><img src="../assets/Easyfit_logo.png" style="height: 48px;" alt="Easyfit"> Easyfit</router-link>
        <p class="col-sm-7"></p>
        <router-link to="/fitness" class="col-sm-1 p-1 py-2 text-dark">Fitness</router-link>
        <router-link to="/nutricion" class="col-sm-1 p-1 py-2 text-dark">Nutricion</router-link>
    </nav>
</template>


<style>
#logo:hover {
    cursor: pointer;
}
</style>
