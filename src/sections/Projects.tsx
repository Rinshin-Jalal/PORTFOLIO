import { Component } from "solid-js";
import Project from "../components/Project";

const Projects: Component = () => {
  return (
    <div class="mt-28 px-10 lg:mt-36 max-w-screen-xl mx-auto" id="projects">
      <h1 class="font-viga text-5xl">Projects</h1>
      <div class="flex flex-col justify-between gap-10 md:gap-12 lg:gap-16 mx-auto mt-10 md:mt-20 max-w-5xl">
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
};

export default Projects;
