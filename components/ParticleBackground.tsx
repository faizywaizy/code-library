import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

type Props = {
  children?: React.ReactNode
}

const particlesInit = async (main) => {
  console.log(main);
  await loadFull(main);await loadFull(main);
};

const particlesLoaded = (container) => {
  console.log(container);
};

const ParticleBackground = ({}: Props) => {
  return (
    <div style={{position: 'absolute', zIndex: -1}}>
      <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#212833",
          },
          opacity:0.99
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: ['#cc892b', '#1cd6b1', '#8c4ec7', '#8bc74e']
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 3,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />

  </div>
  
  )
}

export default ParticleBackground
