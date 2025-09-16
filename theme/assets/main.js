import './styles/main.css';

import.meta.glob(['../components/**/*.css', '../blocks/**/*.css'], { eager: true });
import.meta.glob(['../components/**/*.js', '../blocks/**/*.js'], { eager: true });

import Alpine from 'alpinejs';
window.Alpine = Alpine;
window.Alpine.start();