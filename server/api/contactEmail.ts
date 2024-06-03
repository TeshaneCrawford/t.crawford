import { Resend } from 'resend';
import type { H3Event } from 'h3';
import type { ContactMail } from '~/types/mail';

const resend = new Resend(process.env.NUXT_PRIVATE_RESEND_API_KEY)

export default defineEventHandler(async (event: H3Event) => {
  try {
    const body = (await readBody(event)) as ContactMail
    const { name, email, message } = body
    return await resend.emails.send({
      from: 'Teshane Crawford <crawfordteshane@gmail.com>',
      to: [''],
      subject: 'Contact Form Submission',
      html: `
        <h1>Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        `,
    })
  }
  catch (error) {
    return error
  }
})
