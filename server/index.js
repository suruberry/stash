const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

app.get('/api/days', async (req, res) => {
  const days = await prisma.day.findMany()
  res.json(days)
})

app.post('/api/days', async (req, res) => {
  const { date, stickers, mood, color, note } = req.body
  const day = await prisma.day.upsert({
    where: { date },
    update: { stickers, mood, color, note },
    create: { date, stickers, mood, color, note }
  })
  res.json(day)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`)
})