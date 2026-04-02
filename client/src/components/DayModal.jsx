import { useState } from 'react'

function DayModal({ day, onClose, onSave }) {
  const moods = ['😔', '😐', '🙂', '😊', '🤩']
  const colors = ['#CECBF6', '#9FE1CB', '#F5C4B3', '#FAC775', '#F4C0D1', '#B5D4F4']
  const stickers = ['☕', '📚', '🌿', '🎵', '💻', '🔥', '🍕', '🎉', '🌙', '✨', '🧘', '🫶']

  const [selectedStickers, setSelectedStickers] = useState([])
  const [selectedMood, setSelectedMood] = useState(null)
  const [selectedColor, setSelectedColor] = useState(null)
  const [note, setNote] = useState('')

  function toggleSticker(s) {
    setSelectedStickers(prev =>
      prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]
    )
  }

  function handleSave() {
    onSave(day, { stickers: selectedStickers, mood: selectedMood, color: selectedColor, note })
    onClose()
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <span className="modal-title">March {day}</span>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="modal-body">
          <p className="section-label">STICKERS</p>
          <div className="sticker-grid">
            {stickers.map(s => (
              <button
                key={s}
                className={`sticker-btn ${selectedStickers.includes(s) ? 'selected' : ''}`}
                onClick={() => toggleSticker(s)}
              >
                {s}
              </button>
            ))}
          </div>

          <p className="section-label">MOOD</p>
          <div className="mood-row">
            {moods.map(m => (
              <button
                key={m}
                className={`mood-btn ${selectedMood === m ? 'selected' : ''}`}
                onClick={() => setSelectedMood(m)}
              >
                {m}
              </button>
            ))}
          </div>

          <p className="section-label">COLOR</p>
          <div className="color-row">
            {colors.map(c => (
              <button
                key={c}
                className={`color-btn ${selectedColor === c ? 'selected' : ''}`}
                style={{ background: c }}
                onClick={() => setSelectedColor(c)}
              />
            ))}
          </div>

          <p className="section-label">NOTE</p>
          <textarea
            className="note-input"
            placeholder="what happened today..."
            value={note}
            onChange={e => setNote(e.target.value)}
          />
        </div>

        <div className="modal-footer">
          <button className="btn-cancel" onClick={onClose}>cancel</button>
          <button className="btn-save" onClick={handleSave}>save day</button>
        </div>
      </div>
    </div>
  )
}

export default DayModal