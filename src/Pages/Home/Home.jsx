import "./Home.scss";
import { Content, Hero, HomeAbout, Service } from './components';

export default function Home() {

  return (
    <main className='home'>
      <Hero />
      <HomeAbout />
      <Service />
      <Content />
    </main>
  )
}
