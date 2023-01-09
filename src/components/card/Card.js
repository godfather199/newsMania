import './card.css'

function Card({card}) {
  const handleClick = () => {
    window.open(card.url, '_blank')
  }

  return (
    <div className="cardContainer">
      <div className="cardWrapper" onClick = {handleClick}>
        <div className="cardImgContainer">
          <img src= {card.urlToImage} alt="" className="cardImg" />
        </div>
        <span className="cardPublisher">{card.source.name}</span>
        <span className="cardAuthor">{card.author ? card.author : 'none'}
        </span>
        <span className="cardTitle">{card.title}</span>
        <p className="cardDesc">{card.description}</p>
      </div>
    </div>
  )
}

export default Card