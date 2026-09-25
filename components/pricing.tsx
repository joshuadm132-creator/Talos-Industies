export type ServiceTier = {
  id: string; // unique key, e.g. "basic", "pro", "advanced"
  name: string;
  price: string;
  period?: string; // e.g. "/month" or "per service"
  description: string;
  popular?: boolean; // highlights a tier visually
  features: string[];
  ctaText: string;
};

export type FeatureRow = {
  category?: string;
  featureName: string;
  // maps tier ID to a value (e.g., { basic: false, pro: true, advanced: "Priority" })
  tierValues: Record<string, boolean | string>;
};

type PricingProps = {
  title?: string;
  subtitle?: string;
  tiers: ServiceTier[];
  comparisonFeatures?: FeatureRow[];
};

export default function Pricing({
  title = "Pricing & Maintenance Plans",
  subtitle = "Choose the right service package or monthly maintenance plan for your vehicle.",
  tiers,
  comparisonFeatures = [],
}: PricingProps) {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-gray-600 text-lg">{subtitle}</p>
        </div>

        {/* 1. Pricing Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative flex flex-col p-8 rounded-2xl border ${
                tier.popular
                  ? "border-green-100 shadow-lg scale-105 z-10 bg-black text-white-100"
                  : "border-gray-200 shadow-sm bg-white"
                   
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-black text-white text-xs font-semibold rounded-full uppercase tracking-wider">
                  Most Popular
                </span>
              )}

              <h3 className= {`text-xl font-bold ${tier.popular
              ? " text-white"
              : "text-gray-900"
              }`} >
                {tier.name} editing</h3>
              <p className={`mt-2 text-sm ${tier.popular ?"text-gray-100" : "text-gray-500"}`}>{tier.description}</p>
                    {/* Price */} 
                <div className="mt-6 flex items-baseline"> 
                    <span className={`text-4xl font-extrabold 
                            ${ tier.popular 
                            ? "text-white" 
                            : "text-gray-900" }`} >
                        {tier.price} 
                    </span>
               {tier.period && ( <span className={`ml-1 text-sm ${ tier.popular ? "text-gray-400" : "text-gray-500" }`} >{tier.period}
                  </span>
                )}
              </div>

              {/* Bulleted Highlights */}
             <ul className={`mt-6 space-y-3 flex-1 text-sm ${ tier.popular ? "text-gray-300" : "text-gray-600" }`} > {tier.features.map((feature, i) => ( <li key={i} className="flex items-center gap-2"> <span className={`font-bold ${ tier.popular ? "text-emerald-400" : "text-emerald-600" }`} > ✓ </span> {feature} </li> ))} </ul>

              <button className={`mt-8 w-full py-3 px-4 rounded-xl font-semibold transition 
                ${ tier.popular 
                ? "bg-white text-gray-900 hover:bg-gray-200" 
                : "bg-gray-100 text-gray-900 hover:bg-gray-200" }`} >
                {tier.ctaText}
              </button>
            </div>
          ))}
        </div>

        {/* 2. Responsive Comparison Table */}
        {comparisonFeatures.length > 0 && (
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Compare Features
            </h3>

            {/* Horizontal scroll wrapper for mobile */}
            <div className="overflow-x-auto bg-white border border-gray-200 rounded-2xl shadow-sm">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50/50">
                    <th className="p-4 font-semibold text-gray-900 w-2/5">
                      Feature
                    </th>
                    {tiers.map((tier) => (
                      <th
                        key={tier.id}
                        className="p-4 font-semibold text-gray-900 text-center"
                      >
                        {tier.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
                  {comparisonFeatures.map((row, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50/50 transition-colors"
                    >
                      <td className="p-4 font-medium text-gray-900">
                        {row.featureName}
                      </td>
                      {tiers.map((tier) => {
                        const val = row.tierValues[tier.id];
                        return (
                          <td key={tier.id} className="p-4 text-center">
                            {typeof val === "boolean" ? (
                              val ? (
                                <span className="text-emerald-600 font-bold">
                                  ✓
                                </span>
                              ) : (
                                <span className="text-gray-300">—</span>
                              )
                            ) : (
                              <span>{val ?? "—"}</span>
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
        )}
      </div>
    </section>
  );
}