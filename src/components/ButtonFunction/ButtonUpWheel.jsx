import { ArrowUp } from "@phosphor-icons/react/dist/ssr";

const ButtonUpWheel = () => {
  const scrollTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0
    });
  };

  return (
    <div className="flex justify-end mx-8">
      <div className="p-2 transition-all rounded-md text-color-primary bg-color-secondary hover:bg-color-accent">
        <button className="flex items-center justify-center" onClick={scrollTop}>
          <ArrowUp size={32} />
        </button>
      </div>
    </div>
  );
};

export default ButtonUpWheel;
