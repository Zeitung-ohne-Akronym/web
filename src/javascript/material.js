import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCRipple} from '@material/ripple';

const selector = '.mdc-button, .mdc-card__primary-action';
[].map.call(document.querySelectorAll(selector), (el) => new MDCRipple(el));
const iconButtonRipple = new MDCRipple(document.querySelector('.mdc-icon-button'));
iconButtonRipple.unbounded = true;
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
if (topAppBarElement) new MDCTopAppBar(topAppBarElement);