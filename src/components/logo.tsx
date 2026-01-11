import Link from 'next/link';

export const Logo = () => (
  <Link href="/" aria-label="Gaupro Home">
    <svg
      width="150"
      height="40"
      viewBox="0 0 150 40"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="logoTitle logoDesc"
    >
      <title id="logoTitle">Gaupro Logo</title>
      <desc id="logoDesc">The word Gaupro in red text with a blue swoosh underneath.</desc>
      <text
        x="50%"
        y="22"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="24"
        fontWeight="bold"
        fill="#D32F2F"
      >
        Gaupro
      </text>
      <path
        d="M25 32 C 50 38, 100 38, 125 32"
        stroke="#1976D2"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  </Link>
);
