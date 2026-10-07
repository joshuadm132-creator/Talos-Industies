"use client";

import { useState } from "react";

type WalkthroughContent = {
  id: string;
  subtitle: string;
  description: string;
  paragraphs?: string[];
  features?: string[];
  button?: {
    text: string;
    href: string;
  };
};

type WalkthroughData = {
  id: string;
  eyebrow?: string;
  title: string;
  description: string;
  contents: WalkthroughContent[];
};

type WalkthroughProps = {
  walkthrough: WalkthroughData;
};

export default function Walkthrough({
  walkthrough,
}: WalkthroughProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [showAll, setShowAll] = useState(false);

  if (!walkthrough.contents.length) {
    return null;
  }

  const currentContent = walkthrough.contents[currentStep];

  return (
    <section
      className="px-4 sm:px-6 py-16 sm:py-20"
      style={{
        backgroundColor: "var(--color-background)",
        color: "var(--color-text)",
      }}
    >
      <div className="max-w-6xl mx-auto">

        {/* ========================================= */}
        {/* SECTION INTRO                             */}
        {/* ========================================= */}

        <div className="max-w-3xl">

          {walkthrough.eyebrow && (
            <p
              className="text-xs sm:text-sm font-semibold uppercase tracking-widest"
              style={{
                color: "var(--color-primary)",
              }}
            >
              {walkthrough.eyebrow}
            </p>
          )}

          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            {walkthrough.title}
          </h2>

          <p
            className="mt-4 sm:mt-5 text-base sm:text-lg leading-relaxed"
            style={{
              color: "var(--color-text-muted)",
            }}
          >
            {walkthrough.description}
          </p>

        </div>


        {/* ========================================= */}
        {/* WALKTHROUGH CARD                          */}
        {/* ========================================= */}

        <div
          className="mt-8 sm:mt-12 rounded-xl sm:rounded-2xl border overflow-hidden"
          style={{
            backgroundColor: "var(--color-surface)",
            borderColor: "var(--color-border)",
          }}
        >

          {/* ======================================= */}
          {/* CURRENT STEP                            */}
          {/* ======================================= */}

          {!showAll && (
            <div className="p-5 sm:p-8 md:p-10">

              {/* STEP INDICATOR */}

              <p
                className="text-xs sm:text-sm font-semibold uppercase tracking-widest"
                style={{
                  color: "var(--color-text-muted)",
                }}
              >
                Step {currentStep + 1} of{" "}
                {walkthrough.contents.length}
              </p>


              {/* STEP TITLE */}

              <h3 className="mt-3 sm:mt-4 text-xl sm:text-2xl md:text-3xl font-semibold leading-tight">
                {currentContent.subtitle}
              </h3>


              {/* STEP DESCRIPTION */}

              <p
                className="mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed"
                style={{
                  color: "var(--color-text-muted)",
                }}
              >
                {currentContent.description}
              </p>


              {/* PARAGRAPHS */}

              {currentContent.paragraphs?.map(
                (paragraph, index) => (
                  <p
                    key={index}
                    className="mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed"
                    style={{
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {paragraph}
                  </p>
                )
              )}


              {/* FEATURES */}

              {currentContent.features &&
                currentContent.features.length > 0 && (
                  <div className="mt-6 sm:mt-8 grid gap-3 sm:grid-cols-2">

                    {currentContent.features.map(
                      (feature, index) => (
                        <div
                          key={index}
                          className="rounded-lg border p-3 sm:p-4 text-sm sm:text-base"
                          style={{
                            backgroundColor:
                              "var(--color-background)",
                            borderColor:
                              "var(--color-border)",
                          }}
                        >
                          <span
                            className="mr-2 font-semibold"
                            style={{
                              color:
                                "var(--color-primary)",
                            }}
                          >
                            ✓
                          </span>

                          {feature}
                        </div>
                      )
                    )}

                  </div>
                )}


              {/* BUTTON */}

              {currentContent.button && (
                <a
                  href={currentContent.button.href}
                  className="inline-block w-full sm:w-auto text-center mt-6 sm:mt-8 px-6 py-3 rounded-lg font-medium transition-opacity hover:opacity-80"
                  style={{
                    backgroundColor:
                      "var(--color-primary)",
                    color:
                      "var(--color-text-inverse)",
                  }}
                >
                  {currentContent.button.text}
                </a>
              )}

            </div>
          )}


          {/* ======================================= */}
          {/* ALL STEPS                               */}
          {/* ======================================= */}

          {showAll && (
            <div className="p-5 sm:p-8 md:p-10">

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                <h3 className="text-xl sm:text-2xl font-semibold">
                  Our Process
                </h3>

                <button
                  type="button"
                  onClick={() => setShowAll(false)}
                  className="self-start text-sm font-medium transition-opacity hover:opacity-70"
                  style={{
                    color: "var(--color-primary)",
                  }}
                >
                  Back to walkthrough
                </button>

              </div>


              <div className="mt-6 sm:mt-8 space-y-6 sm:space-y-8">

                {walkthrough.contents.map(
                  (content, index) => (
                    <button
                      key={content.id}
                      type="button"
                      onClick={() => {
                        setCurrentStep(index);
                        setShowAll(false);
                      }}
                      className="w-full text-left group"
                    >

                      <div className="flex gap-3 sm:gap-5">

                        {/* NUMBER */}

                        <div
                          className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm font-medium"
                          style={{
                            backgroundColor:
                              "var(--color-background)",
                            border:
                              "1px solid var(--color-border)",
                            color:
                              "var(--color-text)",
                          }}
                        >
                          {index + 1}
                        </div>


                        {/* CONTENT */}

                        <div className="min-w-0">

                          <h4 className="text-base sm:text-lg font-semibold leading-snug">
                            {content.subtitle}
                          </h4>

                          <p
                            className="mt-2 text-sm sm:text-base leading-relaxed"
                            style={{
                              color:
                                "var(--color-text-muted)",
                            }}
                          >
                            {content.description}
                          </p>

                        </div>

                      </div>

                    </button>
                  )
                )}

              </div>

            </div>
          )}


          {/* ======================================= */}
          {/* NAVIGATION                              */}
          {/* ======================================= */}

          {!showAll && (
            <div
              className="border-t px-5 py-5 sm:px-8 sm:py-6 md:px-10"
              style={{
                borderColor: "var(--color-border)",
                backgroundColor:
                  "var(--color-background)",
              }}
            >

              <div className="flex flex-col gap-5 sm:gap-6">

                {/* STEP NUMBERS */}

                <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1">

                  {walkthrough.contents.map(
                    (content, index) => (
                      <button
                        key={content.id}
                        type="button"
                        onClick={() =>
                          setCurrentStep(index)
                        }
                        aria-label={`Go to step ${
                          index + 1
                        }`}
                        aria-current={
                          currentStep === index
                            ? "step"
                            : undefined
                        }
                        className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm font-medium transition"
                        style={
                          currentStep === index
                            ? {
                                backgroundColor:
                                  "var(--color-primary)",
                                color:
                                  "var(--color-text-inverse)",
                              }
                            : {
                                backgroundColor:
                                  "var(--color-surface)",
                                color:
                                  "var(--color-text-muted)",
                                border:
                                  "1px solid var(--color-border)",
                              }
                        }
                      >
                        {index + 1}
                      </button>
                    )
                  )}

                </div>


                {/* CONTROLS */}

                <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center">

                  {/* VIEW ALL */}

                  <button
                    type="button"
                    onClick={() => setShowAll(true)}
                    className="py-2 text-sm sm:text-base font-medium text-left transition-opacity hover:opacity-70"
                    style={{
                      color:
                        "var(--color-text)",
                    }}
                  >
                    View all steps
                  </button>


                  {/* NEXT */}

                  <button
                    type="button"
                    onClick={() => {
                      if (
                        currentStep <
                        walkthrough.contents
                          .length -
                          1
                      ) {
                        setCurrentStep(
                          currentStep + 1
                        );
                      }
                    }}
                    disabled={
                      currentStep ===
                      walkthrough.contents
                        .length - 1
                    }
                    className="w-full sm:w-auto sm:ml-auto px-6 py-3 rounded-lg font-medium transition"
                    style={
                      currentStep ===
                      walkthrough.contents.length -
                        1
                        ? {
                            backgroundColor:
                              "var(--color-border)",
                            color:
                              "var(--color-text-muted)",
                            cursor:
                              "not-allowed",
                          }
                        : {
                            backgroundColor:
                              "var(--color-primary)",
                            color:
                              "var(--color-text-inverse)",
                          }
                    }
                  >
                    Next
                  </button>

                </div>

              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}