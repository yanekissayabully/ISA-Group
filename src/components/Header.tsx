import { FaSearch, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="absolute top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-screen-xl px-4 md:px-6">
      <div className="bg-gradient-to-r from-[#38006c] via-[#4e1b9a] to-[#a22fe8] text-white rounded-full shadow-xl px-6 py-3 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          {/* Меню слева */}
          <div className="flex items-center space-x-6 text-sm">
            <span className="font-semibold">RU ▼</span>
            <a href="#" className="hover:underline">Каталог</a>
            <a href="#" className="hover:underline">Клиентам</a>
            <a href="#" className="hover:underline">Оптом</a>
            <a href="#" className="hover:underline">Контакты</a>
          </div>

          {/* Логотип */}
          <div className="text-lg font-bold tracking-wide">LEDART</div>

          {/* Контакты + иконки */}
          <div className="flex items-center space-x-4 text-sm">
            <span className="font-semibold whitespace-nowrap">+7 747 095-96-12</span>
            <FaSearch className="w-5 h-5 text-white cursor-pointer" />
            <FaWhatsapp className="w-5 h-5 text-white cursor-pointer" />
            <FaInstagram className="w-5 h-5 text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
}
