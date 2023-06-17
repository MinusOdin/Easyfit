<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link to="/" class="navbar-brand"><img src="../../assets/Easyfit_logo.png" style="height: 48px;" alt="Easyfit"> Easyfit</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <div class="navbar-nav">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Fitness</a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <router-link class="dropdown-item" to="/ejercicios">Ejercios</router-link>
                        <router-link class="dropdown-item" to="/rutinas">Rutinas</router-link>
                    </div>
                </li>
                <router-link to="/nutricion" class="nav-item nav-link text-dark"><a>Nutricion</a></router-link>
                <router-link to="/perfil" class="nav-item nav-link text-dark">Perfil</router-link>
            </div>
        </div>
    </nav>
</template>


<style>
#logo:hover {
    cursor: pointer;
}
</style>
