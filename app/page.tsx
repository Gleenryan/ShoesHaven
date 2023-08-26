import Image from 'next/image'
import '../utils/utils.css'
import './styles/show.css'
import Card from '../components/Card'
import CardSwiper from '../components/CardSwiper'
export default function Home() {
  return (
    <main className='section'>
      <div className="show__container">
        <h2 className='show__subtitle'>Trending Shoes</h2>
      </div>
      <div className="show__card-list">
        <CardSwiper />
      </div>

      <div className="section show__container">
        <h2 className='show__subtitle'>Basketball Shoes</h2>
      </div>
      <div className="show__card-list">
        <CardSwiper />
      </div>
    </main>
  )
}
