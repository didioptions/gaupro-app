import Link from 'next/link';
import Image from 'next/image';

export const Logo = () => (
  <Link href="/" aria-label="Gaupro Home" className="flex items-center bg-transparent">
    <Image
      src="https://firebasestorage.googleapis.com/v0/b/metro-pool-demolition.firebasestorage.app/o/gaupro%2Fgaupro-south-africa.png?alt=media&token=57d12ee2-00a8-453c-9790-2b5f865dfa05"
      alt="Gaupro South Africa Logo"
      width={500}
      height={150}
      className="object-contain w-auto h-16 md:h-20"
      priority
    />
  </Link>
);