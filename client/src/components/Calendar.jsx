import { useState } from 'react'
import DayModal from './DayModal'

function Calendar({ dayData, saveDay, month, setMonth, year, setYear }) {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const today = new Date()
  const [selectedDay, setSelectedDay] = useState(null)

  const firstDay = new Date(year, month, 1).getDay()
  const totalDays = new Date(year, month + 1, 0).getDate()
  const blanks = Array(firstDay).fill(null)
  const dates = Array.from({ length: totalDays }, (_, i) => i + 1)
  const allCells = [...blanks, ...dates]

  function prevMonth() {
    if (month === 0) {
      setMonth(11)
      setYear(y => y - 1)
    } else {
      setMonth(m => m - 1)
    }
  }

  function nextMonth() {
    if (month === 11) {
      setMonth(0)
      setYear(y => y + 1)
    } else {
      setMonth(m => m + 1)
    }
  }

  function handleSave(day, data) {
    const key = `${year}-${month}-${day}`
    saveDay(key, data)
  }

  function getDayData(day) {
    return dayData[`${year}-${month}-${day}`]
  }

  const isToday = (day) =>
    day === today.getDate() &&
    month === today.getMonth() &&
    year === today.getFullYear()

  return (
    <div className="calendar-container">

      <div className="topbar">
        <div className="month-nav">
          <button className="nav-btn" onClick={prevMonth}>&#8592;</button>
          <span className="month-label">
            {monthNames[month]} {year}
          </span>
          <button className="nav-btn" onClick={nextMonth}>&#8594;</button>
        </div>
        <div className="topbar-right">
          <button
            className="today-btn"
            onClick={() => {
              setMonth(today.getMonth())
              setYear(today.getFullYear())
            }}
          >
            today
          </button>
        </div>
      </div>

      <div className="day-headers">
        {days.map(d => (
          <div key={d} className="day-label">{d}</div>
        ))}
      </div>

      <div className="calendar-grid">
        {allCells.map((day, i) => {
          const data = getDayData(day)
          return (
            <div
              key={i}
              className={`day-cell ${day === null ? 'empty' : ''} ${isToday(day) ? 'today' : ''}`}
              style={{ borderBottom: data?.color ? `3px solid ${data.color}` : '' }}
              onClick={() => day && setSelectedDay(day)}
            >
              {day && (
                <span className={`day-number ${isToday(day) ? 'today-num' : ''}`}>
                  {day}
                </span>
              )}
              {data?.mood && <span className="cell-mood">{data.mood}</span>}
              {data?.stickers?.length > 0 && (
                <div className="cell-stickers">
                  {data.stickers.map(s => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {selectedDay && (
        <DayModal
          day={selectedDay}
          month={monthNames[month]}
          onClose={() => setSelectedDay(null)}
          onSave={handleSave}
          existing={getDayData(selectedDay)}
        />
      )}
    </div>
  )
}

export default Calendar