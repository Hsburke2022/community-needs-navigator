export default function Vines() {
  return (
    <>
      {/* Left vine */}
      <div className="fixed left-0 top-0 h-full w-36 pointer-events-none z-10 overflow-hidden hidden xl:block">
        <svg
          viewBox="0 0 100 900"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full opacity-75"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main stem */}
          <path
            d="M50 0 C44 70 62 120 46 190 C32 255 60 310 48 390 C36 460 64 510 46 590 C30 660 58 710 48 790 C36 850 54 880 50 900"
            stroke="#3D5535"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
          />
          {/* Large leaves left */}
          <ellipse cx="24" cy="90"  rx="22" ry="10" fill="#527248" transform="rotate(-35 24 90)" />
          <ellipse cx="20" cy="210" rx="24" ry="11" fill="#6B8F5E" transform="rotate(-25 20 210)" />
          <ellipse cx="22" cy="330" rx="20" ry="10" fill="#527248" transform="rotate(-40 22 330)" />
          <ellipse cx="18" cy="460" rx="23" ry="11" fill="#6B8F5E" transform="rotate(-30 18 460)" />
          <ellipse cx="24" cy="580" rx="21" ry="10" fill="#527248" transform="rotate(-35 24 580)" />
          <ellipse cx="20" cy="690" rx="24" ry="11" fill="#6B8F5E" transform="rotate(-25 20 690)" />
          <ellipse cx="22" cy="810" rx="20" ry="10" fill="#527248" transform="rotate(-38 22 810)" />
          {/* Large leaves right */}
          <ellipse cx="72" cy="150" rx="22" ry="10" fill="#87AC75" transform="rotate(30 72 150)" />
          <ellipse cx="76" cy="275" rx="24" ry="11" fill="#527248" transform="rotate(35 76 275)" />
          <ellipse cx="70" cy="400" rx="20" ry="10" fill="#6B8F5E" transform="rotate(25 70 400)" />
          <ellipse cx="74" cy="525" rx="23" ry="11" fill="#87AC75" transform="rotate(32 74 525)" />
          <ellipse cx="72" cy="640" rx="21" ry="10" fill="#527248" transform="rotate(30 72 640)" />
          <ellipse cx="76" cy="755" rx="24" ry="11" fill="#6B8F5E" transform="rotate(35 76 755)" />
          <ellipse cx="70" cy="870" rx="20" ry="10" fill="#87AC75" transform="rotate(25 70 870)" />
          {/* Small accent leaves */}
          <ellipse cx="30" cy="130" rx="13" ry="6" fill="#A8C49A" transform="rotate(-20 30 130)" />
          <ellipse cx="66" cy="240" rx="13" ry="6" fill="#A8C49A" transform="rotate(22 66 240)" />
          <ellipse cx="28" cy="370" rx="13" ry="6" fill="#A8C49A" transform="rotate(-18 28 370)" />
          <ellipse cx="68" cy="500" rx="13" ry="6" fill="#A8C49A" transform="rotate(20 68 500)" />
          <ellipse cx="30" cy="620" rx="13" ry="6" fill="#A8C49A" transform="rotate(-22 30 620)" />
          <ellipse cx="66" cy="740" rx="13" ry="6" fill="#A8C49A" transform="rotate(18 66 740)" />
          {/* Curling tendrils */}
          <path d="M46 190 Q22 178 14 162" stroke="#6B8F5E" strokeWidth="3" fill="none" strokeLinecap="round"/>
          <path d="M48 390 Q72 374 80 356" stroke="#6B8F5E" strokeWidth="3" fill="none" strokeLinecap="round"/>
          <path d="M46 590 Q20 575 12 558" stroke="#6B8F5E" strokeWidth="3" fill="none" strokeLinecap="round"/>
          <path d="M48 790 Q74 775 82 758" stroke="#6B8F5E" strokeWidth="3" fill="none" strokeLinecap="round"/>
          {/* Leaf veins */}
          <line x1="10" y1="90" x2="36" y2="90" stroke="#3D5535" strokeWidth="1" opacity="0.5" transform="rotate(-35 24 90)"/>
          <line x1="6" y1="210" x2="38" y2="210" stroke="#3D5535" strokeWidth="1" opacity="0.5" transform="rotate(-25 20 210)"/>
        </svg>
      </div>

      {/* Right vine */}
      <div className="fixed right-0 top-0 h-full w-36 pointer-events-none z-10 overflow-hidden hidden xl:block">
        <svg
          viewBox="0 0 100 900"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full opacity-75"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main stem */}
          <path
            d="M50 0 C56 70 38 120 54 190 C68 255 40 310 52 390 C64 460 36 510 54 590 C70 660 42 710 52 790 C64 850 46 880 50 900"
            stroke="#3D5535"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
          />
          {/* Large leaves right */}
          <ellipse cx="76" cy="90"  rx="22" ry="10" fill="#527248" transform="rotate(35 76 90)" />
          <ellipse cx="80" cy="210" rx="24" ry="11" fill="#6B8F5E" transform="rotate(25 80 210)" />
          <ellipse cx="78" cy="330" rx="20" ry="10" fill="#527248" transform="rotate(40 78 330)" />
          <ellipse cx="82" cy="460" rx="23" ry="11" fill="#6B8F5E" transform="rotate(30 82 460)" />
          <ellipse cx="76" cy="580" rx="21" ry="10" fill="#527248" transform="rotate(35 76 580)" />
          <ellipse cx="80" cy="690" rx="24" ry="11" fill="#6B8F5E" transform="rotate(25 80 690)" />
          <ellipse cx="78" cy="810" rx="20" ry="10" fill="#527248" transform="rotate(38 78 810)" />
          {/* Large leaves left */}
          <ellipse cx="28" cy="150" rx="22" ry="10" fill="#87AC75" transform="rotate(-30 28 150)" />
          <ellipse cx="24" cy="275" rx="24" ry="11" fill="#527248" transform="rotate(-35 24 275)" />
          <ellipse cx="30" cy="400" rx="20" ry="10" fill="#6B8F5E" transform="rotate(-25 30 400)" />
          <ellipse cx="26" cy="525" rx="23" ry="11" fill="#87AC75" transform="rotate(-32 26 525)" />
          <ellipse cx="28" cy="640" rx="21" ry="10" fill="#527248" transform="rotate(-30 28 640)" />
          <ellipse cx="24" cy="755" rx="24" ry="11" fill="#6B8F5E" transform="rotate(-35 24 755)" />
          <ellipse cx="30" cy="870" rx="20" ry="10" fill="#87AC75" transform="rotate(-25 30 870)" />
          {/* Small accent leaves */}
          <ellipse cx="70" cy="130" rx="13" ry="6" fill="#A8C49A" transform="rotate(20 70 130)" />
          <ellipse cx="34" cy="240" rx="13" ry="6" fill="#A8C49A" transform="rotate(-22 34 240)" />
          <ellipse cx="72" cy="370" rx="13" ry="6" fill="#A8C49A" transform="rotate(18 72 370)" />
          <ellipse cx="32" cy="500" rx="13" ry="6" fill="#A8C49A" transform="rotate(-20 32 500)" />
          <ellipse cx="70" cy="620" rx="13" ry="6" fill="#A8C49A" transform="rotate(22 70 620)" />
          <ellipse cx="34" cy="740" rx="13" ry="6" fill="#A8C49A" transform="rotate(-18 34 740)" />
          {/* Curling tendrils */}
          <path d="M54 190 Q78 178 86 162" stroke="#6B8F5E" strokeWidth="3" fill="none" strokeLinecap="round"/>
          <path d="M52 390 Q28 374 20 356" stroke="#6B8F5E" strokeWidth="3" fill="none" strokeLinecap="round"/>
          <path d="M54 590 Q80 575 88 558" stroke="#6B8F5E" strokeWidth="3" fill="none" strokeLinecap="round"/>
          <path d="M52 790 Q26 775 18 758" stroke="#6B8F5E" strokeWidth="3" fill="none" strokeLinecap="round"/>
          {/* Leaf veins */}
          <line x1="56" y1="90" x2="90" y2="90" stroke="#3D5535" strokeWidth="1" opacity="0.5" transform="rotate(35 76 90)"/>
          <line x1="58" y1="210" x2="96" y2="210" stroke="#3D5535" strokeWidth="1" opacity="0.5" transform="rotate(25 80 210)"/>
        </svg>
      </div>
    </>
  );
}
