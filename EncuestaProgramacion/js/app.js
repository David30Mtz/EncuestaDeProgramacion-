const app = Vue.createApp({
  data() {
    return {
      programar: '',
      aniosProgramando: '',
      experiencia: '',
      lenguajeTemporal: '', 
      lenguajes: [],
      enviado: false,
      preguntaActual: 1 
    };
  },
  methods: {
    siguientePregunta() {
      if (this.preguntaActual < 5) {
        this.preguntaActual++;
      }
    },
    agregarLenguaje() {
      if (this.lenguajeTemporal.trim() !== '') {
        this.lenguajes.push(this.lenguajeTemporal);
        this.lenguajeTemporal = ''; 
      }
    }, 
    siguientePregunta() {
      if (this.programar === 'No') {
        this.finalizarEncuesta();
      } else if (this.preguntaActual < 5) {
        this.preguntaActual++;
      }
    },
    finalizarEncuesta() {
      this.enviado = true;
    },
    enviarEncuesta() {
      this.enviado = true;
    }
    
  }
});

app.mount('#app');
