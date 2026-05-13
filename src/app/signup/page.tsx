"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate successful registration redirection
    setTimeout(() => {
      router.push("/");
    }, 1200);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#ffffff] text-[#151d1e] font-sans antialiased overflow-x-hidden selection:bg-[#635bff]/20">
      {/* Main layout area */}
      <main className="flex-grow flex items-center justify-center px-[32px] py-[4rem] relative">
        {/* Subtle background pattern simulating architectural grid lines */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none overflow-hidden">
          <div className="grid grid-cols-12 w-full h-full">
            <div className="border-l border-[#6a7a7b] col-start-2"></div>
            <div className="border-l border-[#6a7a7b] col-start-4"></div>
            <div className="border-l border-[#6a7a7b] col-start-6"></div>
            <div className="border-l border-[#6a7a7b] col-start-8"></div>
            <div className="border-l border-[#6a7a7b] col-start-10"></div>
            <div className="border-l border-[#6a7a7b] col-start-12"></div>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-[440px]">
          {/* Logo Section */}
          <div className="flex flex-col items-center mb-[2.5rem]">
            <Link href="/" className="inline-block text-center hover:opacity-90 transition-opacity">
              <h1 className="text-[24px] font-extrabold tracking-tight text-[#151d1e]">
                Benchmark
              </h1>
            </Link>
            <p className="text-[#3b494b] mt-[0.5rem] text-[14px] font-semibold tracking-[0.02em]">
              High performance infrastructure testing.
            </p>
          </div>

          {/* Centralized Registration Card */}
          <div className="bg-[#ffffff] border border-[#b9cacb] p-[2.5rem] rounded-[8px] shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
            <form onSubmit={handleSubmit} className="space-y-[1.5rem]">
              <div>
                <label 
                  className="text-[14px] font-semibold tracking-[0.02em] text-[#151d1e] mb-[0.5rem] block" 
                  htmlFor="fullname"
                >
                  Full Name
                </label>
                <input 
                  className="w-full px-[1.5rem] py-[1rem] border border-[#b9cacb] focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] outline-none rounded-[4px] transition-all placeholder:text-[#6a7a7b] text-[16px]" 
                  id="fullname" 
                  name="fullname" 
                  placeholder="Linus Torvalds" 
                  required
                  type="text"
                />
              </div>

              <div>
                <label 
                  className="text-[14px] font-semibold tracking-[0.02em] text-[#151d1e] mb-[0.5rem] block" 
                  htmlFor="email"
                >
                  Work Email
                </label>
                <input 
                  className="w-full px-[1.5rem] py-[1rem] border border-[#b9cacb] focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] outline-none rounded-[4px] transition-all placeholder:text-[#6a7a7b] text-[16px]" 
                  id="email" 
                  name="email" 
                  placeholder="dev@benchmark.sh" 
                  required
                  type="email"
                />
              </div>

              <div>
                <label 
                  className="text-[14px] font-semibold tracking-[0.02em] text-[#151d1e] mb-[0.5rem] block" 
                  htmlFor="password"
                >
                  Password
                </label>
                <input 
                  className="w-full px-[1.5rem] py-[1rem] border border-[#b9cacb] focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] outline-none rounded-[4px] transition-all placeholder:text-[#6a7a7b] text-[16px]" 
                  id="password" 
                  name="password" 
                  placeholder="••••••••" 
                  required
                  type="password"
                />
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-[#ffffff] py-[1.5rem] rounded-[4px] text-[14px] font-semibold tracking-[0.02em] active:scale-[0.98] transition-all duration-200 shadow-sm disabled:opacity-70"
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>

              <div className="relative py-[1.5rem]">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#b9cacb]"></div>
                </div>
                <div className="relative flex justify-center text-[12px] font-medium uppercase tracking-widest">
                  <span className="bg-[#ffffff] px-[1.5rem] text-[#3b494b]">
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Social Auth Options */}
              <div className="grid grid-cols-2 gap-[1rem]">
                <button 
                  type="button"
                  className="flex items-center justify-center gap-[0.5rem] py-[1rem] border border-[#b9cacb] rounded-[4px] hover:bg-[#e7eff0] transition-colors duration-200 text-[14px] font-semibold text-[#151d1e]"
                >
                  <svg fill="currentColor" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                  </svg>
                  GitHub
                </button>
                <button 
                  type="button"
                  className="flex items-center justify-center gap-[0.5rem] py-[1rem] border border-[#b9cacb] rounded-[4px] hover:bg-[#e7eff0] transition-colors duration-200 text-[14px] font-semibold text-[#151d1e]"
                >
                  <svg height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                  </svg>
                  Google
                </button>
              </div>
            </form>
          </div>

          {/* Sign In Link */}
          <div className="mt-[2.5rem] text-center">
            <p className="text-[#3b494b] text-[14px] font-semibold tracking-[0.02em]">
              Already have an account?{" "}
              <Link 
                href="/signup" 
                className="text-[#151d1e] hover:text-[#635bff] transition-colors underline underline-offset-4 decoration-[#b9cacb]"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </main>

      {/* Footer Standard Component */}
      <footer className="mt-auto border-t border-[#b9cacb]/40 bg-[#ffffff]">
        <div className="flex flex-col md:flex-row justify-between items-center px-[32px] py-[2.5rem] max-w-7xl mx-auto w-full gap-[1.5rem]">
          <div className="text-center md:text-left">
            <span className="text-[20px] font-black tracking-tight text-[#151d1e]">
              Benchmark
            </span>
            <p className="text-[12px] font-medium text-[#3b494b] mt-[4px]">
              © 2026 Benchmark. Built for performance.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-[1.5rem]">
            <Link href="#changelog" className="text-[#3b494b] text-[14px] font-semibold hover:text-[#635bff] transition-colors duration-200">
              Changelog
            </Link>
            <Link href="#api" className="text-[#3b494b] text-[14px] font-semibold hover:text-[#635bff] transition-colors duration-200">
              API Reference
            </Link>
            <Link href="#status" className="text-[#3b494b] text-[14px] font-semibold hover:text-[#635bff] transition-colors duration-200">
              Status
            </Link>
            <Link href="#privacy" className="text-[#3b494b] text-[14px] font-semibold hover:text-[#635bff] transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="#terms" className="text-[#3b494b] text-[14px] font-semibold hover:text-[#635bff] transition-colors duration-200">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
