import debounce from 'lodash.debounce';
import './material.js'
const menuButton = document.getElementById("menu-button");
if (menuButton) menuButton.addEventListener("click", toggleSidebar);
const main = document.getElementsByTagName("main")[0];

function openSidebar() {
    document.documentElement.classList.add("sidebar-is-open");
};

function closeSidebar() {
    document.documentElement.classList.remove("sidebar-is-open");
};

function toggleSidebar(event) {
    if (event) event.preventdefault;
    return document.documentElement.classList.contains("sidebar-is-open") ? closeSidebar() : openSidebar();
};

window.addEventListener('resize', () => {
    if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) > 768) {
        closeSidebar();
    }
});

const mainNavLinks = document.querySelectorAll(".menu .mdc-list-item");
const mainSections = document.querySelectorAll("main>section");

let lastId;
let cur = [];

window.addEventListener("scroll", debounce(_ => {
    console.log("scrolling window: " + window.scrollY);
    if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) > 768) selectNavLink(window.scrollY);
}, 200));

if (main) main.addEventListener("scroll", debounce(_ => {
    console.log("scrolling main: " + main.scrollTop);
    if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) <= 769) selectNavLink(main.scrollTop);
}, 200));

function selectNavLink(scrollHeight) {
    scrollHeight += 16;
    mainNavLinks.forEach(link => {
        if (link.hash) {
            let section = document.querySelector(link.hash);
            if (
                section.offsetTop <= scrollHeight &&
                section.offsetTop + section.offsetHeight > scrollHeight
            ) {
                link.classList.add("mdc-list-item--activated");
            } else {
                link.classList.remove("mdc-list-item--activated");
            }
        }
    });
}