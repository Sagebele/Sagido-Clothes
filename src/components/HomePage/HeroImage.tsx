
import mainImage from "../../assets/images/HomePage/backgroundImage.jpg";

type Props = {
  title: string;
  subtitle: string;
  image?: string;
};

export default function HeroImage({ title, subtitle, image }: Props) {
  return (
    <section 
      className="min-h-screen w-full flex flex-col items-center justify-center relative bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url("${image || mainImage}")`,
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
      <div className="relative z-10 text-center px-8">
        <h2 className="text-3xl md:text-6xl font-bold text-white drop-shadow-md mb-4">
          {title}
        </h2>
        <p className="text-lg md:text-2xl text-gray-100 drop-shadow-md max-w-2xl">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
