<template>
  <section class="contact container">
    <h2>Contattami</h2>
    <p>Sono disponibile per nuove opportunità e collaborazioni. Non esitare a contattarmi!</p>
    <form class="contact-form">
      <label for="name">Nome:</label>
      <input type="text" id="name" />
      
      <label for="email">Email:</label>
      <input type="email" id="email" />
      
      <label for="message">Messaggio:</label>
      <textarea id="message"></textarea>
      
      <button type="submit">Invia</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
.contact {
  text-align: center;
  padding: 4rem 2rem;
}

.contact h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
}

.contact p {
  color: #666;
  margin-bottom: 40px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 600px;
  margin: 0 auto;
}

.contact-form label {
  font-weight: bold;
  color: #333;
}

.contact-form input,
.contact-form textarea {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
}

.contact-form textarea {
  resize: vertical;
  height: 100px;
}

button {
  background-color: #007BFF;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}
</style>
