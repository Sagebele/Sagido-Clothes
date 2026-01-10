
import mainImage from "../../assets/images/HomePage/MainImage.jpg";

type Props = {
  title: string;
  subtitle: string;
};

export default function HeroVideo({ title, subtitle }: Props) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src={mainImage}
        alt="Hero background"
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 min-h-screen">
        <div className="absolute bottom-24 left-8 md:left-10 lg:left-50 max-w-md md:max-w-lg rounded-xl bg-black/10">
          <h2 className="text-3xl font-bold mb-3 text-stone-300">{title}</h2>
          <p className="text-xl mb-6 text-stone-300">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
