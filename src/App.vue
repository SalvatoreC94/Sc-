<template>
  <div id="app">
    <Navbar @toggle-dark-mode="toggleDarkMode" :darkMode="darkMode" />
    <main class="main-content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      darkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      document.body.classList.toggle('dark-mode', this.darkMode); // Aggiungi o rimuovi la classe 'dark-mode' su body
    },
  },
  mounted() {
    // Assicurati che la modalità scura sia sincronizzata con lo stato attuale quando la pagina viene ricaricata
    if (this.darkMode) {
      document.body.classList.add('dark-mode');
    }
  }
};
</script>

<style>
/* Modalità chiara e scura */
body {
  background-color: #f9f9f9;
  color: #333;
  transition: background-color 0.3s ease, color 0.3s ease;
}

body.dark-mode {
  background-color: #121212;
  color: #FFFFFFFF;
}

/* Stili di base per il layout */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Contenuto principale che si espande */
.main-content {
  flex: 1;
  padding: 20px;
}
</style>
