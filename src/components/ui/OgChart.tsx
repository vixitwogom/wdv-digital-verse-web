import React from 'react';

function Node({ title, subtitle, icon, status = "default", small = false }) {
  const baseClass =
    "relative w-52 h-36 md:w-52 md:h-36 sm:w-40 sm:h-28 rounded-xl p-4 text-center shadow bg-white text-primary overflow-hidden";
  const defaultBorder = "border border-[#1068b2]";
  const borderClass =
    status === "incorporated"
      ? "border-2 border-[#1068b2]"
      : status === "planned"
        ? "border border-[#1068b2]"
        : status === "in-progress"
          ? ""
          : defaultBorder;

  return (
    <div className={`${baseClass} ${borderClass}`}>
      {status === "in-progress" && (
        <>
          <svg
            className="absolute inset-0 w-full h-full z-0 pointer-events-none"
            viewBox="0 0 208 144"
            fill="none"
          >
            <path
              d="M0 12 Q0 0 12 0 H11 Q3 0 1 12 V132 Q3 144 12 144 H0 Q0 144 0 132 Z"
              fill="currentColor"
              className="text-[#1068b2]"
            />
            <path
              d="M208 12 Q208 0 196 0 H197 Q205 0 205 12 V132 Q205 144 196 144 H208 Q208 144 208 132 Z"
              fill="currentColor"
              className="text-[#1068b2]"
            />
            <path
              d="M12 1 H104 V0 H12 Q0 0 0 12 Q0 1 12 1 Z"
              fill="currentColor"
              className="text-[#1068b2]"
            />
            <path
              d="M104 3 H196 Q208 3 208 12 Q208 0 196 0 H104 V3 Z"
              fill="currentColor"
              className="text-[#1068b2]"
            />
            <path
              d="M12 143 H104 V144 H12 Q0 144 0 132 Q0 143 12 143 Z"
              fill="currentColor"
              className="text-[#1068b2]"
            />
            <path
              d="M104 141 H196 Q208 141 208 132 Q208 144 196 144 H104 V141 Z"
              fill="currentColor"
              className="text-[#1068b2]"
            />
          </svg>
        </>
      )}
      <img
        src={icon}
        alt="icon"
        className="mx-auto mb-2 w-8 h-8 z-10 relative"
        draggable="false"
      />
      <h3 className="font-bold text-base text-[#012345] z-10 relative">{title}</h3>
      {subtitle && <p className="text-xs text-[#012345] mt-1 z-10 relative">{subtitle}</p>}
    </div>
  );
}

