"use client";
import { Toaster } from "react-hot-toast";
import Providers from "@/utils/providers";

// This layout component can be used with React state, context and more as it is a client component.
export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-lg mx-auto py-16">
      <Providers>{children}</Providers>
      <Toaster />
    </div>
  );
};
