import './cards.css'
import Card from '../card/Card'

function Cards({article}) {
  return (
    <div className="cardsContainer">
      <div className="cardsWrapper">
        {article.map((card) => (
          <Card card = {card} />
        ))}
      </div>
    </div>
  )
}

export default Cards