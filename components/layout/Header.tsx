import { Search } from 'lucide-react';

import Image from 'next/image';
import Link from 'next/link';

import { Navigation } from '@/components/layout/Navigation';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="flex justify-center px-8 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Image
            src="/logo.svg"
            alt="cine-explore logo"
            className="size-8"
            width={32}
            height={32}
          />
          <span className="hidden sm:inline-block">CineExplore</span>
        </Link>

        <Navigation />

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/search" aria-label="Search">
              <Search className="size-5" />
            </Link>
          </Button>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
