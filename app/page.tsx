
import { Carousels } from '@/components'
import '../utils/utils.css'
import './styles/show.css'
import CardSwiper from '../components/CardSwiper'

export default function Home() {
  return (
    <main className=''>
      <div className="main__carousel">
        <Carousels />
      </div>

      <div className=" section show__container">
        <h2 className='show__subtitle'>Trending</h2>
      </div>
      <div className="show__card-list">
        <CardSwiper />
      </div>

      <div className="section show__container">
        <h2 className='show__subtitle'>Basketball</h2>
      </div>
      <div className="show__card-list">
        <CardSwiper />
      </div>

      <div className="section show__container">
        <h2 className='show__subtitle'>Running</h2>
      </div>
      <div className="show__card-list">
        <CardSwiper />
      </div>

      <div className="section show__container">
        <h2 className='show__subtitle'>Nike</h2>
      </div>
      <div className="show__card-list">
        <CardSwiper />
      </div>
    </main>
  )
}
