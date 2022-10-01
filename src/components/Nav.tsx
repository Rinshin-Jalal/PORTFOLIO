import { Component } from "solid-js";

const Nav: Component<{}> = (props) => {
  return (
    <div class="my-7 p-6 max-w-screen-2xl mx-auto">
      <nav class="flex flex-col justify-between max-w-screen-2xl items-center md:flex-row">
        <div>
          <a class="font-ubuntu font-bold text-3xl md:text-4xl" href="#">
            rinzhin.net
          </a>
        </div>
        <div class="flex-1 font-viga flex justify-between max-w-lg min-w-[350px] md:max-w-md  mt-5 md:mt-0 text-2xl text-secondary md:text-3xl">
          <div>
            <a class="hover:text-white" href="#about">
              about
            </a>
          </div>
          <div>
            <a class="hover:text-white" href="#projects">
              projects
            </a>
          </div>
          <div>
            <a class="hover:text-white" href="#contact">
              contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
