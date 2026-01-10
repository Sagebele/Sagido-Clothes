import mainImage from "../../assets/images/HomePage/MainImage.jpg";

export type ImagePosition = "left" | "right" | "center" | "bottom";

type Button = {
  text: string;
  onClick?: () => void;
  href?: string;
};

type Props = {
  title: string;
  subtitle: string;
  text?: string;
  image?: string;
  button?: Button;
  imagePosition?: ImagePosition;
};

export default function HeroSection({
  title,
  subtitle,
  text,
  image,
  button,
  imagePosition = "bottom",
}: Props) {
  const getPositionClasses = () => {
    switch (imagePosition) {
      case "left":
        return "items-start";
      case "right":
        return "items-end";
      case "center":
        return "items-center";
      case "bottom":
      default:
        return "items-end";
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src={image || mainImage}
        alt="Hero background"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

      <div className={`relative z-10 min-h-screen flex ${getPositionClasses()}`}>
        <div className="w-full pb-20 px-8 md:px-16 lg:px-20 max-w-4xl">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
              {title}
            </h2>
            <p className="text-lg md:text-xl text-gray-100 drop-shadow-md max-w-2xl">
              {subtitle}
            </p>
            {text && (
              <p className="text-base md:text-lg text-gray-200 drop-shadow-md max-w-3xl mt-6">
                {text}
              </p>
            )}
            {button && (
              <div className="mt-8">
                {button.href ? (
                  <a
                    href={button.href}
                    className="inline-block px-6 md:px-8 py-2 md:py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition drop-shadow-lg"
                  >
                    {button.text}
                  </a>
                ) : (
                  <button
                    onClick={button.onClick}
                    className="px-6 md:px-8 py-2 md:py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition drop-shadow-lg"
                  >
                    {button.text}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
