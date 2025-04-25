import InputElement from "./components/InputElement";

function App() {
  return (
    <div>
      <header className="sr-only">
        <h1>Age Calculator App</h1>
      </header>
      <main>
        <section className="bg-White mx-4 mt-[88px] px-6 py-12">
          <div className="flex justify-between">
            <InputElement id="day" name="Day" />
            <InputElement id="month" name="Month" />
            <InputElement id="year" name="year" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
