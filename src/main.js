import { createApp } from 'vue';
import { router } from '../router';
import App from './App.vue';
import "./styles/main.scss";
import * as bootstrap from 'bootstrap';	

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(faUserSecret, faGithub, faLinkedin, faEnvelope);

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app');

