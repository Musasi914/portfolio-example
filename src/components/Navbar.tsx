"use client";

import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { AlignRight } from "lucide-react";
import { NAV_ITEMS } from "@/constants";
import { cn } from "@/lib/utils";

/**
 * ナビゲーションリンクコンポーネント
 */
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

function NavLink({ href, children, className }: NavLinkProps) {
  return (
    <li>
      <a href={href} className={cn("transition-colors hover:text-accent focus:text-accent", className)}>
        {children}
      </a>
    </li>
  );
}

/**
 * デスクトップナビゲーションコンポーネント
 */
function DesktopNav() {
  return (
    <ul className="gap-4 hidden md:flex">
      {NAV_ITEMS.map((item) => (
        <NavLink key={item.href} href={item.href}>
          {item.label}
        </NavLink>
      ))}
    </ul>
  );
}

/**
 * モバイルナビゲーションコンポーネント
 */
function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden p-2 hover:bg-accent/10 rounded-md transition-colors">
        <AlignRight className="h-5 w-5 cursor-pointer" />
        <span className="sr-only">メニューを開く</span>
      </SheetTrigger>
      <SheetContent className="duration-75" side="top">
        <SheetHeader className="sr-only">
          <SheetTitle>メニュー</SheetTitle>
          <SheetDescription>ナビゲーションメニュー</SheetDescription>
        </SheetHeader>
        <nav className="my-10">
          <ul className="space-y-4">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.href} href={item.href} className="text-right block p-2 px-20 text-2xl ">
                <SheetClose>{item.label}</SheetClose>
              </NavLink>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

/**
 * メインナビゲーションコンポーネント
 */
export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full flex justify-between items-center p-4 bg-background/50 backdrop-blur-sm border-b border-border/50">
      <div className="text-2xl font-bold">
        <a href="#hero" className="transition-colors hover:text-accent focus:text-accent">
          TANAKA
        </a>
      </div>
      <nav>
        <DesktopNav />
        <MobileNav />
      </nav>
    </header>
  );
}
