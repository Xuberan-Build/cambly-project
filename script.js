document.addEventListener('DOMContentLoaded', function() {
    // Select all buttons that will expand the cards
    const buttons = document.querySelectorAll('.circle-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Find the parent <li> element
            const parentLi = button.closest('li');

            // Toggle the 'open' class
            parentLi.classList.toggle('open');

            // Optional: log class toggle for debugging
            console.log('Class Toggled:', parentLi.classList.contains('open'));
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Existing circle-btn click handler (leave as is)

    // Tab button click handler
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove the 'active' class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));

            // Add the 'active' class to the clicked button
            this.classList.add('active');

            // Hide all content divs
            tabContents.forEach(content => content.classList.remove('active'));

            // Get the corresponding content based on the data-tab attribute
            const targetContent = document.getElementById(this.dataset.tab);

            // Show the clicked tab's content
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});
