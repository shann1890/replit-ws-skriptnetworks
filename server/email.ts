// Mailgun email service integration

// Check if Mailgun credentials are available
function isMailgunConfigured(): boolean {
  if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
    console.warn('MAILGUN_API_KEY or MAILGUN_DOMAIN environment variable not set - email functionality disabled');
    return false;
  }
  return true;
}

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  serviceType?: string;
  message: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  if (!isMailgunConfigured()) {
    console.error('Mailgun not configured - check MAILGUN_API_KEY and MAILGUN_DOMAIN');
    return false;
  }

  const domain = process.env.MAILGUN_DOMAIN!;
  const apiKey = process.env.MAILGUN_API_KEY!;

  try {
    // Use URLSearchParams for proper form encoding instead of FormData
    const formData = new URLSearchParams();
    formData.append('from', params.from);
    formData.append('to', params.to);
    formData.append('subject', params.subject);
    
    if (params.text) formData.append('text', params.text);
    if (params.html) formData.append('html', params.html);

    console.log(`Sending email to ${params.to} via Mailgun from ${params.from}`);

    const response = await fetch(`https://api.mailgun.net/v3/${domain}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + Buffer.from(`api:${apiKey}`).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData
    });

    const responseData = await response.text();
    
    if (response.ok) {
      console.log(`✅ Email sent successfully to ${params.to} via Mailgun:`, responseData);
      return true;
    } else {
      console.error(`❌ Mailgun API error (${response.status}):`, responseData);
      return false;
    }
  } catch (error) {
    console.error('❌ Mailgun email error:', error);
    return false;
  }
}

export async function sendContactFormEmail(formData: ContactFormData): Promise<boolean> {
  const { name, email, phone, company, serviceType, message } = formData;
  
  // Email to company (Skript Networks)
  const companyEmailHtml = `
    <h2>New Contact Form Submission</h2>
    <h3>Contact Information:</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
    ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
    ${serviceType ? `<p><strong>Service Interest:</strong> ${serviceType}</p>` : ''}
    
    <h3>Message:</h3>
    <p>${message.replace(/\n/g, '<br>')}</p>
    
    <hr>
    <p><em>This email was sent from the Skript Networks contact form.</em></p>
  `;

  const companyEmailText = `
    New Contact Form Submission
    
    Contact Information:
    Name: ${name}
    Email: ${email}
    ${phone ? `Phone: ${phone}` : ''}
    ${company ? `Company: ${company}` : ''}
    ${serviceType ? `Service Interest: ${serviceType}` : ''}
    
    Message:
    ${message}
    
    ---
    This email was sent from the Skript Networks contact form.
  `;

  // Auto-reply email to customer
  const customerEmailHtml = `
    <h2>Thank you for contacting Skript Networks!</h2>
    <p>Dear ${name},</p>
    
    <p>We have received your inquiry and appreciate your interest in our IT consultancy and technology solutions.</p>
    
    <p>Our team will review your message and get back to you within 24 hours. If you need immediate assistance, please call us at <strong>+60 12-345 6789</strong> during business hours (Mon-Fri 9AM-6PM).</p>
    
    <h3>Your Message:</h3>
    <p>${message.replace(/\n/g, '<br>')}</p>
    
    <p>Best regards,<br>
    <strong>Skript Networks Team</strong><br>
    Professional IT Consultancy & Technology Solutions<br>
    📧 info@skriptnetworks.com<br>
    📞 +60 12-345 6789<br>
    📍 Kuala Lumpur, Malaysia</p>
  `;

  const customerEmailText = `
    Thank you for contacting Skript Networks!
    
    Dear ${name},
    
    We have received your inquiry and appreciate your interest in our IT consultancy and technology solutions.
    
    Our team will review your message and get back to you within 24 hours. If you need immediate assistance, please call us at +60 12-345 6789 during business hours (Mon-Fri 9AM-6PM).
    
    Your Message:
    ${message}
    
    Best regards,
    Skript Networks Team
    Professional IT Consultancy & Technology Solutions
    Email: info@skriptnetworks.com
    Phone: +60 12-345 6789
    Location: Kuala Lumpur, Malaysia
  `;

  try {
    // Send email to company
    const companyEmailSent = await sendEmail({
      to: 'info@skriptnetworks.com',
      from: `noreply@${process.env.MAILGUN_DOMAIN}`, // Use your verified Mailgun domain
      subject: `New Contact Form Submission from ${name}`,
      text: companyEmailText,
      html: companyEmailHtml
    });

    // Send auto-reply to customer
    const customerEmailSent = await sendEmail({
      to: email,
      from: `info@${process.env.MAILGUN_DOMAIN}`, // Use your verified Mailgun domain
      subject: 'Thank you for contacting Skript Networks',
      text: customerEmailText,
      html: customerEmailHtml
    });

    return companyEmailSent && customerEmailSent;
  } catch (error) {
    console.error('Error sending contact form emails:', error);
    return false;
  }
}