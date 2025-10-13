<template>
  <nav class="navbar">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/projects">Progetti</router-link></li>
      <li><router-link to="/about">Chi sono</router-link></li>
      <li><router-link to="/contact">Contatti</router-link></li>
      <li>
        <button @click="$emit('toggle-dark-mode')" class="mode-toggle-btn">
          <i :class="darkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: ["darkMode"],
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #007BFF;
  padding: 10px 0;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.dark-mode .navbar {
  background-color: #1a1a1a;
}

.navbar ul {
  display: flex;
  justify-content: center;
  list-style: none;
  gap: 30px;
}

.navbar a, .navbar button {
  color: #ffffff;
  font-weight: bold;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;
}

.dark-mode .navbar a, .dark-mode .navbar button {
  color: #f0f0f0; /* Colore più chiaro per contrasto */
}

.mode-toggle-btn {
  font-size: 1.2rem;
}

.navbar a:hover, .navbar button:hover {
  color: #FFD700;
}
</style>
