"use client";

import { createContext, useState } from "react";

export const LoadingContext = createContext<{ isLoading: boolean; setIsLoading: (isLoading: boolean) => void }>({
  isLoading: true,
  setIsLoading: () => {},
});

export default function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  return <LoadingContext value={{ isLoading, setIsLoading }}>{children}</LoadingContext>;
}
