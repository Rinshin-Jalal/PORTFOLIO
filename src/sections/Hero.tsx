import { Component } from "solid-js";

const Hero: Component = () => {
  return (
    <div class="mt-28 px-10 md:mt-36 max-w-screen-xl mx-auto">
      <div>
        <h2 class="font-viga text-3xl md:text-4xl">
          Hey,&nbsp;
          <span>
            You.. <span>👆</span>
          </span>
        </h2>
      </div>
      <div class="mt-24 flex flex-col md:flex-row gap-4 justify-center">
        <div>
          <img
            src="src/assets/avatar.png"
            class="w-28 md:w-34 lg:w-40"
            alt="Avatar of Rinshin Jalal"
          />
        </div>
        <div class="">
          <h1 class="font-ubuntu font-medium text-4xl md:text-6xl lg:text-8xl">
            I'm Rinshin Jalal
          </h1>
          <h2 class="font-viga text-2xl md:text-3xl lg:text-5xl text-secondary">
            Full-Stack Developer
          </h2>
        </div>
      </div>
      <div class="flex md:flex-col gap-6 md:items-end mt-7 md:mt-10">
        <div>
          <a href="" target="_blank" rel="noopener noreferrer" class="text-2xl">
            <img
              class="transition hover:rotate-12"
              src="/src/assets/github.svg"
              alt="My Github Profile"
            />
          </a>
        </div>
        <div>
          <a href="" target="_blank" rel="noopener noreferrer" class="text-2xl">
            <img src="/src/assets/linkedin.svg" alt="My LinkedIn Profile" />
          </a>
        </div>
        <div>
          <a href="" target="_blank" rel="noopener noreferrer" class="text-2xl">
            <img src="/src/assets/twitter.svg" alt="My Twitter Profile" />
          </a>
        </div>
        <div>
          <a href="" target="_blank" rel="noopener noreferrer" class="text-2xl">
            <img src="/src/assets/insta.svg" alt="My Instagram Profile" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
