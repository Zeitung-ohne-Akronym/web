import './material.js'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
const persistScrollingTargetElement = document.querySelector('#targetElementId');
const menuButton = document.getElementById("menu-button");
if (menuButton) menuButton.addEventListener("click", toggleSidebar);

function openSidebar() {
    document.documentElement.classList.add("sidebar-is-open");
    disableBodyScroll(persistScrollingTargetElement, { reserveScrollBarGap: true });
};

function closeSidebar() {
    document.documentElement.classList.remove("sidebar-is-open");
    enableBodyScroll(persistScrollingTargetElement, { reserveScrollBarGap: true });
};

function toggleSidebar(event) {
    if (event) event.preventdefault;
    return document.documentElement.classList.contains("sidebar-is-open") ? closeSidebar() : openSidebar();
};

window.addEventListener('resize', () => {
    if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) > 768) {
        clearAllBodyScrollLocks();
        closeSidebar();
    }
});