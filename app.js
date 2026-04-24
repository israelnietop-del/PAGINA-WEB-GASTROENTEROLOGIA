const testimonials = [
  '“Tenía molestias constantes; ahora entiendo mejor mi alimentación y recuperé calidad de vida.” — Laura P.',
  '“La reserva fue muy simple y el seguimiento del médico fue excelente.” — Carlos M.',
  '“Orden, puntualidad y trato humano. Recomiendo GastroVida al 100%.” — Andrea R.'
];

const storeItems = [
  { name: 'Probióticos Digest Plus', price: 24, description: 'Apoyo diario para el equilibrio intestinal.' },
  { name: 'Guía Nutricional Gastro', price: 12, description: 'Recetas y plan de comidas para evitar irritación digestiva.' }
];

function loadNextSlot() {
  const now = new Date();
  now.setDate(now.getDate() + 2);
  const slot = now.toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  document.getElementById('nextSlot').textContent = `${slot} a las 10:00 a. m.`;
}

function rotateTestimonials() {
  let index = 0;
  const node = document.getElementById('testimonialText');
  node.textContent = testimonials[index];

  setInterval(() => {
    index = (index + 1) % testimonials.length;
    node.textContent = testimonials[index];
  }, 5000);
}

function renderStore() {
  const container = document.getElementById('storeContainer');

  storeItems.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <p class="price">$${item.price}</p>
      <button class="btn btn-secondary">Agregar al carrito</button>
    `;
    container.appendChild(card);
  });
}

function enableQuickNavButtons() {
  document.getElementById('btnCita').addEventListener('click', () => {
    document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('btnPlanes').addEventListener('click', () => {
    document.getElementById('planes').scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('btnTestimonios').addEventListener('click', () => {
    document.getElementById('testimonios').scrollIntoView({ behavior: 'smooth' });
  });
}

function saveBooking(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  const previous = JSON.parse(localStorage.getItem('bookingRequests') || '[]');
  previous.push({ ...data, createdAt: new Date().toISOString() });
  localStorage.setItem('bookingRequests', JSON.stringify(previous));

  document.getElementById('formMessage').textContent =
    'Solicitud guardada localmente. Recuerda integrar backend para envío de correo y cobro real.';

  form.reset();
}

function mockPlanSelection() {
  document.querySelectorAll('.buy-plan').forEach((button) => {
    button.addEventListener('click', () => {
      const plan = button.dataset.plan;
      const price = button.dataset.price;
      alert(`Seleccionaste el plan ${plan} por $${price}.\nSiguiente paso: conectar pasarela de pago.`);
    });
  });
}

document.getElementById('bookingForm').addEventListener('submit', saveBooking);
loadNextSlot();
rotateTestimonials();
renderStore();
enableQuickNavButtons();
mockPlanSelection();
