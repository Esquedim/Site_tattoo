// função pra funcionar o underline na header quando visivel
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const sectionId = entry.target.id;
        const link = document.querySelector(`.nav-link[data-section="${sectionId}"]`);

        if (entry.isIntersecting) {
            navLinks.forEach(l => l.classList.remove('active'));
            if (link) link.classList.add('active');
        }
    });
}, {
    threshold: 0.6
});

navLinks.forEach(link => {
    const section = document.getElementById(link.dataset.section);
    if (section) observer.observe(section);
});
