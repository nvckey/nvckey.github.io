document.querySelectorAll('.tab-link').forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-tab');

        document.querySelectorAll('.tab-link').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(section => section.classList.remove('active'));

        button.classList.add('active');
        document.getElementById(target).classList.add('active');
    });
});
