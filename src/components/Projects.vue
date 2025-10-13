<template>
  <section class="projects container">
    <h2>I miei progetti</h2>
    <p>Qui puoi trovare alcuni dei progetti a cui ho lavorato:</p>
    <div class="project-list">
      <!-- Esempio di progetto -->
      <div class="project-item">
        <h3>Titolo del Progetto</h3>
        <p>Breve descrizione del progetto.</p>
      </div>
      <!-- Aggiungi altri progetti qui -->
    </div>
  </section>
</template>

<script>
export default {
  name: "Projects",
};
</script>

<style scoped>
.projects {
  padding-top: 80px;
  text-align: center;
}

.dark-mode .projects h2,
.dark-mode .projects p,
.dark-mode .projects h3 {
  color: #d1d1d1; /* Colore del testo in modalità scura per maggiore leggibilità */
}

.project-list {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;
}

.project-item {
  background-color: #1a1a1a; /* Sfondo più scuro in modalità scura */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 300px;
}

.project-item:hover {
  transform: translateY(-5px);
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.2);
}

.project-item h3 {
  font-size: 1.5rem;
  color: #ffffff; /* Colore del titolo del progetto più chiaro */
  margin-bottom: 10px;
}
</style>
