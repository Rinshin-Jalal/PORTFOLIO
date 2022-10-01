import { Component } from "solid-js";

const Project: Component<{}> = (props) => {
  return (
    <div class="flex flex-col-reverse md:flex-row justify-between gap-10 md:gap-12 lg:gap-16 mx-auto mt-10 md:mt-20 max-w-5xl">
      <div>
        <img
          class="max-w-[330px] min-w-full"
          src="/src/assets/project.png"
          alt=""
        />
      </div>
      <div class="md:max-w-[40%] lg:text-4xl lg:max-w-md flex flex-col jusify-center">
        <h1 class="font-viga text-5xl">WeTube</h1>
        <p class="flex-1 text-3xl font-ubuntu text-secondary mt-7 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>

        <div class="flex mt-7 gap-6">
          <div>
            <img src="/src/icons/node.svg" alt="Node.JS" />
          </div>
          <div>
            <img src="/src/icons/django.svg" alt="Django" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
