import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCRipple } from '@material/ripple';

const selector = '.mdc-button, .mdc-card__primary-action';
[].map.call(document.querySelectorAll(selector), (el) => new MDCRipple(el));
const iconButtons = document.querySelector('.mdc-icon-button');
if (iconButtons) {
    const iconButtonRipple = new MDCRipple(iconButtons);
    iconButtonRipple.unbounded = true;
}
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
if (topAppBarElement) new MDCTopAppBar(topAppBarElement);
import { MDCList } from "@material/list";
const list = MDCList.attachTo(document.querySelector('.mdc-list'));
list.wrapFocus = true;