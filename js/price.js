// price page about faq section
const faqBox = document.querySelectorAll(".faq-box");
const faqButton = document.querySelectorAll(".faq-open-and-close-icon");



faqButton.forEach(button => { button.addEventListener('click', () => { button.closest('.faq-box').classList.toggle('active'); }) })