import reactImg from "./assets/react-core-concepts.png";
import componentImg from "./assets/components.png";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Hedaer() {
  const description = reactDescriptions[getRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Hedaer />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title="Components"
              description="The core UI building block"
              image={componentImg}
            />
            <CoreConcept />
            <CoreConcept />
            <CoreConcept />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
