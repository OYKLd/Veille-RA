            // Fonctionnalité FAQ
            document.querySelectorAll('.faq-question').forEach(question => {
                question.addEventListener('click', () => {
                    const answer = question.nextElementSibling;
                    const isActive = answer.classList.contains('active');
                    
                    // Fermer toutes les réponses
                    document.querySelectorAll('.faq-answer').forEach(item => {
                        item.classList.remove('active');
                    });
                    
                    document.querySelectorAll('.faq-question span:last-child').forEach(span => {
                        span.textContent = '+';
                    });
                    
                    // Ouvrir/fermer la réponse actuelle
                    if (!isActive) {
                        answer.classList.add('active');
                        question.querySelector('span:last-child').textContent = '-';
                    }
                });
            });
            
            // Gestion du formulaire de contact
            document.getElementById('contactForm').addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Merci pour votre message ! Nous vous répondrons dès que possible.');
                this.reset();
            });