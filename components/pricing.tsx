"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import CustomSection from "@/components/section";
import Link from "next/link";

export type ServiceTier = {
  id: string;
  name: string;
  bestFor?: string;
  price?: string;
  period?: string;
  monthlyNote?: string;
  description: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
};

export type CarePlan = {
  id: string;
  name: string;
  price: string;
  period?: string;
  description: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
};

export type Addon = {
  id: string;
  name: string;
  description: string;
  price: string;
};

export type FeatureRow = {
  featureName: string;
  tierValues: Record<string, boolean | string>;
};

export type PricingTab = { id: string; label: string };

type PricingProps = {
  title?: string;
  subtitle?: string;
  tabs: PricingTab[];
  tiers: ServiceTier[];
  comparisonFeatures?: FeatureRow[];
  addons: { title: string; subtitle?: string; items: Addon[] };
  care: {
    title: string;
    subtitle?: string;
    note?: string;
    plans: CarePlan[];
  };
  includedEverywhere?: { title: string; items: string[] };
};

export default function Pricing({
  title,
  subtitle,
  tabs,
  tiers,
  comparisonFeatures = [],
  addons,
  care,
  includedEverywhere,
}: PricingProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id ?? "build");

  return (
    <CustomSection background="gray">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-heading font-bold text-text md:text-4xl">
          {title}
        </h2>
        {subtitle && <p className="mt-4 text-text-muted text-lg">{subtitle}</p>}
      </div>

      {/* Segmented tab control */}
      <div className="mt-10 flex justify-center">
        <div className="inline-flex rounded-full bg-background border border-border p-1">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                  isActive
                    ? "bg-primary text-text-inverse"
                    : "text-text-muted hover:text-text"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* BUILD TAB */}
      {activeTab === "build" && (
        <div className="mt-12">
          <TierGrid tiers={tiers} />

          {includedEverywhere && (
            <IncludedEverywhere block={includedEverywhere} />
          )}

          {comparisonFeatures.length > 0 && (
            <ComparisonTable tiers={tiers} rows={comparisonFeatures} />
          )}

          <AddonsBlock addons={addons} />
        </div>
      )}

      {/* ADD-ONS TAB */}
      {activeTab === "addons" && (
        <div className="mt-12">
          <AddonsBlock addons={addons} standalone />
        </div>
      )}

      {/* CARE TAB */}
      {activeTab === "care" && (
        <div className="mt-12">
          {care.note && (
            <p className="text-center text-sm text-text-muted mb-8">
              {care.note}
            </p>
          )}
          <CareGrid plans={care.plans} />

          {includedEverywhere && (
            <IncludedEverywhere block={includedEverywhere} />
          )}

          <AddonsBlock addons={addons} />
        </div>
      )}
    </CustomSection>
  );
}

/* ---------- Build tier grid ---------- */

