import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="w-[80%] mx-auto flex flex-col items-center mt-[-4rem]">
      <h1 className="text-primary1 text-[20rem] font-Nunito font-extrabold mb-[-6rem]">
        404
      </h1>
      <h4 className="text-[6rem] font-nunito text-secondary3 font-bold">
        Page Not Found
      </h4>
      <p className="text-secondary4 text-xl text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis congue
        <br />
        pretium faucibus leo nisl nulla pharetra nullam.
      </p>
      <Link to="/">
        <div
          className={`bg-primary1 md:flex hidden items-center justify-center text-sm font-semibold text-secondary5 rounded-[39px] px-[40px] py-[16px] mt-[1rem]`}
        >
          Homepage
        </div>
      </Link>
      <div className="h-[2px] bg-[#E3E3E3] w-[80%] m-auto mt-[8rem] mb-[4rem]"></div>
    </div>
  );
};

export default ErrorPage;
