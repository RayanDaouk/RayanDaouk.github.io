import '../css/main.css';

import { glitch } from './glitch.js';
glitch();

import { wave } from './power-bg.js';
wave();

import { gsapCarousel } from './carousel.js';
gsapCarousel();


import { btnEmitter } from './btn-emitter.js';
btnEmitter();

// --------------------------------------------
import { btnSkills } from './btn-skills.js';
const skillsController = btnSkills();

import { terminalSkills } from './terminal-skills.js';
terminalSkills(skillsController.subscribe);
// --------------------------------------------

import { experience } from './terminal-experiences.js';
experience();

import { footer } from './footer.js';
footer();

import { scrollbar } from './scrollbar.js';
scrollbar();

import { cursors } from './cursors.js';
cursors();

import { dino } from './dino.js';
dino();
