# Stash 🌟
### your month in your stickers

A full-stack visual journaling app where each day of the month becomes a canvas. Add stickers, log your mood, pick a color highlight, and write a note for each day — building a beautiful visual record of your month as you go.

**Live demo:** https://stash-flame.vercel.app

---

## What it does

Stash turns your monthly calendar into a personal mood board. Click any day to open a popup where you can:

- Add stickers from curated aesthetic packs
- Rate your mood with 5 expressive options
- Pick a color highlight that appears as a bar on the day cell
- Write a short note about your day

Your data saves to a real database and persists across sessions — come back tomorrow and your month is exactly as you left it.

---

## Tech stack

**Frontend**
- React (Vite) — component-based UI
- CSS Grid — 7-column calendar layout
- Custom SVG logo component
- Deployed on Vercel

**Backend**
- Node.js + Express — REST API server
- PostgreSQL — relational database
- Prisma ORM — database queries and migrations
- Deployed on Render

---

## Features

- Dynamic monthly calendar with month navigation
- Today's date highlighted automatically
- Click any day → modal popup with full editing
- Sticker picker with aesthetic themed packs
- Mood selector with 5 mood levels
- Color highlight system (7 pastel options)
- Short note per day
- Pre-fills existing data when reopening a saved day
- "My Stash" tab — all saved days displayed as cards
- Data persists via PostgreSQL database
- Fully deployed — live link above

---

## REST API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/days` | Fetch all saved days |
| POST | `/api/days` | Save or update a day |

**Day object:**
```json
{
  "date": "2026-3-15",
  "stickers": ["🍵", "📚"],
  "mood": "😊",
  "color": "#CECBF6",
  "note": "great study day"
}
```

---

## Database schema
```prisma
model Day {
  id        Int      @id @default(autoincrement())
  date      String   @unique
  stickers  String[]
  mood      String?
  color     String?
  note      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

---

## Running locally

**Prerequisites:** Node.js v20, PostgreSQL

**1. Clone the repo**
```bash
git clone https://github.com/suruberry/stash.git
cd stash
```

**2. Set up the backend**
```bash
cd server
npm install
```

Create `server/.env`:
```
DATABASE_URL="postgresql://YOUR_USERNAME@localhost:5432/stash"
```
```bash
npx prisma migrate dev
node index.js
```

**3. Set up the frontend**
```bash
cd client
npm install
npm run dev
```

Open `http://localhost:5173`

---

## Project structure
stash/
client/               # React frontend
src/
components/
Calendar.jsx    # Main calendar grid + month navigation
DayModal.jsx    # Day editing popup
StashView.jsx   # "My Stash" saved days view
Logo.jsx        # Custom SVG logo
App.jsx           # Root component + data fetching
index.css         # Global styles
server/               # Express backend
prisma/
schema.prisma     # Database schema
index.js            # API routes

---

## Concepts implemented

- React component architecture (props, state, hooks)
- `useState` and `useEffect` for state management and data fetching
- REST API design and implementation
- PostgreSQL relational database
- Prisma ORM for database queries and migrations
- CSS Grid for calendar layout
- Dynamic date math for month generation
- Conditional rendering and array mapping in React
- Full-stack deployment (Vercel + Render)
- Git version control

---

## What's next

- User authentication so multiple people can have their own boards
- Custom sticker upload (Procreate drawings, Pinterest PNGs)
- Month summary stats — most used sticker, average mood
- Dark mode
- Mobile responsive layout

---

Built by Suravi Lokhande — UC Davis