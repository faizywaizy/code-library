import Alert from './alert'
import Footer from './footer'
import Meta from './meta'

import ParticlesBackground from './ParticleBackground'

type Props = {
  preview?: boolean
  children: React.ReactNode
}



const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <ParticlesBackground />
      
      <Meta />

      <div className="min-h-screen px-{40} position:relative">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>

      <Footer />

    </>
  )
}

export default Layout
