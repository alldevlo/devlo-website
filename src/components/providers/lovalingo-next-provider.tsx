"use client";

import type { ReactNode } from "react";
import { LovalingoProvider } from "@lovalingo/lovalingo";

const LOVALINGO_PUBLIC_ANON_KEY = "aix_qhj0o99zw8icbj8mg4e7x04rtp1wehsw";

export function LovalingoNextProvider({ children }: { children: ReactNode }) {
  return (
    <LovalingoProvider
      publicAnonKey={LOVALINGO_PUBLIC_ANON_KEY}
      defaultLocale="fr"
      locales={["fr", "en", "de", "nl"]}
      routing="path"
      overlayBgColor="#ffffff"
    >
      {children}
    </LovalingoProvider>
  );
}
