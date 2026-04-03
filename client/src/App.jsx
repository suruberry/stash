import { useState, useEffect } from 'react'
import Calendar from './components/Calendar'
import StashView from './components/StashView'

function App() {
  const [activeTab, setActiveTab] = useState('calendar')
  const [dayData, setDayData] = useState({})
  const [month, setMonth] = useState(new Date().getMonth())
  const [year, setYear] = useState(new Date().getFullYear())

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  useEffect(() => {
    fetch('http://localhost:3001/api/days')
      .then(res => res.json())
      .then(days => {
        const mapped = {}
        days.forEach(day => {
          mapped[day.date] = {
            stickers: day.stickers,
            mood: day.mood,
            color: day.color,
            note: day.note
          }
        })
        setDayData(mapped)
      })
  }, [])

  async function saveDay(date, data) {
    await fetch('http://localhost:3001/api/days', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ date, ...data })
    })
    setDayData(prev => ({ ...prev, [date]: data }))
  }

  return (
    <div className="app">
      <div className="tab-bar">
        <span className="app-name-tab">stash</span>
        <div className="tabs">
          <button
            className={`tab ${activeTab === 'calendar' ? 'active' : ''}`}
            onClick={() => setActiveTab('calendar')}
          >
            calendar
          </button>
          <button
            className={`tab ${activeTab === 'stash' ? 'active' : ''}`}
            onClick={() => setActiveTab('stash')}
          >
            my stash
          </button>
        </div>
      </div>

      {activeTab === 'calendar' ? (
        <Calendar
          dayData={dayData}
          saveDay={saveDay}
          month={month}
          setMonth={setMonth}
          year={year}
          setYear={setYear}
        />
      ) : (
        <StashView
          dayData={dayData}
          monthName={monthNames[month]}
          year={year}
        />
      )}
    </div>
  )
}

export default App