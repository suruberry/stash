function StashView({ dayData, monthName, year }) {
  const entries = Object.entries(dayData)

  if (entries.length === 0) {
    return (
      <div className="stash-empty">
        <p>no stickers yet — go fill up your month!</p>
      </div>
    )
  }

  return (
    <div className="stash-grid">
      {entries.map(([key, data]) => {
        const day = key.split('-')[2]
        return (
          <div
            key={key}
            className="stash-card"
            style={{ borderTop: `3px solid ${data.color || '#e8e6e0'}` }}
          >
            <span className="stash-date">{monthName} {day}</span>
            <div className="stash-stickers">
              {data.stickers?.map(s => (
                <span key={s} className="stash-sticker">{s}</span>
              ))}
            </div>
            {data.mood && (
              <span className="stash-mood">{data.mood}</span>
            )}
            {data.note && (
              <p className="stash-note">{data.note}</p>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default StashView