function TierGrid({ tiers }: { tiers: ServiceTier[] }) {
  return (
    <div className="grid gap-8 items-stretch mx-auto grid-cols-1 md:grid-cols-3 max-w-5xl">
      {tiers.map((tier) => (
        <div
          key={tier.id}
          className={`relative flex flex-col p-8 rounded-2xl border ${
            tier.popular
              ? "border-primary bg-hero-bg text-hero-text shadow-lg md:scale-105 z-10"
              : "border-border bg-background shadow-sm"
          }`}
        >
          {tier.popular && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-text-inverse text-xs font-semibold rounded-full uppercase tracking-wider">
              Most Popular
            </span>
          )}

          <h3
            className={`text-xl font-bold ${
              tier.popular ? "text-hero-text" : "text-text"
            }`}
          >
            {tier.name}
          </h3>

          {tier.bestFor && (
            <p
              className={`mt-1 text-xs uppercase tracking-wider ${
                tier.popular ? "text-hero-text/60" : "text-text-muted"
              }`}
            >
              {tier.bestFor}
            </p>
          )}

          <p
            className={`mt-4 text-sm ${
              tier.popular ? "text-hero-text/70" : "text-text-muted"
            }`}
          >
            {tier.description}
          </p>

          {tier.price && (
            <div className="mt-6 flex items-baseline">
              <span
                className={`text-lg font-bold uppercase ${
                  tier.popular ? "text-hero-text" : "text-text"
                }`}
              >
                {tier.price}
              </span>
              {tier.period && (
                <span
                  className={`ml-2 text-xs ${
                    tier.popular ? "text-hero-text/60" : "text-text-muted"
                  }`}
                >
                  {tier.period}
                </span>
              )}
            </div>
          )}

          {tier.monthlyNote && (
            <p
              className={`mt-2 text-xs ${
                tier.popular ? "text-hero-text/60" : "text-text-muted"
              }`}
            >
              {tier.monthlyNote}
            </p>
          )}

          <ul
            className={`mt-6 space-y-3 flex-1 text-sm ${
              tier.popular ? "text-hero-text/80" : "text-text-muted"
            }`}
          >
            {tier.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="font-bold text-accent mt-0.5">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className={`mt-8 block text-center w-full py-3 px-4 rounded-xl font-semibold transition ${
              tier.popular
                ? "bg-primary text-text-inverse hover:bg-primary-hover"
                : "bg-surface text-text hover:bg-border"
            }`}
          >
            {tier.ctaText}
          </Link>
        </div>
      ))}
    </div>
  );
}

/* ---------- Care grid ---------- */

function CareGrid({ plans }: { plans: CarePlan[] }) {
  return (
    <div className="grid gap-8 items-stretch mx-auto grid-cols-1 md:grid-cols-3 max-w-5xl">
      {plans.map((plan) => (
        <div
          key={plan.id}
          className={`relative flex flex-col p-8 rounded-2xl border ${
            plan.popular
              ? "border-primary bg-hero-bg text-hero-text shadow-lg md:scale-105 z-10"
              : "border-border bg-background shadow-sm"
          }`}
        >
          {plan.popular && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-text-inverse text-xs font-semibold rounded-full uppercase tracking-wider">
              Most Popular
            </span>
          )}

          <h3
            className={`text-xl font-bold ${
              plan.popular ? "text-hero-text" : "text-text"
            }`}
          >
            {plan.name}
          </h3>

          <p
            className={`mt-2 text-sm ${
              plan.popular ? "text-hero-text/70" : "text-text-muted"
            }`}
          >
            {plan.description}
          </p>

          <div className="mt-6 flex items-baseline">
            <span
              className={`text-4xl font-extrabold ${
                plan.popular ? "text-hero-text" : "text-text"
              }`}
            >
              {plan.price}
            </span>
            {plan.period && (
              <span
                className={`ml-2 text-xs ${
                  plan.popular ? "text-hero-text/60" : "text-text-muted"
                }`}
              >
                {plan.period}
              </span>
            )}
          </div>

          <ul
            className={`mt-6 space-y-3 flex-1 text-sm ${
              plan.popular ? "text-hero-text/80" : "text-text-muted"
            }`}
          >
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="font-bold text-accent mt-0.5">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className={`mt-8 block text-center w-full py-3 px-4 rounded-xl font-semibold transition ${
              plan.popular
                ? "bg-primary text-text-inverse hover:bg-primary-hover"
                : "bg-surface text-text hover:bg-border"
            }`}
          >
            {plan.ctaText}
          </Link>
        </div>
      ))}
    </div>
  );
}

/* ---------- Included everywhere ---------- */

