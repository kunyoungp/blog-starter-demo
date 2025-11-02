"use client";

import { useEffect, useState } from "react";

/**
 * Reading progress bar component that shows scroll position
 * Displays at the top of the page with a gradient bar
 */
export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      // Calculate scroll percentage
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      setProgress(Math.min(scrollPercent, 100));
    };

    // Update on scroll
    window.addEventListener("scroll", updateProgress, { passive: true });

    // Initial calculation
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200 dark:bg-slate-800">
      <div
        className="h-full bg-gradient-to-r from-mindlogic-600 via-mindlogic-500 to-mindlogic-400 transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
