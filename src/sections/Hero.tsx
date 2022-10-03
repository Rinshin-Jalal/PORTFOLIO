import { Component, createSignal, createEffect } from "solid-js";
import { createViewportObserver } from "@solid-primitives/intersection-observer";
import { MousePos } from "../App";
const [intersectionObserver] = createViewportObserver();

const angle = (x1: number, y1: number, x2: number, y2: number) => {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const rad = Math.atan2(dy, dx);
  const deg = (rad * 180) / Math.PI;
  return deg;
};

const Hero: Component = () => {
  let finger: HTMLImageElement | ((el: HTMLImageElement) => void);
  const [rotation, setRotation] = createSignal(0);
  createEffect(() => {
    const rekt = finger?.getBoundingClientRect();
    const x = rekt.left + rekt.width / 2 || 0;
    const y = rekt.top + rekt.height / 2 || 0;
    const [mousePos] = MousePos;
    setRotation(angle(x, y, mousePos().x, mousePos().y));

    finger.style.transform = `rotate(${90 + rotation()}deg)`;
  });

  const [isIntersecting, setIntersecting] = createSignal(false);

  return (
    <div
      use:intersectionObserver={(e) => setIntersecting(e.isIntersecting)}
      class="mt-28 px-10 md:mt-36 max-w-screen-xl mx-auto hiddenHero"
      classList={{
        showHero: isIntersecting(),
      }}
      id="hero"
    >
      <div>
        <h2 class="font-viga text-3xl md:text-4xl">
          Hey,&nbsp;
          <span class="rotate-90">
            You..
            <img
              ref={finger}
              src="/src/assets/emoji.png"
              alt="Pointing towards your cursor!!!"
              class={`w-10 h-10 inline-block mx-2`}
            />
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
            <img
              class="transition hover:rotate-12"
              src="/src/assets/linkedin.svg"
              alt="My LinkedIn Profile"
            />
          </a>
        </div>
        <div>
          <a href="" target="_blank" rel="noopener noreferrer" class="text-2xl">
            <img
              class="transition hover:rotate-12"
              src="/src/assets/twitter.svg"
              alt="My Twitter Profile"
            />
          </a>
        </div>
        <div>
          <a href="" target="_blank" rel="noopener noreferrer" class="text-2xl">
            <img
              class="transition hover:rotate-12"
              src="/src/assets/insta.svg"
              alt="My Instagram Profile"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
