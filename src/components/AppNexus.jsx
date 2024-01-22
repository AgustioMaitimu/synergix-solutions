import React from 'react';

export default function AppNexus() {
  const [animationPlayed, setAnimationPlayed] = React.useState(false);

  React.useEffect(() => {
    function animateCSS() {
      const animatedElements = document.querySelectorAll('.css-animation-hide');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationPlayed) {
            // Only animate if not played yet
            entry.target.classList.add('css-animation-show');
            setTimeout(() => {
              entry.target.style.transitionDuration = '200ms';
            }, 1500);
            setAnimationPlayed(true); // Mark as played after first animation
          }
        });
      });

      animatedElements.forEach((el) => observer.observe(el));
    }

    // Run animateCSS only once, after the last animation element has loaded
    const lastAnimationElement = document.getElementById('last-animation');
    if (lastAnimationElement && !animationPlayed) {
      animateCSS();
      setAnimationPlayed(true); // Mark as played immediately
    }
  }, [animationPlayed]);

  return (
    <div className="flex flex-col gap-10 px-8 py-20 md:w-screen lg:w-[95vw]">
      <div
        id="last-animation"
        className="
       flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-6"
      >
        <h1 className="font-gnome css-animation-hide flex flex-col gap-1 self-start text-lg tracking-widest text-blue-500 md:self-center md:justify-self-center">
          Synergy Nexus Hub
          <p className=" w-fit font-generic text-xl font-semibold tracking-normal text-black md:w-[30vw] md:text-4xl">
            Ignite Collective Excellence: Unleash the Power Within
          </p>
        </h1>
        <div className="css-animation-hide  flex h-[50vh] cursor-pointer flex-col items-center justify-end gap-2 bg-orange-100 p-10 shadow transition-all hover:shadow-lg md:h-[55vh] lg:w-[45vw]">
          <h1 className="text-lg font-bold ">Synergix Community</h1>
          <p className="text-center">
            Connect globally and meet locally to get more out of our products.
          </p>
          <p className="cursor-pointer text-blue-600 hover:underline">
            Search the forum
          </p>
          <p className="cursor-pointer text-blue-600 hover:underline">
            Join our community
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-10 md:flex-row md:justify-between">
        <div
          className="css-animation-hide
           flex h-[50vh] cursor-pointer flex-col items-center justify-end gap-2 bg-green-100 p-10 shadow transition-all hover:shadow-lg md:h-[40vh] md:w-[30vw]"
        >
          <h1 className="text-center text-lg font-bold">Work Life</h1>
          <p className="text-center">
            Real-life advice, inspiration, and stories from the working world
            today.
          </p>
          <p className="cursor-pointer text-blue-600 hover:underline">
            Read our blog
          </p>
        </div>
        <div
          className="css-animation-hide
           flex h-[50vh] cursor-pointer flex-col items-center justify-end gap-2 bg-blue-100 p-10 shadow transition-all hover:shadow-lg md:h-[40vh] md:w-[30vw]"
        >
          <h1 className="text-center text-lg font-bold">Team Playbook</h1>
          <p className="text-center">
            Solve common team challenges with these group exercises.
          </p>
          <p className="cursor-pointer text-center text-blue-600 hover:underline">
            Check team health
          </p>
        </div>
        <div
          className="css-animation-hide
           flex h-[50vh] cursor-pointer flex-col items-center justify-end gap-2 bg-amber-100 p-10 shadow transition-all hover:shadow-lg md:h-[40vh] md:w-[30vw]"
        >
          <h1 className="text-center text-lg font-bold">Distributed Work</h1>
          <p className="text-center">
            Advance how your distributed teams collaborate.
          </p>
          <p className="cursor-pointer text-blue-600 hover:underline">
            Our approach
          </p>
        </div>
      </div>
      <div
        className="
       css-animation-hide mt-6 flex flex-col gap-6 md:mt-0 md:flex-row md:items-center md:justify-between md:gap-6"
      >
        <div className="flex w-[80vw] flex-col items-start justify-center md:w-[40vw]">
          <h1 className="font-gnome text-lg text-blue-500">Synergix Events</h1>
          <p className="text-xl font-semibold md:w-[20vw] md:text-4xl">
            Join our community-driven Events
          </p>
        </div>
        <div className=" flex h-[40vh] w-[80vw] cursor-pointer flex-col items-center justify-center gap-2 bg-blue-200 p-10 shadow transition-all hover:shadow-lg md:h-[45vh] md:w-[35vw]">
          <h1 className="text-lg font-bold ">SYNERGIX Presents</h1>
          <h1 className="font-drawn text-3xl font-bold">UNDOXXED</h1>
          <p className="text-center">
            Unveil security insights globally, gather locally, and fortify our
            digital landscape.
          </p>
          <p className="cursor-pointer text-blue-600 hover:underline">
            Register Now
          </p>
        </div>
        <div className=" flex h-[40vh] w-[80vw] cursor-pointer flex-col items-center justify-center gap-2 bg-red-200 p-10 shadow transition-all hover:shadow-lg md:h-[45vh] md:w-[35vw]">
          <h1 className="text-lg font-bold ">SYNERGIX Presents</h1>
          <h1 className="font-pixel text-3xl font-bold">VOLTAGE</h1>
          <p className="text-center">
            Spark innovation in a global hackathon, collaborate locally, and
            elevate your coding prowess.
          </p>
          <p className="cursor-pointer text-blue-600 hover:underline">
            Register Now
          </p>
        </div>
      </div>
    </div>
  );
}
