import Image from "next/image";
import Link from "next/link";

const navItems = [
  "Home",
  "Services",
  "Projects",
  "About",
  "Pricing",
  "Contact",
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-5 pt-6">
      <div className="max-w-[1400px] mx-auto">
        <nav
          className="
            relative
            flex
            items-center
            justify-between
            h-[96px]
            px-10
            rounded-[28px]
            border
            border-white/20
            bg-white/10
            backdrop-blur-2xl
            shadow-[0_10px_60px_rgba(15,23,42,0.12)]
            overflow-hidden
          "
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D2444]/10 via-[#6288B9]/10 to-[#A4B8D2]/10" />

          {/* Blur Glow */}
          <div className="absolute top-[-60px] left-[20%] w-[260px] h-[260px] bg-[#6288B9]/20 rounded-full blur-3xl" />

          {/* LEFT LOGO */}
          <div className="relative z-10 flex items-center gap-4">
            {/* LOGO IMAGE */}
            <Image
              src="/dts logo.png"
              alt="Logo"
              width={80}
              height={80}
              className="object-contain"
            />

        {/* BRAND TEXT */}
            {/* <h1
              className="
                text-[38px]
                font-black
                tracking-[-2px]
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-[#0D2444]
                via-[#6288B9]
                to-[#A4B8D2]
              "
              style={{
                fontFamily:
                  'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
              }}
            >
              VELORA
            </h1>*/}
          </div>

          {/* NAV ITEMS */}
          <ul className="hidden lg:flex items-center gap-12 relative z-10">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="
                    relative
                    text-[17px]
                    font-bold
                    tracking-[0.3px]
                    text-transparent
                    bg-clip-text
                    bg-gradient-to-r
                    from-[#0D2444]
                    via-[#456A9E]
                    to-[#6288B9]
                    transition-all
                    duration-300
                    hover:scale-105
                    after:absolute
                    after:left-0
                    after:-bottom-2
                    after:h-[2px]
                    after:w-0
                    after:bg-gradient-to-r
                    after:from-[#0D2444]
                    after:to-[#6288B9]
                    after:transition-all
                    after:duration-300
                    hover:after:w-full
                  "
                  style={{
                    fontFamily:
                      'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                  }}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA BUTTON */}
          <div className="relative z-10">
            <button
              className="
                group
                relative
                overflow-hidden
                px-8
                py-4
                rounded-[18px]
                text-white
                font-semibold
                text-[15px]
                bg-gradient-to-r
                from-[#0D2444]
                via-[#1D3A66]
                to-[#6288B9]
                shadow-[0_10px_30px_rgba(13,36,68,0.30)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-[0_14px_40px_rgba(13,36,68,0.40)]
              "
            >
              <span className="relative z-10">
                Start Project
              </span>

              <div
                className="
                  absolute
                  inset-0
                  translate-y-full
                  bg-gradient-to-r
                  from-[#6288B9]
                  to-[#A4B8D2]
                  transition-transform
                  duration-500
                  group-hover:translate-y-0
                "
              />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}