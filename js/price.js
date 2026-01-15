// price page about faq section
const faqBox = document.querySelectorAll(".faq-box"),
    faqButton = document.querySelectorAll(".faq-open-and-close-icon");


const reset = () => {
    faqBox.forEach(box => {
        box.classList.remove('active');
    })
}

faqButton.forEach(button => {
    button.addEventListener('click', () => {
        reset();
        button.closest('.faq-box').classList.toggle('active');
    })
})