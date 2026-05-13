"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate successful authentication redirection
    setTimeout(() => {
      router.push("/");
    }, 1200);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#ffffff] text-[#121c2b] font-sans antialiased overflow-x-hidden selection:bg-[#635bff]/20">
      {/* Main layout area */}
      <main className="flex-grow flex items-center justify-center px-[32px] py-[4rem] relative">
        {/* Subtle background line pattern to maintain brand continuity */}
        <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none overflow-hidden">
          <div className="grid grid-cols-12 w-full h-full">
            <div className="border-l border-[#777587] col-start-3"></div>
            <div className="border-l border-[#777587] col-start-6"></div>
            <div className="border-l border-[#777587] col-start-9"></div>
          </div>
        </div>

        {/* Main Container */}
        <div className="relative z-10 w-full max-w-[420px] mx-auto flex flex-col gap-[40px]">
          {/* Header */}
          <header className="text-center flex flex-col gap-[8px]">
            <Link href="/" className="inline-block hover:opacity-90 transition-opacity">
              <h1 className="text-[32px] font-bold leading-[40px] tracking-[-0.01em] text-[#121c2b]">
                Benchmark
              </h1>
            </Link>
            <p className="text-[15px] leading-[24px] text-[#464555]">
              Sign in to your account
            </p>
          </header>

          {/* Login Card */}
          <div className="bg-[#ffffff] border border-[#c7c4d8] rounded-[8px] p-[40px] shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]">
              {/* Email Field */}
              <div className="flex flex-col gap-[8px]">
                <label 
                  className="text-[13px] font-medium leading-[16px] tracking-[0.02em] text-[#121c2b]" 
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input 
                  className="w-full h-[48px] px-[16px] border border-[#c7c4d8] rounded-[4px] bg-[#ffffff] text-[#121c2b] text-[15px] focus:border-[#635bff] focus:ring-1 focus:ring-[#635bff] outline-none transition-colors placeholder:text-[#777587]/60" 
                  id="email" 
                  placeholder="name@example.com" 
                  required
                  type="email"
                />
              </div>

              {/* Password Field */}
              <div className="flex flex-col gap-[8px]">
                <div className="flex justify-between items-center">
                  <label 
                    className="text-[13px] font-medium leading-[16px] tracking-[0.02em] text-[#121c2b]" 
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <Link 
                    href="#" 
                    className="text-[13px] font-medium leading-[16px] tracking-[0.02em] text-[#635bff] hover:text-[#493ee5] transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>
                <input 
                  className="w-full h-[48px] px-[16px] border border-[#c7c4d8] rounded-[4px] bg-[#ffffff] text-[#121c2b] text-[15px] focus:border-[#635bff] focus:ring-1 focus:ring-[#635bff] outline-none transition-colors placeholder:text-[#777587]/60" 
                  id="password" 
                  placeholder="••••••••" 
                  required
                  type="password"
                />
              </div>

              {/* Primary CTA */}
              <button 
                type="submit"
                disabled={loading}
                className="w-full h-[48px] bg-[#635bff] hover:bg-[#4c42e9] text-[#ffffff] text-[13px] font-medium tracking-[0.02em] rounded-[4px] flex items-center justify-center transition-all mt-[16px] active:scale-[0.98] shadow-sm disabled:opacity-70"
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>
            </form>

            {/* Divider */}
            <div className="relative flex items-center py-[24px] my-[8px]">
              <div className="flex-grow border-t border-[#c7c4d8]"></div>
              <span className="flex-shrink-0 px-[16px] text-[13px] font-medium tracking-[0.02em] text-[#777587] bg-[#ffffff]">
                OR CONTINUE WITH
              </span>
              <div className="flex-grow border-t border-[#c7c4d8]"></div>
            </div>

            {/* Social Logins */}
            <div className="flex flex-col gap-[16px]">
              <button 
                type="button"
                className="w-full h-[48px] bg-[#ffffff] border border-[#c7c4d8] text-[#121c2b] text-[13px] font-medium tracking-[0.02em] rounded-[4px] flex items-center justify-center gap-[8px] hover:bg-[#F9F9F9] transition-colors"
              >
                <svg aria-hidden="true" className="w-[20px] h-[20px]" fill="currentColor" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fillRule="evenodd"></path>
                </svg>
                GitHub
              </button>
              <button 
                type="button"
                className="w-full h-[48px] bg-[#ffffff] border border-[#c7c4d8] text-[#121c2b] text-[13px] font-medium tracking-[0.02em] rounded-[4px] flex items-center justify-center gap-[8px] hover:bg-[#F9F9F9] transition-colors"
              >
                <svg aria-hidden="true" className="w-[20px] h-[20px]" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                </svg>
                Google
              </button>
            </div>
          </div>

          {/* Footer Link below card */}
          <div className="text-center">
            <p className="text-[15px] leading-[24px] text-[#464555]">
              Don't have an account?{" "}
              <Link 
                href="/signup" 
                className="text-[#635bff] hover:text-[#493ee5] transition-colors underline underline-offset-4 font-medium"
              >
                Create one
              </Link>
            </p>
          </div>
        </div>
      </main>

      {/* Footer Standard Component */}
      <footer className="mt-auto border-t border-[#c7c4d8]/40 bg-[#ffffff]">
        <div className="flex flex-col md:flex-row justify-between items-center px-[32px] py-[2.5rem] max-w-7xl mx-auto w-full gap-[1.5rem]">
          <div className="text-center md:text-left">
            <Link href="/" className="inline-block hover:opacity-90 transition-opacity">
              <span className="text-[20px] font-black tracking-tight text-[#121c2b]">
                Benchmark
              </span>
            </Link>
            <p className="text-[12px] font-medium text-[#464555] mt-[4px]">
              © 2026 Benchmark. Built for performance.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-[1.5rem]">
            <Link href="#changelog" className="text-[#464555] text-[14px] font-semibold hover:text-[#635bff] transition-colors duration-200">
              Changelog
            </Link>
            <Link href="#api" className="text-[#464555] text-[14px] font-semibold hover:text-[#635bff] transition-colors duration-200">
              API Reference
            </Link>
            <Link href="#status" className="text-[#464555] text-[14px] font-semibold hover:text-[#635bff] transition-colors duration-200">
              Status
            </Link>
            <Link href="#privacy" className="text-[#464555] text-[14px] font-semibold hover:text-[#635bff] transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="#terms" className="text-[#464555] text-[14px] font-semibold hover:text-[#635bff] transition-colors duration-200">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
