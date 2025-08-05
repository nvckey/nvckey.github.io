document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.content');
    if (content) {
        const message = document.createElement('p');
        message.textContent = 'JavaScript is working!';
        content.appendChild(message);
    }
});
