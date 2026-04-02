import { useState } from 'react'
import DayModal from './DayModal'

function Calendar() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const year = 2026
  const month = 2

  const firstDay = new Date(year, month, 1).getDay()
  const totalDays = new Date(year, month + 1, 0).getDate()
  const blanks = Array(firstDay).fill(null)
  const dates = Array.from({ length: totalDays }, (_, i) => i + 1)
  const allCells = [...blanks, ...dates]

  const [selectedDay, setSelectedDay] = useState(null)
  const [dayData, setDayData] = useState({})

  function handleSave(day, data) {
    setDayData(prev => ({ ...prev, [day]: data }))
  }

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h2>March 2026</h2>
      </div>

      <div className="day-headers">
        {days.map(d => (
          <div key={d} className="day-label">{d}</div>
        ))}
      </div>

      <div className="calendar-grid">
        {allCells.map((day, i) => {
          const data = dayData[day]
          return (
            <div
              key={i}
              className={`day-cell ${day === null ? 'empty' : ''}`}
              style={{ borderBottom: data?.color ? `3px solid ${data.color}` : '' }}
              onClick={() => day && setSelectedDay(day)}
            >
              {day && <span className="day-number">{day}</span>}
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
          onClose={() => setSelectedDay(null)}
          onSave={handleSave}
          existing={dayData[selectedDay]}
      />
    )}
    </div>
  )
}

export default Calendar