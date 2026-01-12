
import mainImage from "../../assets/images/HomePage/MainImage.jpg";

type Props = {
  title: string;
  subtitle: string;
  image?: string;
};

export default function HeroImage({ title, subtitle, image }: Props) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src={image || mainImage}
        alt="Hero background"
      />

      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/30 to-black/50" />

      <div className="relative z-10 min-h-screen flex items-end">
        <div className="w-full pb-20 px-8 md:px-16 lg:px-20 max-w-4xl">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-3xl font-bold text-white drop-shadow-lg">
              {title}
            </h2>
            <p className="text-lg md:text-xl text-gray-100 drop-shadow-md max-w-2xl">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
