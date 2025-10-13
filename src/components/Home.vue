<template>
  <section class="home container">
    <h1>Benvenuto nel mio portfolio</h1>
    <p>
      Ciao, sono Salvatore, uno sviluppatore web specializzato nella creazione di siti web e applicazioni dinamiche e responsive. Dai un'occhiata ai miei progetti per vedere il mio lavoro.
    </p>
    <router-link to="/projects" class="view-projects-btn">Vedi i miei progetti</router-link>
  </section>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 4rem 2rem;
}

.home h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
}

.home p {
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
  max-width: 700px;
  margin-bottom: 30px;
}

.view-projects-btn {
  display: inline-block;
  background-color: #007BFF;
  padding: 12px 24px;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.view-projects-btn:hover {
  background-color: #0056b3;
}
</style>
