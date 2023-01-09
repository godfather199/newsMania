import axios from 'axios'
import { useEffect, useState } from 'react'
import './home.css'
import Cards from '../../components/cards/Cards'

function Home() {
  const [featArticle, setFeatArticle] = useState([])
  const [allArticle, setAllArticle] = useState([])

  useEffect(() => {
    const fetchData = async () => {
        try {
            const result = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=4bdc0ac93a484bb99cb9e582d81af155')

            setFeatArticle(result.data.articles.slice(0, 5))
            
        }
        catch (err) {
            console.log(err)
        }
    }

    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
        try {
            const result = await axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=4bdc0ac93a484bb99cb9e582d81af155')

            setAllArticle(result.data.articles)
            
        }
        catch (err) {
            console.log(err)
        }
    }

    fetchData()
  }, [])


  return (
    <div className="homeContainer">
        <div className="homeWrapper">
            <div className="homeTop">
                <span className="homeTitle">Featured Article</span>
                <Cards article = {featArticle} />
            </div>
            <hr className='homeHr' />
            <div className="homeBottom">
                <span className="homeTitle">All Article</span>
                <Cards article = {allArticle} />
            </div>
        </div>
    </div>
  )
}

export default Home