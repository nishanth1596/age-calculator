import InputElement from "./components/InputElement";

function App() {
  return (
    <div>
      <header className="sr-only">
        <h1>Age Calculator App</h1>
      </header>
      <main>
        <section className="bg-White mx-4 mt-[88px] rounded-3xl rounded-ee-[100px] px-6 py-12">
          <div className="flex justify-between">
            <InputElement id="day" name="Day" />
            <InputElement id="month" name="Month" />
            <InputElement id="year" name="year" />
          </div>

          <div className="relative mt-[52px] flex justify-center">
            <div className="bg-Purple relative z-20 flex h-16 w-16 items-center justify-center rounded-full p-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="44"
                viewBox="0 0 46 44"
              >
                <g fill="none" stroke="#FFF" strokeWidth="2">
                  <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
                </g>
              </svg>
            </div>
            <p className="border-Line absolute top-1/2 w-full border-[1px]"></p>
          </div>

          <p className="text-Black mt-8 text-[56px] leading-[1.1] font-extrabold tracking-[-2%]">
            <span className="text-Purple">X</span> years
          </p>
          <p className="text-Black text-[56px] leading-[1.1] font-extrabold tracking-[-2%]">
            <span className="text-Purple">X</span> months
          </p>
          <p className="text-Black text-[56px] leading-[1.1] font-extrabold tracking-[-2%]">
            <span className="text-Purple">X</span> days
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
