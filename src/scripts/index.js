import '../styles/index.scss';
// libs
//-------------------------------------------------------
window.$ = require('jquery');

window.jQuery = window.$;

require('./libs/index');

// utils
//----------------------------------------------
require('./utils/index');

// components
//----------------------------------------------
require('./components/sliders/intro-slider');
require('./components/sliders/multy-slider');
require('./components/sliders/pics-slider');
require('./components/sliders/pdct-sliders');

import Nav from './components/nav';

Nav.init();
