import { Component, createSignal, Show, createEffect } from "solid-js";
import { createViewportObserver } from "@solid-primitives/intersection-observer";

const [intersectionObserver] = createViewportObserver();

const [name, setName] = createSignal("");
const [email, setEmail] = createSignal("");
const [message, setMessage] = createSignal("");
const [error, setError] = createSignal("");
const [loading, setLoading] = createSignal(false);
const [disabled, setDisabled] = createSignal(false);

const sendToDiscord = async (e: Event) => {
  const webhook: string = import.meta.env.VITE_DISCORD_WEBHOOK_URL;
  const body = {
    content: `Hi, @everyone\nSomeone Contacted `,
    embeds: [
      {
        title: `Message by ${name()}`,
        description: `${message()}\n\nHis email:${email()}`,
        color: 5814783,
      },
    ],
  };

  e.preventDefault();

  setLoading(true);
  setDisabled(true);
  setError("");

  const res = await fetch(webhook, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (res.status !== 204) {
    setError("Something went wrong, please try again later");
    console.log(
      "Something Went Wrong \nAdd this as a Issue! in  it at Github Repo: "
    );
  }
};

const Contact: Component = () => {
  createEffect(() => {
    if (name() && email() && message()) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  });
  const [isIntersecting, setIntersecting] = createSignal(false);

  return (
    <div
      class="my-28 px-10 lg:mt-36 max-w-screen-xl mx-auto hiddenContact"
      classList={{
        showContact: isIntersecting(),
      }}
      use:intersectionObserver={(e) => setIntersecting(e.isIntersecting)}
      id="contact"
    >
      <h1 class="font-viga text-5xl">Contact</h1>
      <div class="flex flex-col-reverse md:flex-col lg:flex-row justify-between gap-10 lg:gap-16 mx-auto mt-10 lg:mt-20 max-w-5xl">
        <div
          class="flex-1 flex flex-col gap-5 text-2xl font-ubuntu font-light text-secondary  lg:text-3xl lg:max-w-md"
          id="left"
        >
          <input
            type="text"
            placeholder="Full Name"
            onChange={(e: Event) =>
              setName((e.target as HTMLInputElement).value)
            }
            class="font-light bg-transparent  border-b-2 py-4 px-2 w-full text-xl md:text-2xl text-secondary !outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e: Event) =>
              setEmail((e.target as HTMLInputElement).value)
            }
            class="  bg-transparent border-b-2 py-4 px-2 w-full text-xl md:text-2xl text-secondary !outline-none"
          />
          <textarea
            rows="7"
            placeholder="Message"
            onChange={(e: Event) =>
              setMessage((e.target as HTMLInputElement).value)
            }
            class="bg-transparent border-b-2 py-4 px-2 w-full text-xl md:text-2xl text-secondary !outline-none"
          ></textarea>
          <Show
            when={!disabled()}
            fallback={
              <p class="text-sm">🦊 Hover/click me after finish typing</p>
            }
          >
            <button
              onClick={sendToDiscord}
              class="border py-2 hover:bg-slate-200 hover:text-black"
            >
              Send !
            </button>
          </Show>
        </div>

        <div
          class="flex-1 flex flex-col gap-5 md:gap-10 text-2xl font-ubuntu  lg:text-3xl lg:max-w-md"
          id="right"
        >
          <p class=" text-secondary">
            I'm interested for freelance work, particularly Full Stack projects.
            <br />
            <br />
            If you have any further queries or concerns,Use the form to get in
            touch with me at any time.
          </p>
          <a class="hover:text-secondary text-bold ">
            @ Karuvarakundu, Kerala, India
          </a>
          <a
            href="mailto://hello@rinzhin.net"
            class="hover:text-secondary text-bold"
          >
            hello@rinzhin.net
          </a>
          <div class="flex mt-7 gap-6">
            <div>
              <a
                href="https://github.com/Rinshin-Jalal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  class="transition hover:rotate-12"
                  src="github.svg"
                  alt="Github"
                />
              </a>
            </div>
            <div>
              <a
                href="https://twitter.com/0xRinshin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  class="transition hover:rotate-12"
                  src="twitter.svg"
                  alt="Twitter"
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/rinshin-jalal-09859021b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  class="transition hover:rotate-12"
                  src="linkedin.svg"
                  alt="LinkedIn"
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/rinshin.jalal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  class="transition hover:rotate-12"
                  src="insta.svg"
                  alt="Instagram"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
