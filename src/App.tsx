import { Component, createSignal } from "solid-js";
import Hero from "./sections/Hero";
import Nav from "./components/Nav";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
export const MousePos = createSignal({ x: 0, y: 0 });

const App: Component = () => {
  const [mousePos, setMousePos] = MousePos;
  const handleMouseMove = (e: MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };
  return (
    <div onMouseMove={handleMouseMove}>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <p class="text-center py-5">© rinzhin.net 2022</p>
    </div>
  );
};

export default App;
