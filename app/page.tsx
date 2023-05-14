import { BasicCard } from './components/Cards/BasicCard/BasicCard'
import { Logo } from './components/Logo/Logo'
import { Navbar } from './components/Navbar/Navbar'

export default function Home() {
  return (
    <main>
      <div>
       <Navbar />
        <div style={{padding: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px'}}>
          <BasicCard title='Casque Product Blablabla'
            subtitle='Small Casque, XMMS'
            note={3}
            raters={263}
          />
          <BasicCard title='Casque Product Blablabla'
            subtitle='Small Casque, XMMS'
            note={3}
            raters={263}
          />
          <BasicCard title='Casque Product Blablabla'
            subtitle='Small Casque, XMMS'
            note={5}
            raters={263}
          />
          <BasicCard title='Casque Product Blablabla'
            subtitle='Small Casque, XMMS'
            note={4}
            raters={263}
          />
        </div>
      </div>
    </main>
  )
}
