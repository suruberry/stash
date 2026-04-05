function Logo() {
  return (
    <svg width="260" height="110" viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Lato:ital,wght@1,300&display=swap');
        </style>
      </defs>
    {/*<text
        x="180" y="50"
        fontFamily="'Lato', Georgia, serif"
        fontSize="20"
        fill="white"
        fontStyle="bold"
        fontWeight="100"
        textLength="200"
        lengthAdjust="spacing"
      >suruberry's</text>*/}

      <text
        x="60" y="190"
        fontFamily="'Dancing Script', cursive"
        fontSize="175"
        fontWeight="700"
        fill="white"
        letterSpacing="-4"
      >Stash</text>

      <text
        x="399"
        y="110"
        fontSize="70"
      >⭐</text>

      <text
        x="60" y="248"
        fontFamily="'Lato', Georgia, serif"
        fontSize="20"
        fill="white"
        fontStyle="italic"
        fontWeight="700"
        textLength="440"
        lengthAdjust="spacing"
      >your month in your stickers</text>
    </svg>
  )
}

export default Logo