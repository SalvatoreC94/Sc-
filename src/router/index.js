import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
// import Skills from '../components/Skills.vue';
import Projects from '../components/Projects.vue';
import About from '../components/About.vue';
import Contact from '../components/Contact.vue';

const routes = [
    { path: '/', component: Home },
    // { path: '/skills', component: Skills }, 
    { path: '/projects', component: Projects },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;




class FullStackWebDeveloper {
    constructor() {
        this.skills = ['JavaScript', 'Laravel', 'PHP', 'Vue.js', 'Vite', 'MySQL', 'HTML', 'CSS'];
    }
}

function startWith(developer) {
    console.log('Starting work with:', developer);
}

let needDeveloper = true;

if (needDeveloper) {
    startWith(new FullStackWebDeveloper());
    console.log('Development started.');
}
