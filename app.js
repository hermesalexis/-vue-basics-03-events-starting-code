const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    /* event es deault event objeto y proviene del evento enlazado */
    setName(event, lastName){ /* No es necesario que que los elementos de data y methods tengan el mismo orden */
      this.name = `${event.target.value} ${lastName}`;
    },
    incrementCounter(number) { /* este método no tiene return porque no retorna ningun valor, sólo actualiza el valor de la variable de instancia counter */
      this.counter +=  number;
    },
    decreaseCounter(number) {
      this.counter -= number;
    },
    submitForm() {
      alert('Submited!!');
    },
    confirmInput(){
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
