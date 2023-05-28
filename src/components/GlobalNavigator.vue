<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand"><img src="../assets/Easyfit_logo.png" style="height: 48px;" alt="Easyfit">Easyfit</router-link>
            <button class="navbar-toggler" type="button" data-bg-toggle="collapse" data-bg-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="navbar-nav ms-auto">
                    <li class="nav-item dropdown">
                        <router-link to="" role="button" class="nav-link dropdown-toggle text-dark" data-bs-toggle="dropdown" aria-expanded="false">Fitness</router-link>
                        <div class="dropdown-menu">
                            <router-link class="dropdown-item" to="/ejercicios">Ejercios</router-link>
                            <router-link class="dropdown-item" to="/rutinas">Rutinas</router-link>
                        </div>
                    </li>
                    <router-link to="/nutricion" class="nav-item nav-link text-dark">Nutricion</router-link>
                    <router-link to="/perfil" class="nav-item nav-link text-dark">Perfil</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>


<style>
#logo:hover {
    cursor: pointer;
}
</style>
