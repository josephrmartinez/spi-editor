"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { useConvexAuth } from "convex/react";
import { ArrowRight, PenLine } from "lucide-react";
import Link from "next/link";
import { SignInButton } from "@clerk/clerk-react";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-teal-900 dark:text-teal-500">
        AI-Powered Feedback for Student Writing
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-400">
        ConnectInk doesn&apos;t write for students—it empowers them with
        coaching-style feedback to improve their writing.
      </h3>
      <h3 className="text-base sm:text-lg md:text-lg font-medium text-gray-600 dark:text-gray-400">
        Developed in collaboration with{" "}
        <a
          href="https://cpet.tc.columbia.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-900 hover:text-teal-700 underline underline-offset-4 dark:text-teal-500 dark:hover:text-teal-700"
        >
          CPET
        </a>{" "}
        at Teachers College&apos;s, Columbia University, ConnectInk models its
        feedback after expert writing coaches, making high-quality,
        pedagogically sound guidance more accessible than ever before.
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {!isLoading && (
        <div className="flex flex-row gap-2 justify-center">
          <Button size="sm" variant="secondary" asChild>
            <Link
              href="https://forms.gle/bVdW5pkCPrbov3hL9"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get in Touch
              <PenLine className="h-4 w-4 ml-2" />
            </Link>
          </Button>
          {isAuthenticated ? (
            <Button size="sm" asChild>
              <Link href="/documents">
                Start Writing
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          ) : (
            <SignInButton mode="modal">
              <Button size="sm">
                Create Account
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </SignInButton>
          )}
        </div>
      )}
    </div>
  );
};
