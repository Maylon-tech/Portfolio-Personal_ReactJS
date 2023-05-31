import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact
} from 'react-icons/di'
import '../styles/components/technologiescontainer.sass'

const technologies = [
  { id:'html', name: 'HTML5', icon: <DiHtml5 />},
  { id:'css', name: 'CSS3', icon: <DiCss3 />},
  { id:'js', name: 'JavaScript', icon: <DiJsBadge />},
  { id:'node', name: 'Node.js', icon: <DiNodejsSmall />},
  { id:'mysql', name: 'MySQL', icon: <DiMysql />},
  { id:'react', name: 'React', icon: <DiReact />}
]

const TechContainer = () => {
  return (
    <section className="technolgy-container">

      <div className="technology-grid">
        {
          technologies.map((tech) => (

            <div key={tech.name} className="technology-card">
              <div className="icons">
                {tech.icon}
              </div>

              <div className="tech-info">
                <h3>{tech.name}</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Repudiandae ex, esse ratione consequatur veritatis 
                  impedit ipsa quas repellat magni facilis tempore necessitatibus fugit.
                </p>
              </div>
            </div>

          ))
        }
      </div>

    </section>
  )
}

export default TechContainer