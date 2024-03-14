import {initGuideWinListeners} from './guide.js';
import {moveTitle} from './scroll-header.js';
import {saveCurrentState} from "./state.js";
import {toggleMenu} from './toggle-menu.js';
import {toggleMode} from './toggle-dark-mode.js';

initGuideWinListeners();
moveTitle();
saveCurrentState();
toggleMenu();
toggleMode();