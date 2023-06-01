<template>
    <div>
      <h1>Cuestionario</h1>
      <h2>Datos personales</h2>
      <label>Nombre:</label>
      <input type="text" v-model="nombre" />
      <label>Edad:</label>
      <input type="number" v-model="edad" />
      <label>Sexo:</label>
      <select class="form-control" v-model="sexo">
        <option value="masc">Masculino</option>
        <option value="fem">Femenino</option>
        <option value="otro">Otro</option>
    </select>
      <label>Correo Electronico:</label>
      <input type="text" v-model="email" />
      <label>Peso en kg:</label>
      <input type="number" v-model="peso" />
      <label>Altura en cm:</label>
      <input type="number" v-model="altura" />
  
      <h2>Conocimientos Previos</h2>
      <!--  PREGUNTA 1  -->
  <form>
    <fieldset>
            <legend>1- ¿Ha estado en algun gimnasio anteriormente?</legend>
            <label>
                <input type="radio" v-model="pregunta1" value="5"> Si
            </label>
            <label>
                <input type="radio" v-model="pregunta1" value="0"> No
            </label>
            <label>
                <input type="radio" v-model="pregunta1" value="0"> N/A
            </label>
    </fieldset>
  <!--  PREGUNTA 2  -->
  <fieldset>
        <legend>2- ¿Como de activo eres en tu dia a dia? </legend>
        <div class="col-md-2">
        <label>
        <input type="radio" v-model="pregunta2" value="5"> Muy activo
        </label>
        </div>
        <div class="col-md-2">
        <label>
        <input type="radio" v-model="pregunta2" value="3"> Activo
        </label>
        </div>
        <div class="col-md-2">
        <label>
        <input type="radio" v-model="pregunta2" value="0"> Poco Activo
        </label>
        </div>
  </fieldset>
  <!--  PREGUNTA 3  -->
  <fieldset>
      <legend>3- ¿Que te describe mejor? </legend>
    <div>
      <label>
      <input type="radio" v-model="pregunta3" value="5"> No puedo ganar musculo ni engordar sin importar lo que coma
    </label>
    </div>
    <div>
      <label>
        <input type="radio" v-model="pregunta3" value="3"> Tengo un peso acorde a mi cuerpo
      </label>
    </div>
    <div>
      <label>
        <input type="radio" v-model="pregunta3" value="1"> Estoy a gusto con mi cuerpo pero me gustaria reducir algun quilo
      </label>
    </div>
    <div>
      <label>
        <input type="radio" v-model="pregunta3" value="0"> Necesito reducir bastante mi peso
      </label>
    </div>
  </fieldset>
  <!--  PREGUNTA 4  -->
  <fieldset>
      <legend>4- ¿Fumas o bebes alcohol de manera moderada?</legend>
    <div>
      <label>
        <input type="radio" v-model="pregunta4" value="0"> Si
      </label>
    </div>
    <div>
      <label>
        <input type="radio" v-model="pregunta4" value="5"> No
      </label>
    </div>
    <div>
      <label>
        <input type="radio" v-model="pregunta4" value="0"> N/A
      </label>
    </div>
  </fieldset>
  <br>
  </form>
  <hr>
  <!--  Objetivos  -->
  <section class="row">
    <div class="col-md-12">
      <h3>Objetivos.</h3>
      <p></p>
    </div>
  </section>
  <!--  PREGUNTA 5  -->
    <div>
        <div>
          <label for="diasEjercicio">Cuantos dias a la semana haras ejercicio: *</label>
            <input type="number" v-model="pregunta5" class="form-control" placeholder="Numero de dias" maxlength="3" value="">
        </div>
      </div>
  <!--  PREGUNTA 6  -->
  <fieldset>
      <legend>6- ¿Tienes conocimiento de como hacer los ejercicios?</legend>
    <div>
      <label>
        <input type="radio" v-model="pregunta6" value="5"> Si
      </label>
    </div>
    <div>
      <label>
        <input type="radio" v-model="pregunta6" value="0"> No
      </label>
    </div>
    <div>
      <label>
        <input type="radio" v-model="pregunta6" value="0"> N/A
      </label>
    </div>
  </fieldset>
  <!--  PREGUNTA 7  -->
  <fieldset>
      <legend>7- ¿Prefieres realizar los ejercicios con tu propio peso?</legend>
    <div>
      <label>
        <input type="radio" v-model="pregunta7" value="3"> Si
      </label>
    </div>
    <div>
      <label>
        <input type="radio" v-model="pregunta7" value="3"> No
      </label>
    </div>
    <div>
      <label>
        <input type="radio" v-model="pregunta7" value="0"> N/A
      </label>
    </div>
  </fieldset>
  <!--  PREGUNTA 8  -->
  <fieldset>
      <legend>8- ¿Te gustaria haer clases grupales? Como yoga, bodypump... </legend>
    <div>
      <label>
        <input type="radio" v-model="pregunta8" value="3"> Si
      </label>
    </div>
    <div>
      <label>
        <input type="radio" v-model="pregunta8" value="3"> No
      </label>
    </div>
    <div>
      <label class="radio">
        <input type="radio" v-model="pregunta8" value="3"> N/A
      </label>
    </div>
  </fieldset>
  <!--  Comentarios  -->
  <section class="row">
    <div>
      <h4>Comentarios.</h4>
      <p></p>
    </div>
  </section>
  <section class="row">
    <div>
      <div class="form-group">
        <label for="comment">Comentarios:</label>
        <textarea class="form-control" rows="6" id="comentarios"></textarea>
      </div>
    </div>
  </section>  
      <button @click="enviarTest">Enviar Test</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nombre: '',
        edad: '',
        sexo: '',
        email: '',
        altura: '',
        peso: '',
        puntuacionFinal: 0,
      };
    },
    methods: {
      calcularPuntuacionFinal() {
        // Realiza los cálculos necesarios para obtener la puntuación final
        // Puedes utilizar las respuestas y asignar el resultado a this.puntuacionFinal
        this.puntuacionFinal = parseInt(this.pregunta1) + parseInt(this.pregunta2) + parseInt(this.pregunta3) + parseInt(this.pregunta4) + 
        parseInt(this.pregunta5) + parseInt(this.pregunta6) + parseInt(this.pregunta7) + parseInt(this.pregunta8)
        },
      enviarTest() {
        this.calcularPuntuacionFinal()
        const datosTest = {
            nombre: this.nombre,
            edad: this.edad,
            sexo: this.sexo,
            email: this.email,
            altura: this.altura,
            peso: this.peso,
            puntuacionFinal: this.puntuacionFinal,
        };
        this.$emit('datos-cuestionario', datosCuestionario);
      },
    },
  };
  </script>
  