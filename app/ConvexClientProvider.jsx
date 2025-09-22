"use client";

import { ConvexReactClient } from "convex/react";
import { ReactNode } from "react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { useAuth } from "@clerk/nextjs";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

export function ConvexClientProvider({ children }) {
  return (
    <ConvexProviderWithClerk
      client={convex}
      // Use Auth
      useAuth={useAuth}
    >
      {children}
    </ConvexProviderWithClerk>
  );
}
