const tabBtns = document.querySelectorAll('[data-tab]');
const tabContents = document.querySelectorAll('[data-content]');


tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {

        clearActiveClasses();

        activate(btn);

        tabContents.forEach(tab => {
            if (tab.getAttribute('data-content') === btn.getAttribute('data-tab')) {
                activate(tab);
            }
        })
    })
})

const clearActiveClasses = () => {
    tabBtns.forEach(btn => {
        btn.classList.remove("active")
    })
    tabContents.forEach(tab => {
        tab.classList.remove("active")
    })
}

const activate = (element) => {
    element.classList.add("active")
}