const OrgChart = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4">
      {/* Desktop View with SVG */}
      <div className="relative hidden md:block" style={{ height: '650px' }}>
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {/* WDV to World Brandverse */}
          <line x1="46%" y1="161px" x2="46%" y2="136px" stroke="#003366" strokeWidth="1" />
          <line x1="46%" y1="160px" x2="20%" y2="160px" stroke="#003366" strokeWidth="1" />
          <line x1="20%" y1="160px" x2="20%" y2="240px" stroke="#003366" strokeWidth="1" />
          <circle cx="46%" cy="140px" r="4" fill="#1068B2" />

          {/* WDV to WOGOM */}
          <line x1="49%" y1="180px" x2="49%" y2="137px" stroke="#003366" strokeWidth="1" />
          <line x1="49%" y1="180px" x2="40%" y2="180px" stroke="#003366" strokeWidth="1" />
          <line x1="40%" y1="179px" x2="40%" y2="240px" stroke="#003366" strokeWidth="1" />
          <circle cx="49%" cy="140px" r="4" fill="#1068B2" />

          {/* WDV to WOFI */}
          <line x1="51%" y1="136px" x2="51%" y2="181px" stroke="#003366" strokeWidth="1" />
          <line x1="51%" y1="180px" x2="60%" y2="180px" stroke="#003366" strokeWidth="1" />
          <line x1="60%" y1="179px" x2="60%" y2="240px" stroke="#003366" strokeWidth="1" />
          <circle cx="51%" cy="140px" r="4" fill="#1068B2" />

          {/* WDV to WOFI Global */}
          <line x1="54%" y1="143px" x2="54%" y2="156px" stroke="#003366" strokeWidth="1" />
          <line x1="54%" y1="156px" x2="80%" y2="156px" stroke="#003366" strokeWidth="1" />
          <line x1="80%" x2="80%" y2="254px" stroke="#003366" strokeWidth="1" y1="155px" />
          <circle cx="54%" cy="142px" r="4" fill="#1068B2" />

          {/* Dashed Sub-lines */}
          <line x1="20%" y1="405px" x2="20%" y2="460px" stroke="#003366" strokeWidth="1" strokeDasharray="6,4" />
          <circle cx="20%" cy="400px" r="4" fill="#1068B2" />

          <line x1="40%" y1="405px" x2="40%" y2="500px" stroke="#003366" strokeWidth="1" strokeDasharray="6,4" />
          <circle cx="40%" cy="401px" r="4" fill="#1068B2" />
        </svg>

        {/* Main Node */}
        <div className="absolute top-[40px] left-1/2 transform -translate-x-1/2">
          <div className="border-2 border-[#1068b2] rounded-xl p-4 w-56 text-center shadow bg-white text-[#012345]">
            <h3 className="font-bold text-lg">WDV</h3>
            <p className="text-sm">World Digital Ventures</p>
          </div>
        </div>

        {/* Level 1 Nodes */}
        <div className="absolute top-[240px] left-[20%] transform -translate-x-1/2">
          <Node title="World Brandverse" subtitle="World Brandverse" status="incorporated" icon="./images/india.png" />
        </div>
        <div className="absolute top-[240px] left-[40%] transform -translate-x-1/2">
          <Node title="WOGOM" subtitle="World Goods Marketplace (B2B)" status="incorporated" icon="./images/india.png" />
        </div>
        <div className="absolute top-[240px] left-[60%] transform -translate-x-1/2">
          <Node title="WOFI" subtitle="World Finverse" status="incorporated" icon="./images/india.png" />
        </div>
        <div className="absolute top-[240px] left-[80%] transform -translate-x-1/2">
          <Node title="WOFI Global" subtitle="(Gift City)" status="in-progress" icon="./images/world.png" />
        </div>

        {/* Level 2 Nodes */}
        <div className="absolute top-[440px] left-[20%] transform -translate-x-1/2">
          <Node title="World Brandverse" subtitle="(Hong Kong)" status="planned" icon="./images/world.png" small />
        </div>
        <div className="absolute top-[440px] left-[40%] transform -translate-x-1/2">
          <Node title="WOGOM" subtitle="(Singapore)" status="planned" icon="./images/world.png" small />
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex flex-col items-center gap-6 mt-6">
        {/* Root Node */}
        <div className="border-2 border-[#1068b2] rounded-xl p-4 w-full max-w-xs text-center shadow bg-white text-[#012345]">
          <h3 className="font-bold text-lg">WDV</h3>
          <p className="text-sm">World Digital Ventures</p>
        </div>

        {/* Children */}
        <div className="border-l-2 border-[#1068b2] pl-6 flex flex-col gap-6">
          <div>
            <Node title="World Brandverse" subtitle="World Brandverse" status="incorporated" icon="./images/india.png" />
            <div className="ml-6 mt-2 border-l-2 border-dashed border-[#1068b2] pl-4">
              <Node title="World Brandverse" subtitle="(Hong Kong)" status="planned" icon="./images/world.png" small />
            </div>
          </div>

          <div>
            <Node title="WOGOM" subtitle="World Goods Marketplace (B2B)" status="incorporated" icon="./images/india.png" />
            <div className="ml-6 mt-2 border-l-2 border-dashed border-[#1068b2] pl-4">
              <Node title="WOGOM" subtitle="(Singapore)" status="planned" icon="./images/world.png" small />
            </div>
          </div>

          <Node title="WOFI" subtitle="World Finverse" status="incorporated" icon="./images/india.png" />
          <Node title="WOFI Global" subtitle="(Gift City)" status="in-progress" icon="./images/world.png" />
        </div>
      </div>
    </div>
  );
};

export default OrgChart;
