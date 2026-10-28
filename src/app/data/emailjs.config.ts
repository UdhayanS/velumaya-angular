/**
 * EmailJS settings. The public key is designed to be exposed in browser code;
 * protect it in the EmailJS dashboard instead (Account > Security: allow only
 * your domains, and set a monthly limit).
 */
export const EMAILJS = {
  serviceId: 'service_uwck6q4',
  publicKey: 'iQWHKbacDGyMbA6ki',
  /** Notification mail to Velumaya (To Email is set in the template). */
  notifyTemplateId: 'template_cyko0gt',
  /**
   * Auto-reply to the visitor (To Email = {{email}} in the template).
   * Create it from emailjs-templates/auto-reply.html, then paste its ID here.
   * While empty, the auto-reply is skipped.
   */
  autoReplyTemplateId: '',
};
