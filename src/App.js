import "./App.css";
import logo from "./img/logo.svg";
import heroImg from "./img/illustration-intro.svg";
function App() {
  return (
    <div className="App">
      
      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
          <div className="pt-2">
            <img src={logo} alt="404" />
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-darkGrayishBlue">
              {" "}
              Pricing{" "}
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              {" "}
              Product{" "}
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              About Us
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Careers{" "}
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Community
            </a>
          </div>
          <a
            href="#"
            className="hidden md:block px-6 pt-2 pb-3 bg-brightRed hover:bg-brightRedLight text-white baseline rounded-full"
          >
            Get Started
          </a>
        </div>
      </nav>
      <section>
      <div className="container flex flex-col-reverse md:flex-row items-center px-6 mt-10 mx-auto space-y-0">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            Bring everyone together to build better products.
          </h1>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="#"
              className="px-6 pt-2 pb-3 bg-brightRed hover:bg-brightRedLight text-white baseline rounded-full"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src={heroImg} alt=""/>
        </div>
      </div>
      </section>
      <section id="features">
        <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
        {/** whats different */}
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl text-center font-bold md:text-left">
            What's different about Manage ?
          </h1>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage provides all functionality your team needs,
            without the
            complexity. our software is tailor-made for modern digital
            product
            teams.
          </p>
        </div>
        {/** numbered list features */}
        <div className="flex flex-col space-y-8 md:w-1/2">
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            {/**heading */}
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white bg-brightRed rounded-full md-py-1 ">01</div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Track company wide progress
                </h3>
              </div>
            </div>
            <div>
            <h3 className="hidden text-lg font-bold pt-1 mb-4 md:block">
                  Track company wide progress
                </h3>
            </div>
          </div>

        </div>
        </div>
      </section>
    </div>
  );
}

export default App;
