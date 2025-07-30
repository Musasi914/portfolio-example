"use client";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { AlignRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full flex justify-between items-center p-4 bg-background/50 backdrop-blur-sm">
      <div className="text-2xl font-bold">
        <a href="#hero">TANAKA</a>
      </div>
      <nav className="">
        <ul className="gap-4 hidden md:flex">
          <li>
            <a href="#hero">TOP</a>
          </li>
          <li>
            <a href="#marquee">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <Sheet>
          <SheetTrigger className="md:hidden">
            <AlignRight />
          </SheetTrigger>
          <SheetContent className="duration-75">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <ul>
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#marquee">Marquee</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
