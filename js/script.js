"use strict"
/*
Descrizione:
Partendo dal markup della versione svolta in js plain, 
rifare lo slider ma questa volta usando Vue.
Bonus:
1- al click su una thumb, visualizzare in grande l’immagine corrispondente
2- applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce
Consigli del giorno:
- regola d’oro: riciclare ovunque possibile! Questo significa che per la parte di markup possiamo recuperare html e css dell’esercizio svolto qualche giorno fa: è già tutto pronto!
- il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l’esercizio si riduce a poche righe ;)
Buon lavoro e buon divertimento!
*/

Vue.createApp({
  data() {
      return {
          slides: [
            {
              image: 'img/01.webp',
              title: 'Marvel\'s Spiderman Miles Morale',
              text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
            }, {
              image: 'img/02.webp',
              title: 'Ratchet & Clank: Rift Apart',
              text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
            }, {
              image: 'img/03.webp',
              title: 'Fortnite',
              text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
            }, {
              image: 'img/04.webp',
              title: 'Stray',
              text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
            }, {
              image: 'img/05.webp',
              title: "Marvel's Avengers",
              text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
            }
          ],

          activeThumbIndex: 0,
          intervalTimerId: null
      }
  },

  methods: {
      // quando il button è cliccato, decrementa di 1 il thumbIndex
      onPrevClick() {
        this.activeThumbIndex--;
        // se l'indice dell'elemento è minore di zero, allora
        if (this.activeThumbIndex < 0) {
          // sposta l'indice 
          this.activeThumbIndex = this.slides.length - 1;
        } 
          
      },
      // quando il button è cliccato, aumenta di 1 il thumbIndex
      onNextClick() {
      // se l'indice dell'elemento è maggiore della lunghezza dell'array, allora
      if (this.activeThumbIndex >= (this.slides.length) - 1) {
        // resetta l'indice 
        this.activeThumbIndex = 0;
      } else {
        // altrimenti aumentalo di 1
        this.activeThumbIndex++;
      }
      },
      // al click rende attivo il thumb index come per i buttons
      onThumbClick(i){
        this.activeThumbIndex = i
      },
      startAutoplay(){
        // best practice: prima di avviare un timer, se ce ne sono altri attivi
        // devo prima fermarli (non in questo caso)
        if (this.intervalTimerId){
          this.stopAutoplay();
        }
        
        this.intervalTimerId = setInterval(() => {
          this.onNextClick()
        }, 1000)
      },
      stopAutoplay(){
        clearInterval(this.intervalTimerId)
      }
  },

  mounted() {
    this.startAutoplay()
  }
}).mount("#app")