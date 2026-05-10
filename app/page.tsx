export default function SasibhushanPortfolio(): JSX.Element {
  const projects = [
    {
      title: "Onboarding Funnel Experience Transformation",
      impact:
        "Redesigned and optimized onboarding journeys to improve activation and conversion metrics across customer funnels.",
      challenge:
        "Handled fragmented event tracking systems, inconsistent customer journeys, and large-scale behavioral datasets.",
      scale:
        "Analyzed millions of user behavioral events across multiple customer touchpoints.",
    },
    {
      title: "Personalized Sorting Engine for SEA Markets",
      impact:
        "Built localized personalization strategies for Southeast Asian markets including Indonesia.",
      challenge:
        "Managed regional behavior differences, sparse datasets, and experimentation complexity.",
      scale:
        "Worked with high-volume recommendation and interaction datasets.",
    },
    {
      title: "Fraud Rating Control & Guardrails",
      impact:
        "Designed analytical guardrails for fraud prevention while balancing conversion and user experience.",
      challenge:
        "Solved fraud-risk optimization problems under large-scale transactional environments.",
      scale:
        "Processed transaction-level datasets and anomaly monitoring pipelines.",
    },
    {
      title: "Payment Funnel Root Cause Analytics",
      impact:
        "Identified payment-step drop-offs that influenced redesign decisions and funnel optimization.",
      challenge:
        "Merged product analytics, behavioral diagnostics, and experimentation insights.",
      scale:
        "Handled large event-stream and session-level datasets.",
    },
    {
      title: "GenAI-Powered Operator Review Intelligence",
      impact:
        "Used AI-driven analytics to reduce negative operator reviews and improve operational quality.",
      challenge:
        "Extracted insights from large-scale unstructured review datasets.",
      scale:
        "Built scalable review intelligence and sentiment-analysis pipelines.",
    },
    {
      title: "Industry-Wide Market Share Estimation",
      impact:
        "Developed scalable market-share estimation frameworks for the Indian bus industry.",
      challenge:
        "Integrated fragmented external datasets and derived reliable market insights.",
      scale:
        "Handled nationwide datasets with multi-source integrations.",
    },
  ];

  const skills = [
    "Advanced Product Analytics",
    "Large Scale Data Processing",
    "SQL & Python",
    "Experimentation & A/B Testing",
    "Behavioral Analytics",
    "Dashboarding & Visualization",
    "Machine Learning & GenAI Applications",
    "Root Cause Analysis",
    "Cross-functional Leadership",
    "Stakeholder Management",
    "Strategic Thinking",
    "Team Mentorship",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300 mb-6">
              Analytics Leader • Product Strategist • Data Scale Expert
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
              Sasibhushan
              <span className="block text-cyan-400">Muttada</span>
            </h1>

            <p className="mt-8 text-lg text-slate-300 leading-8 max-w-2xl">
              A data and analytics professional specializing in solving
              large-scale business problems, optimizing customer experiences,
              and transforming complex datasets into strategic business
              decisions.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold text-black">
                View Projects
              </button>

              <button className="px-6 py-3 rounded-2xl border border-slate-600 hover:border-cyan-400 transition text-slate-200">
                Contact
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 blur-3xl bg-cyan-500/20 rounded-full"></div>

            <div className="relative rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-2xl bg-slate-950 p-6 border border-slate-800">
                  <h3 className="text-4xl font-bold text-cyan-400">
                    100M+
                  </h3>
                  <p className="mt-2 text-slate-400 text-sm">
                    Events and behavioral records analyzed.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-950 p-6 border border-slate-800">
                  <h3 className="text-4xl font-bold text-cyan-400">
                    Large Scale
                  </h3>
                  <p className="mt-2 text-slate-400 text-sm">
                    Expertise handling complex multi-source datasets.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-950 p-6 border border-slate-800">
                  <h3 className="text-4xl font-bold text-cyan-400">
                    Leadership
                  </h3>
                  <p className="mt-2 text-slate-400 text-sm">
                    Cross-functional collaboration with product and business
                    teams.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-950 p-6 border border-slate-800">
                  <h3 className="text-4xl font-bold text-cyan-400">
                    Impact
                  </h3>
                  <p className="mt-2 text-slate-400 text-sm">
                    Strong focus on measurable business outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h2 className="text-4xl font-bold">Capabilities</h2>

          <p className="text-slate-400 mt-4 max-w-3xl leading-7">
            Expertise in solving analytical problems where scale, product
            strategy, experimentation, and business impact intersect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-cyan-500 transition"
            >
              <div className="text-xl font-semibold">{skill}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h2 className="text-4xl font-bold">
            Major Projects & Challenges
          </h2>

          <p className="text-slate-400 mt-4 max-w-3xl leading-7">
            Strategic initiatives involving product analytics, large-scale
            datasets, experimentation, fraud systems, and operational
            intelligence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 hover:border-cyan-500 transition-all"
            >
              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <div className="space-y-4 text-slate-300 leading-7">
                <div>
                  <span className="font-semibold text-cyan-400">
                    Impact:
                  </span>{" "}
                  {project.impact}
                </div>

                <div>
                  <span className="font-semibold text-cyan-400">
                    Challenge:
                  </span>{" "}
                  {project.challenge}
                </div>

                <div>
                  <span className="font-semibold text-cyan-400">
                    Scale:
                  </span>{" "}
                  {project.scale}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h2 className="text-4xl font-bold">Leadership Skills</h2>

          <p className="text-slate-400 mt-4 max-w-3xl leading-7">
            Strong leadership capabilities in managing analytical initiatives,
            mentoring teams, driving strategic alignment, and building scalable
            data cultures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Team Building",
            "Stakeholder Management",
            "Strategic Decision Making",
            "Execution Under Pressure",
            "Mentorship & Collaboration",
            "Business Impact Orientation",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
            >
              <h3 className="text-xl font-semibold text-cyan-400">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-xl">
              Sasibhushan Muttada
            </h3>

            <p className="text-slate-500 mt-1">
              Building scalable analytics solutions with measurable business
              impact.
            </p>
          </div>

          <div className="text-slate-500 text-sm">
            Portfolio Website • Product Analytics • Data Leadership
          </div>
        </div>
      </footer>
    </div>
  );
}