function IncludedEverywhere({
  block,
}: {
  block: { title: string; items: string[] };
}) {
  return (
    <Reveal>
      <div className="mt-16 max-w-4xl mx-auto rounded-2xl border border-border bg-background p-8">
        <h3 className="text-xl font-heading font-bold text-text text-center">
          {block.title}
        </h3>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-text">
              <span className="text-accent font-bold mt-0.5">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}


/* ---------- Comparison table ---------- */

function ComparisonTable({
  tiers,
  rows,
}: {
  tiers: ServiceTier[];
  rows: FeatureRow[];
}) {
  return (
    <Reveal>
      <div className="mt-12 sm:mt-16 md:mt-20">
        <h3 className="text-xl sm:text-2xl font-heading font-bold text-center text-text mb-3 sm:mb-8">
          Compare Packages
        </h3>

        {/* Mobile scroll hint */}
        <p className="mb-4 text-center text-xs text-text-muted sm:hidden">
          ← Swipe to compare packages →
        </p>

        <div className="overflow-x-auto rounded-xl sm:rounded-2xl border border-border bg-background shadow-sm">
          <table className="w-full min-w-[650px] border-collapse text-left">
            
            {/* TABLE HEADER */}
            <thead>
              <tr className="border-b border-border bg-surface">
                
                {/* Feature column */}
                <th
                  scope="col"
                  className="
                    sticky left-0 z-20
                    w-[38%]
                    min-w-[180px]
                    border-r border-border
                    bg-surface
                    px-3 py-3
                    text-xs font-semibold text-text
                    sm:px-4 sm:py-4 sm:text-sm
                  "
                >
                  Feature
                </th>

                {/* Tier columns */}
                {tiers.map((tier) => (
                  <th
                    key={tier.id}
                    scope="col"
                    className="
                      min-w-[150px]
                      px-3 py-3
                      text-center
                      text-xs font-semibold text-text
                      sm:px-4 sm:py-4 sm:text-sm
                    "
                  >
                    {tier.name}
                  </th>
                ))}
              </tr>
            </thead>

            {/* TABLE BODY */}
            <tbody className="divide-y divide-border text-xs text-text sm:text-sm">
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className="transition-colors hover:bg-surface"
                >
                  {/* Feature name */}
                  <td
                    className="
                      sticky left-0 z-10
                      border-r border-border
                      bg-background
                      px-3 py-3
                      font-medium
                      sm:px-4 sm:py-4
                    "
                  >
                    {row.featureName}
                  </td>

                  {/* Tier values */}
                  {tiers.map((tier) => {
                    const val = row.tierValues[tier.id];

                    return (
                      <td
                        key={tier.id}
                        className="
                          min-w-[150px]
                          px-3 py-3
                          text-center
                          sm:px-4 sm:py-4
                        "
                      >
                        {typeof val === "boolean" ? (
                          val ? (
                            <span
                              className="text-base font-bold text-accent sm:text-lg"
                              aria-label="Included"
                            >
                              ✓
                            </span>
                          ) : (
                            <span
                              className="text-text-muted/40"
                              aria-label="Not included"
                            >
                              —
                            </span>
                          )
                        ) : (
                          <span className="leading-relaxed">
                            {val ?? "—"}
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Reveal>
  );
}



/* ---------- Add-ons block ---------- */

function AddonsBlock({
  addons,
  standalone = false,
}: {
  addons: { title: string; subtitle?: string; items: Addon[] };
  standalone?: boolean;
}) {
  return (
    <Reveal>
      <div className={standalone ? "" : "mt-20"}>
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-heading font-bold text-text">
            {addons.title}
          </h3>
          {addons.subtitle && (
            <p className="mt-3 text-text-muted">{addons.subtitle}</p>
          )}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {addons.items.map((addon) => (
            <div
              key={addon.id}
              className="flex flex-col p-6 rounded-xl border border-border bg-background"
            >
              <div className="flex items-start justify-between gap-3">
                <h4 className="font-heading font-semibold text-text">
                  {addon.name}
                </h4>
                <span className="text-sm font-bold text-accent shrink-0">
                  {addon.price}
                </span>
              </div>
              <p className="mt-2 text-sm text-text-muted leading-relaxed">
                {addon.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}