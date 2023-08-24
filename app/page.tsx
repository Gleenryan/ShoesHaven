import Image from 'next/image'
import '../utils/utils.css'
import './styles/show.css'
import Card from '../components/Card'
export default function Home() {
  return (
    <main className='section'>
      <div className="show__container">
        <h2 className='show__subtitle'>Trending Shoes</h2>
      </div>
      <div className="show__card-list">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

    </main>
  )
}
