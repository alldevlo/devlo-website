"use client";

import type { ReactNode } from "react";
import { Component, useEffect, useState } from "react";
import { LovalingoProvider } from "@lovalingo/lovalingo";

const LOVALINGO_PUBLIC_ANON_KEY = "aix_qhj0o99zw8icbj8mg4e7x04rtp1wehsw";
const LOVALINGO_CDN_HOST = "cdn.lovalingo.com";

function isLovalingoRuntimeFailure(value: unknown): boolean {
  if (!value) return false;
  let text = "";
  if (typeof value === "string") {
    text = value;
  } else if (value instanceof Error) {
    text = `${value.message}\n${value.stack ?? ""}`;
  } else {
    try {
      text = JSON.stringify(value);
    } catch {
      text = String(value);
    }
  }
  return /lovalingo|cdn\.lovalingo\.com/i.test(text);
}

type LovalingoErrorBoundaryProps = {
  children: ReactNode;
  fallback: ReactNode;
  onFailure: () => void;
};

type LovalingoErrorBoundaryState = {
  hasError: boolean;
};

class LovalingoErrorBoundary extends Component<
  LovalingoErrorBoundaryProps,
  LovalingoErrorBoundaryState
> {
  override state: LovalingoErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  override componentDidCatch(error: unknown) {
    if (isLovalingoRuntimeFailure(error)) {
      this.props.onFailure();
    }
  }

  override render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export function LovalingoNextProvider({ children }: { children: ReactNode }) {
  const [isLovalingoEnabled, setIsLovalingoEnabled] = useState(true);

  useEffect(() => {
    const disableLovalingo = () => setIsLovalingoEnabled(false);

    const onUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (!isLovalingoRuntimeFailure(event.reason)) return;
      event.preventDefault();
      disableLovalingo();
    };

    const onWindowError = (event: ErrorEvent) => {
      const url = event.filename ?? "";
      if (!url.includes(LOVALINGO_CDN_HOST) && !isLovalingoRuntimeFailure(event.error ?? event.message)) return;
      event.preventDefault();
      disableLovalingo();
    };

    window.addEventListener("unhandledrejection", onUnhandledRejection);
    window.addEventListener("error", onWindowError);

    return () => {
      window.removeEventListener("unhandledrejection", onUnhandledRejection);
      window.removeEventListener("error", onWindowError);
    };
  }, []);

  if (!isLovalingoEnabled) {
    return <>{children}</>;
  }

  return (
    <LovalingoErrorBoundary fallback={<>{children}</>} onFailure={() => setIsLovalingoEnabled(false)}>
      <LovalingoProvider
        publicAnonKey={LOVALINGO_PUBLIC_ANON_KEY}
        defaultLocale="fr"
        locales={["fr", "en", "de", "nl"]}
        routing="path"
        overlayBgColor="#ffffff"
      >
        {children}
      </LovalingoProvider>
    </LovalingoErrorBoundary>
  );
}
