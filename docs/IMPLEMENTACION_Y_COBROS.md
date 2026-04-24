# Implementación, despliegue y cobro con tarjeta (paso a paso)

## 1) Dejar la web lista en local
1. Abre el proyecto en Visual Studio Code.
2. Verifica archivos: `index.html`, `styles.css`, `app.js`.
3. Prueba localmente con Live Server o con `python3 -m http.server 8000`.

## 2) Subirla para que funcione en todos los dispositivos
> Si por “alred” te referías a “la red/internet”, esta ruta funciona con Vercel/Netlify.

1. Crea una cuenta en Vercel o Netlify.
2. Sube el repositorio GitHub.
3. Importa el repositorio en la plataforma.
4. Build command: vacío (sitio estático).
5. Publish directory: `/`.
6. Activa HTTPS automático.
7. Verifica desde móvil, tablet y escritorio.

## 3) Configurar cobro con tarjeta (Stripe recomendado)
1. Crea cuenta en Stripe.
2. En Stripe Dashboard, obtén:
   - `STRIPE_PUBLISHABLE_KEY`
   - `STRIPE_SECRET_KEY`
3. Crea producto y precio (planes o productos).
4. Implementa `Checkout Session` desde backend Java (endpoint `/crear-checkout`).
5. Configura webhook `/webhook/pago` para confirmar pagos.
6. En el webhook:
   - valida firma del evento,
   - actualiza tabla `pagos`,
   - marca estado aprobado.
7. Muestra “Pago confirmado” al cliente en frontend.

## 4) Envío automático de comprobante por email
1. Usa SendGrid, Resend o Amazon SES.
2. Al confirmar webhook de pago, ejecuta función de email.
3. Plantilla mínima del correo:
   - nombre,
   - monto,
   - fecha,
   - número de referencia.
4. Guarda trazabilidad del envío (fecha y estado).

## 5) Dónde se registrará la información de clientes
- En producción: base de datos SQL (PostgreSQL o MySQL), con tablas `clientes`, `citas` y `pagos` del archivo `database/schema.sql`.
- En la demo actual: las citas se guardan en el navegador con `localStorage`.

## 6) Recomendaciones extra para que sea autosostenible
1. Panel admin con métricas: citas por semana, pagos, no-shows.
2. Copias de seguridad automáticas diarias.
3. Alertas por email ante error de pago.
4. CAPTCHA y validación anti-spam en formularios.
5. Política de privacidad y consentimiento de datos.
