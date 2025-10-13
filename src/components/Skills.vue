<template>
  <section class="skills container" data-aos="fade-right">
    <h2>My Skills</h2>
    <div class="skill" v-for="skill in skills" :key="skill.name">
      <span>{{ skill.name }}</span>
      <div class="progress">
        <div class="progress-bar" :style="{ width: skill.level + '%' }"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 80 },
        { name: 'JavaScript', level: 85 },
        { name: 'Vue.js', level: 75 },
        { name: 'Laravel', level: 70 },
      ],
    };
  },
};
</script>

<style scoped>
.skills h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.skill {
  margin-bottom: 15px;
}

.progress {
  background: #ddd;
  border-radius: 5px;
  overflow: hidden;
  height: 10px;
}

.progress-bar {
  height: 100%;
  background-color: #007BFF;
  transition: width 0.3s ease;
}
</style>
