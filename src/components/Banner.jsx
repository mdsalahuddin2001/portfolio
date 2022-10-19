import Button from "../components/Button";
const Banner = () => {
  return (
    <div
      id="home"
      className="container min-h-screen flex items-center justify-center"
    >
      <div className="space-y-8 lg:space-y-0 lg:flex ">
        <div className="flex justify-center items-center flex-1 lg:order-1">
          <img
            className="block w-3/4 lg:w-full"
            src="/illustration.svg"
            alt="illustration"
          />
        </div>
        <div className="flex-1 flex flex-col  justify-center">
          <h4 className="text-sm font-bold  uppercase mb-2">
            Assalamualaikum! i am
          </h4>
          <h1 className="text-4xl lg:text-5xl font-bold text-primary uppercase mb-2">
            md salahuddin
          </h1>
          <h4 className="text-2xl capitalize font-raleway font-light text-gray-500 mb-6">
            Frontend web developer
          </h4>
          <div className="space-x-4">
            <a href="cv_mdsalahuddin.pdf">
              <Button className="text-xs" variant="secondary">
                download cv
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
