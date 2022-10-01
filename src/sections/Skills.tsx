import { Component, For } from "solid-js";

import Skill from "../components/Skill";
import { frameworks, languages } from "../data";

const Skills: Component = () => {
  return (
    <div class="relative">
      <div class="px-10 my-20 flex flex-col items-center gap-10 xl:my-30 ">
        <div class="grid grid-cols-5 gap-10 md:grid-cols-10 md:gap-6">
          <For each={frameworks}>
            {(item, index) => <Skill skill={item} data-index={index()} />}
          </For>
        </div>
        <div class="flex gap-7">
          <For each={languages}>
            {(item, index) => <Skill skill={item} data-index={index()} />}
          </For>
        </div>
      </div>
    </div>
  );
};

export default Skills;
