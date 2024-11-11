const app = {
    data() {
        return {
            saludar: 'Bienvenido a la Encuesta de Programación',
            gustarProgramar: '',
            aniosProgramando: '',
            experienciaProgramando: '',
            nuevoLenguaje: '',
            lenguajesConocidos: [],
            mostrarResultados: false
        };
    },
    methods: {
        agregarLenguaje() {
            if (this.nuevoLenguaje.trim() !== '') {
                this.lenguajesConocidos.push(this.nuevoLenguaje.trim());
                this.nuevoLenguaje = '';
            }
        },
        eliminarLenguaje(index) {
            this.lenguajesConocidos.splice(index, 1);
        }
    }
};

// Montamos la instancia de Vue en el elemento con el id "seccion"
Vue.createApp(app).mount('#seccion');
