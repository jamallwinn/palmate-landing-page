"use client";

import { useEffect } from "react";

export function CleanupProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const cleanup = () => {
      const removeGrammarlyAttributes = () => {
        document.querySelectorAll("[data-gr-ext-installed]").forEach((el) => {
          el.removeAttribute("data-gr-ext-installed");
        });
        document.querySelectorAll("[data-new-gr-c-s-check-loaded]").forEach((el) => {
          el.removeAttribute("data-new-gr-c-s-check-loaded");
        });
      };

      removeGrammarlyAttributes();
      const observer = new MutationObserver(() => {
        removeGrammarlyAttributes();
      });

      observer.observe(document.body, {
        attributes: true,
        subtree: true,
        childList: true,
      });

      return () => observer.disconnect();
    };

    cleanup();
  }, []);

  return <>{children}</>;
}
