import Link from 'next/link';
import Image from 'next/image';

export const Logo = () => (
  <Link href="/" aria-label="Gaupro Home" className="flex items-center bg-transparent group overflow-visible">
    <Image
      src="https://firebasestorage.googleapis.com/v0/b/metro-pool-demolition.firebasestorage.app/o/gaupro%2Fgaupro-south-africa.png?alt=media&token=57d12ee2-00a8-453c-9790-2b5f865dfa05"
      alt="Gaupro South Africa Logo"
      width={600}
      height={180}
      className="object-contain w-auto h-16 md:h-20 transition-all duration-300 group-hover:scale-105 filter saturate-[1.8] brightness-[1.05] drop-shadow-[0_0_1px_rgba(255,0,0,0.5)]"
      priority
    />
  </Link>
);