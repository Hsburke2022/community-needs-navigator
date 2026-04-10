export default function Vines() {
  return (
    <>
      {/* Left vine */}
      <div className="fixed left-0 top-0 h-full w-20 pointer-events-none z-10 overflow-hidden hidden xl:block">
        <svg
          viewBox="0 0 80 900"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main stem */}
          <path
            d="M40 0 C35 60 50 100 38 160 C28 220 52 270 40 340 C30 400 55 450 38 520 C25 580 50 630 40 700 C30 760 52 810 40 900"
            stroke="#527248"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          {/* Leaves left */}
          <ellipse cx="22" cy="80" rx="14" ry="7" fill="#6B8F5E" transform="rotate(-30 22 80)" />
          <ellipse cx="18" cy="200" rx="16" ry="7" fill="#87AC75" transform="rotate(-20 18 200)" />
          <ellipse cx="20" cy="310" rx="13" ry="6" fill="#6B8F5E" transform="rotate(-35 20 310)" />
          <ellipse cx="15" cy="430" rx="15" ry="7" fill="#87AC75" transform="rotate(-25 15 430)" />
          <ellipse cx="22" cy="550" rx="13" ry="6" fill="#6B8F5E" transform="rotate(-30 22 550)" />
          <ellipse cx="18" cy="660" rx="16" ry="7" fill="#87AC75" transform="rotate(-20 18 660)" />
          <ellipse cx="20" cy="780" rx="13" ry="6" fill="#6B8F5E" transform="rotate(-35 20 780)" />
          {/* Leaves right */}
          <ellipse cx="56" cy="130" rx="14" ry="7" fill="#A8C49A" transform="rotate(25 56 130)" />
          <ellipse cx="58" cy="260" rx="16" ry="7" fill="#6B8F5E" transform="rotate(30 58 260)" />
          <ellipse cx="54" cy="380" rx="13" ry="6" fill="#87AC75" transform="rotate(20 54 380)" />
          <ellipse cx="60" cy="490" rx="15" ry="7" fill="#A8C49A" transform="rotate(28 60 490)" />
          <ellipse cx="56" cy="610" rx="13" ry="6" fill="#6B8F5E" transform="rotate(25 56 610)" />
          <ellipse cx="58" cy="720" rx="16" ry="7" fill="#87AC75" transform="rotate(30 58 720)" />
          <ellipse cx="54" cy="840" rx="13" ry="6" fill="#A8C49A" transform="rotate(20 54 840)" />
          {/* Tendrils */}
          <path d="M38 160 Q20 150 15 140" stroke="#87AC75" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <path d="M40 340 Q58 325 62 310" stroke="#87AC75" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <path d="M38 520 Q18 505 12 492" stroke="#87AC75" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <path d="M40 700 Q60 685 64 672" stroke="#87AC75" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Right vine */}
      <div className="fixed right-0 top-0 h-full w-20 pointer-events-none z-10 overflow-hidden hidden xl:block">
        <svg
          viewBox="0 0 80 900"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main stem */}
          <path
            d="M40 0 C45 60 30 100 42 160 C52 220 28 270 40 340 C50 400 25 450 42 520 C55 580 30 630 40 700 C50 760 28 810 40 900"
            stroke="#527248"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          {/* Leaves right */}
          <ellipse cx="58" cy="80" rx="14" ry="7" fill="#6B8F5E" transform="rotate(30 58 80)" />
          <ellipse cx="62" cy="200" rx="16" ry="7" fill="#87AC75" transform="rotate(20 62 200)" />
          <ellipse cx="60" cy="310" rx="13" ry="6" fill="#6B8F5E" transform="rotate(35 60 310)" />
          <ellipse cx="65" cy="430" rx="15" ry="7" fill="#87AC75" transform="rotate(25 65 430)" />
          <ellipse cx="58" cy="550" rx="13" ry="6" fill="#6B8F5E" transform="rotate(30 58 550)" />
          <ellipse cx="62" cy="660" rx="16" ry="7" fill="#87AC75" transform="rotate(20 62 660)" />
          <ellipse cx="60" cy="780" rx="13" ry="6" fill="#6B8F5E" transform="rotate(35 60 780)" />
          {/* Leaves left */}
          <ellipse cx="24" cy="130" rx="14" ry="7" fill="#A8C49A" transform="rotate(-25 24 130)" />
          <ellipse cx="22" cy="260" rx="16" ry="7" fill="#6B8F5E" transform="rotate(-30 22 260)" />
          <ellipse cx="26" cy="380" rx="13" ry="6" fill="#87AC75" transform="rotate(-20 26 380)" />
          <ellipse cx="20" cy="490" rx="15" ry="7" fill="#A8C49A" transform="rotate(-28 20 490)" />
          <ellipse cx="24" cy="610" rx="13" ry="6" fill="#6B8F5E" transform="rotate(-25 24 610)" />
          <ellipse cx="22" cy="720" rx="16" ry="7" fill="#87AC75" transform="rotate(-30 22 720)" />
          <ellipse cx="26" cy="840" rx="13" ry="6" fill="#A8C49A" transform="rotate(-20 26 840)" />
          {/* Tendrils */}
          <path d="M42 160 Q60 150 65 140" stroke="#87AC75" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <path d="M40 340 Q22 325 18 310" stroke="#87AC75" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <path d="M42 520 Q62 505 68 492" stroke="#87AC75" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <path d="M40 700 Q20 685 16 672" stroke="#87AC75" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        </svg>
      </div>
    </>
  );
}
