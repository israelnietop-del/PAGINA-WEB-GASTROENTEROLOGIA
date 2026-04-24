package backend;

import java.util.Properties;

/**
 * Ejemplo base para envío automático de comprobantes por email.
 *
 * Recomendación de producción:
 * - Exponer endpoint POST /webhook/pago
 * - Verificar firma de Stripe/MercadoPago
 * - Guardar pago + cliente en base de datos
 * - Disparar email de comprobante
 */
public class EmailPaymentService {

    public static Properties smtpConfig() {
        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");
        return props;
    }

    public static String buildReceiptMessage(String customerName, String amount) {
        return "Hola " + customerName + ", tu pago por " + amount + " fue confirmado. "
                + "Gracias por confiar en GastroVida.";
    }

    public static void main(String[] args) {
        String preview = buildReceiptMessage("Paciente Demo", "$59");
        System.out.println("Previsualización de comprobante: " + preview);
    }
}
