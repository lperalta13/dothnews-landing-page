import 'dotenv/config'
import express from 'express'
import nodemailer from 'nodemailer'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()

app.use(express.json())
app.use(express.static(join(__dirname, 'dist')))

const DESTINATARIOS = ['semproblema@gmail.com', 'ajuda@dothcom.net', 'dothcom@gmail.com']

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT) || 587,
  secure: process.env.MAIL_SECURE === 'true',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
})

function buildEmailHtml(data) {
  const field = (label, value) =>
    value
      ? `<tr><td style="padding:6px 0;font-size:14px;color:#555;"><strong>${label}:</strong> ${value}</td></tr>`
      : ''

  return `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:auto;">
      <div style="background:#3493E0;padding:24px 32px;">
        <a href="https://www.dothnews.com.br" style="color:#fff;font-size:20px;font-weight:bold;text-decoration:none;">dothNews</a>
      </div>
      <div style="background:#fff;padding:32px;">
        <p style="font-size:14px;color:#666;margin:0 0 8px;">Novo diagn&oacute;stico solicitado via landing page</p>
        <p style="font-size:28px;font-weight:bold;color:#333;margin:0 0 24px;">${data.nome}</p>
        <table cellpadding="0" cellspacing="0" style="width:100%;">
          ${field('Portal', data.portal)}
          ${field('URL', data.url)}
          ${field('Contato (WhatsApp)', data.contato)}
          ${field('Audi&ecirc;ncia mensal', data.audiencia)}
          ${field('Plataforma atual', data.plataforma)}
          ${field('Principal dificuldade', data.dificuldade ? data.dificuldade.replace(/\n/g, '<br>') : '')}
        </table>
      </div>
      <div style="background:#DC3930;height:4px;"></div>
      <div style="background:#F56962;padding:14px;text-align:center;color:#fff;font-size:13px;">www.dothcom.net</div>
    </div>
  `
}

app.post('/api/contact', async (req, res) => {
  const { nome, portal, contato } = req.body ?? {}

  if (!nome || !portal || !contato) {
    return res.status(422).json({ rs: 'erro', msg: 'Campos obrigatórios não preenchidos.' })
  }

  try {
    const assunto = `Diagnóstico Landing — ${portal} — ${contato}`
    await transporter.sendMail({
      from: `"${process.env.MAIL_FROM_NAME || 'dothNews'}" <${process.env.MAIL_FROM}>`,
      bcc: DESTINATARIOS,
      subject: assunto,
      html: buildEmailHtml(req.body),
    })
    res.json({ rs: 'ok' })
  } catch (err) {
    console.error('[contact]', err.message)
    res.status(500).json({ rs: 'erro', msg: 'Erro ao enviar email.' })
  }
})

// SPA fallback
app.get('*', (_, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'))
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
