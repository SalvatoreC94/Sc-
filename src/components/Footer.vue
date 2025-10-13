<template>
  <footer class="footer">
    <div class="social-icons">
      <a href="https://github.com/username" target="_blank"><i class="fab fa-github"></i></a>
      <a href="https://linkedin.com/in/username" target="_blank"><i class="fab fa-linkedin"></i></a>
      <a href="https://twitter.com/username" target="_blank"><i class="fab fa-twitter"></i></a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  text-align: center;
  padding: 20px;
  background-color: #333;
  color: #fff;
  box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.5);
}

.dark-mode .footer {
  background-color: #1a1a1a;
  color: #e6e6e6; /* Colore più chiaro per leggibilità */
}

.social-icons {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 10px;
}

.social-icons a {
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.dark-mode .social-icons a {
  color: #f0f0f0; /* Colore più chiaro per contrasto */
}

.social-icons a:hover {
  color: #FFD700;
}
</style>







