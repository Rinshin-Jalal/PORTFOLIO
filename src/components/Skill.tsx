import { Component, createSignal } from "solid-js";

interface Props {
  skill: {
    name: string;
    description: string;
    img: string;
    link: string;
    level: string;
    opinion: string;
  };
}

const Skill: Component<Props> = ({ skill }) => {
  return (
    <div class="group md:relative">
      <img
        src={skill.img}
        class="z-0"
        alt={`${skill.name} - ${skill.description}`}
      />
      <div class="absolute m-auto left-0 right-0 bg-black w-80 md:w-80 py-5 px-5 z-50 hidden group-hover:block md:-m-auto md:-left-0 md:-right-0">
        <a href={skill.link}>
          <img
            src={skill.img}
            alt={`${skill.name} - ${skill.description}`}
            class="mb-4"
          />
          <h1 class="text-4xl font-bold mb-2">{skill.name}</h1>
        </a>
        <h2 class="text-2xl text-gray-400 mb-2">
          My Skill level: {skill.level}
        </h2>
        <p class=" text-white">{skill.description}</p>
      </div>
    </div>
  );
};

export default Skill;
