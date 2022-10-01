import { Component } from "solid-js";

const About: Component = () => {
  return (
    <div id="about" class="mt-28 px-10 lg:mt-36 max-w-screen-xl mx-auto">
      <h1 class="font-viga text-4xl md:text-5xl">About</h1>
      <div class="flex flex-col-reverse md:flex-row justify-between gap-10 md:gap-12 lg:gap-16 mx-auto mt-10 md:mt-20 max-w-5xl">
        <div class="flex-1 text-2xl font-ubuntu text-secondary md:max-w-[40%] lg:text-3xl lg:max-w-md">
          <p>
            I’m a freelance fullstack app & web developer from kerala,India.
            <br />
            <br />I started my programming journey about 2.5 years ago and have
            learnt a variety of programming languages and frameworks, some of
            which are listed below.
          </p>

          <p class="text-sm">🦊 Hover/touch icons to know more</p>
        </div>
        <div class="">
          <img
            class="w-[45%] min-w-[250px] max-w-[400px] rounded-xl"
            src="/src/assets/me.png"
            alt="Real - Rinshin Jalal"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
