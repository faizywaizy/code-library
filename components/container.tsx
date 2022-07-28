type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return (
  <div 
  className="container mx-auto px-5 position:relative">{children}
  </div>)
}

export default Container