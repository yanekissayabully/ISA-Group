import Image from 'next/image';
import Header from './Header';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#2a006e] to-[#7e22ce] text-white rounded-[40px] overflow-hidden max-w-screen-xl mx-auto px-4 md:px-8 pt-[100px] pb-20">
      <Header /> {/* поверх Hero, как у ledart.kz */}

      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-xl space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Ledart — продажа и установка<br />светодиодных экранов в Казахстане
          </h1>
          <p className="text-white/90 text-base md:text-lg">
            Полный спектр от консультаций до монтажа LED-экранов для наружной рекламы.
          </p>
          <button className="mt-4 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition">
            Оставить заявку
          </button>
        </div>

        <div className="max-w-md w-full">
          <Image
            src="/led-screen.png"
            alt="LED Screen"
            width={600}
            height={600}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
