'use server';

import nodemailer from 'nodemailer';

/**
 * @fileOverview Handles automated email notifications for Gaupro.
 * 
 * Uses HostAfrica SMTP settings from environment variables.
 */

const transporter = nodemailer.createTransport({
  host: process.env.GAUPRO_SMTP_HOST,
  port: parseInt(process.env.GAUPRO_SMTP_PORT || '465'),
  secure: process.env.GAUPRO_SMTP_PORT === '465', // true for 465, false for other ports
  auth: {
    user: process.env.GAUPRO_SMTP_USER,
    pass: process.env.GAUPRO_SMTP_PASSWORD,
  },
});

interface LeadEmailProps {
  proBusinessName: string;
  proEmail: string;
  leadId: string;
  serviceName: string;
  location: string;
  when: string;
  creditCost: number;
  leadRequirements: string;
  isTest?: boolean;
}

export async function sendLeadNotificationEmail(props: LeadEmailProps) {
  const {
    proBusinessName,
    proEmail,
    leadId,
    serviceName,
    location,
    when,
    creditCost,
    leadRequirements,
    isTest = false,
  } = props;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.gaupro.co.za';
  const leadUrl = `${baseUrl}/pro/leads/${leadId}`;
  const passUrl = `${baseUrl}/pro/leads/${leadId}/pass`;
  const editProfileUrl = `${baseUrl}/pro/profile/edit`;
  const notificationSettingsUrl = `${baseUrl}/pro/account-settings`;

  const subject = `${isTest ? '[Gaupro TEST] ' : '🚨 '}New Gaupro Lead – ${serviceName} – ${location.split(',')[0]}`;

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #ff0000; color: white; padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background-color: #ffffff; padding: 30px 20px; border: 1px solid #e5e7eb; }
        .footer { background-color: #f9fafb; padding: 20px; text-align: center; font-size: 12px; color: #6b7280; border: 1px solid #e5e7eb; border-top: 0; border-radius: 0 0 8px 8px; }
        .section-title { font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; font-size: 12px; color: #ef4444; margin-bottom: 8px; }
        .lead-detail { margin-bottom: 20px; border-bottom: 1px solid #f3f4f6; padding-bottom: 15px; }
        .lead-detail:last-child { border-bottom: 0; }
        .label { font-size: 11px; font-weight: 700; color: #9ca3af; text-transform: uppercase; margin-bottom: 4px; }
        .value { font-size: 16px; font-weight: 600; color: #111827; }
        .requirements { background-color: #f3f4f6; padding: 15px; border-radius: 6px; font-size: 14px; color: #374151; white-space: pre-wrap; margin-top: 10px; }
        .cta-button { display: inline-block; padding: 14px 28px; background-color: #ff0000; color: #ffffff !important; text-decoration: none; border-radius: 6px; font-weight: 700; text-align: center; margin-top: 20px; width: 80%; }
        .secondary-button { display: inline-block; padding: 10px 20px; background-color: #ffffff; color: #4b5563 !important; text-decoration: none; border: 1px solid #d1d5db; border-radius: 6px; font-weight: 600; text-align: center; margin-top: 10px; font-size: 13px; }
        .lock-box { background-color: #fffbeb; border: 1px solid #fef3c7; padding: 15px; border-radius: 6px; margin: 20px 0; text-align: center; }
        .divider { border: 0; border-top: 1px solid #e5e7eb; margin: 30px 0; }
        .test-banner { background-color: #fef3c7; color: #92400e; padding: 10px; text-align: center; font-weight: bold; border-radius: 4px; margin-bottom: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin:0; font-size: 24px;">GAUPRO</h1>
          <p style="margin:5px 0 0; opacity: 0.9;">New Lead Notification</p>
        </div>
        <div class="content">
          ${isTest ? '<div class="test-banner">⚠️ THIS IS A SYSTEM TEST</div>' : ''}
          <p style="font-size: 18px; margin-top: 0;">Hi <strong>${proBusinessName}</strong>,</p>
          <p>You have a new customer request on Gaupro that matches your services and service area.</p>
          
          <div class="divider"></div>
          
          <div class="section-title">🚨 New Customer Request</div>
          
          <div class="lead-detail">
            <div class="label">Service</div>
            <div class="value">${serviceName}</div>
          </div>
          
          <div class="lead-detail">
            <div class="label">Location</div>
            <div class="value">${location}</div>
          </div>
          
          <div class="lead-detail">
            <div class="label">When</div>
            <div class="value">${when}</div>
          </div>

          <div class="lead-detail">
            <div class="label">Lead Cost</div>
            <div class="value">${creditCost} Credits</div>
          </div>

          <div class="section-title" style="margin-top: 30px;">Customer Requirements</div>
          <div class="requirements">${leadRequirements}</div>

          <div class="lock-box">
            <p style="margin: 0; font-weight: 700; color: #92400e;">🔒 CUSTOMER DETAILS HIDDEN</p>
            <p style="margin: 5px 0 0; font-size: 12px; color: #b45309;">Unlock this lead to see the customer's name and phone number.</p>
          </div>

          <div style="text-align: center;">
            <a href="${leadUrl}" class="cta-button">VIEW / UNLOCK LEAD</a>
            <br>
            <a href="${passUrl}" class="secondary-button">PASS ON THIS LEAD</a>
          </div>

          <div class="divider"></div>
          
          <p style="font-size: 12px; color: #6b7280;">
            You are receiving this email because your Gaupro profile matches this customer's service category and area. 
          </p>
          
          <div style="font-size: 12px; color: #6b7280; margin-top: 10px;">
            <a href="${baseUrl}/browse-leads" style="color: #ff0000;">View available leads</a> • 
            <a href="${editProfileUrl}" style="color: #ff0000;">Update service areas</a> • 
            <a href="${editProfileUrl}" style="color: #ff0000;">Manage profile</a>
          </div>
        </div>
        <div class="footer">
          <strong>Gaupro</strong><br>
          Get more work. Grow your business.<br>
          <a href="${baseUrl}" style="color: #ff0000; text-decoration: none;">www.gaupro.co.za</a>
          <br><br>
          <a href="${notificationSettingsUrl}" style="color: #9ca3af; text-decoration: underline;">Manage email notifications</a>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    const info = await transporter.sendMail({
      from: '"Gaupro Leads" <leads@gaupro.co.za>',
      to: proEmail,
      subject: subject,
      html: html,
    });
    return { success: true, messageId: info.messageId };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
