const tabsSets = document.querySelectorAll('[data-tab-set]');

tabsSets.forEach(tabSet => {
    const tabs = tabSet.querySelectorAll('[data-tab]');
    const contents = tabSet.querySelectorAll('[data-tab-content]');

    const toggleContent = function (event) {
        event.preventDefault(); // Prevent default behavior of anchor tag

        const currentTab = this.getAttribute('data-tab');

        tabs.forEach(tab => {
            tab.classList.remove('active');
        });

        this.classList.add('active');

        contents.forEach(content => {
            if (content.getAttribute('data-tab-content') === currentTab) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', toggleContent);
        tab.addEventListener('keydown', function (e) {
            if (e.keyCode === 13 || e.keyCode === 32) { // Handle Enter or Space key press
                e.preventDefault(); // Prevent default behavior
                toggleContent.call(this, e); // Call toggleContent function
            }
        });
    });
});
