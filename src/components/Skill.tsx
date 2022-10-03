import { Component, createSignal } from "solid-js";
import { createViewportObserver } from "@solid-primitives/intersection-observer";

const [intersectionObserver] = createViewportObserver();

interface Props {
  skill: {
    name: string;
    description: string;
    img: string;
    link: string;
    level: string;
    opinion: string;
    id: number;
  };
}

const Skill: Component<Props> = ({ skill }) => {
  const [isIntersecting, setIntersecting] = createSignal(false);

  return (
    <div
      use:intersectionObserver={(e) => setIntersecting(e.isIntersecting)}
      class={`group md:relative hiddenSkill z-0`}
      classList={{
        showSkill: isIntersecting(),
      }}
    >
      <img
        src={skill.img}
        class="z-0 relative"
        alt={`${skill.name} - ${skill.description}`}
      />
      <div class="absolute m-auto left-0 right-0  bg-black w-80 md:w-80 py-5 px-5 z-50 hidden group-hover:block rounded-3xl md:m-0">
        <a href={skill.link}>
          <img
            src={skill.img}
            alt={`${skill.name} - ${skill.description}`}
            class="mb-4"
          />
          <h1 class="text-4xl font-bold mb-2">{skill.name}</h1>
        </a>
        <p class="text-xs">My level:</p>
        <h2 class="text-xl text-gray-400 mb-2">{skill.level}</h2>
        <p class=" text-white">{skill.description}</p>
      </div>
    </div>
  );
};

export default Skill;
