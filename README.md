# PAGINA-WEB-GASTROENTEROLOGIA

Sitio web de gastroenterología con enfoque en:
- Agendamiento de citas.
- Planes médicos.
- Testimonios/resultados.
- Tienda de productos digestivos.
- Base técnica para integrar cobro con tarjeta y envío automático de comprobantes.

## Estructura
- `index.html`: interfaz principal.
- `styles.css`: estilos responsive.
- `app.js`: comportamiento dinámico (citas, navegación, testimonios, tienda).
- `database/schema.sql`: tablas SQL sugeridas para producción.
- `backend/EmailPaymentService.java`: ejemplo Java para comprobantes de pago.
- `docs/IMPLEMENTACION_Y_COBROS.md`: guía paso a paso de despliegue y cobros.

## Ejecutar en local
```bash
python3 -m http.server 8000
```
Abrir: `http://localhost:8000`
