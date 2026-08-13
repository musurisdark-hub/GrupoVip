// Troque pelo número do WhatsApp que receberá os cadastros.
const WHATSAPP_NUMBER = '5521979884682';

const form = document.getElementById('signupForm');
const dialog = document.getElementById('termsDialog');

document.getElementById('openTerms').addEventListener('click', () => dialog.showModal());
document.getElementById('closeTerms').addEventListener('click', () => dialog.close());

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.checkValidity()) { form.reportValidity(); return; }

  const nome = document.getElementById('nome').value.trim();
  const sobrenome = document.getElementById('sobrenome').value.trim();
  const email = document.getElementById('email').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const texto = `Olá! Quero entrar no Club Love.%0A%0ANome: ${encodeURIComponent(nome)}%0ASobrenome: ${encodeURIComponent(sobrenome)}%0AE-mail: ${encodeURIComponent(email)}%0ATelefone: ${encodeURIComponent(telefone)}%0A%0AConfirmo que sou maior de 18 anos e aceitei os Termos de Uso.`;

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`, '_blank', 'noopener');
});
