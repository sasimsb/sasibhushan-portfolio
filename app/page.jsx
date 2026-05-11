export default function SasibhushanPortfolio() {
  const projects = [
    {
      title: "Onboarding Funnel Experience Transformation",
      impact:
        "Redesigned and optimized the onboarding journey to reduce friction, improve activation, and drive stronger conversion metrics across user cohorts.",
      challenge:
        "Handled fragmented event tracking, inconsistent user journeys, and cross-platform analytics alignment.",
      scale:
        "Analyzed millions of behavioral events across multiple customer touchpoints.",
    },
    {
      title: "Personalized Sorting Engine for SEA Markets",
      impact:
        "Built localized personalization strategies for Southeast Asian markets including Indonesia, improving user engagement and booking intent.",
      challenge:
        "Managed regional behavioral differences, sparse user data, and experimentation complexity.",
      scale:
        "Worked with high-volume recommendation datasets and near real-time user interactions.",
    },
    {
      title: "Fraud Rating Control & Guardrails",
      impact:
        "Designed fraud detection analytics frameworks with guardrails to reduce risk while maintaining user experience.",
      challenge:
        "Balanced fraud prevention with conversion optimization under large-scale transactional environments.",
      scale:
        "Processed large transaction-level datasets with anomaly monitoring and segmentation.",
    },
    {
      title: "Payment Funnel Root Cause Analytics",
      impact:
        "Identified critical drop-offs in the payment journey that directly influenced payment page redesign decisions.",
      challenge:
        "Merged behavioral analytics, funnel diagnostics, and experimentation insights to isolate pain points.",
      scale:
        "Handled large event-stream datasets and customer session-level tracking.",
    },
    {
      title: "GenAI-Powered Operator Review Intelligence",
      impact:
        "Used AI-driven insights to identify root causes behind negative operator reviews and improve operational quality.",
      challenge:
        "Extracted meaningful insights from unstructured textual feedback at scale.",
      scale:
        "Processed large-scale review datasets and sentiment analysis pipelines.",
    },
    {
      title: "Industry-Wide Market Share Estimation",
      impact:
        "Developed a scalable market share estimation framework for the Indian bus industry.",
      challenge:
        "Worked with fragmented and incomplete external datasets to derive reliable market-level insights.",
      scale:
        "Integrated multiple large datasets for nationwide market estimation.",
    },
  ];

  const skills = [
    "Advanced Product Analytics",
    "Large Scale Data Processing",
    "SQL & Python",
    "Experimentation & A/B Testing",
    "Behavioral Analytics",
    "Data Storytelling",
    "Dashboarding & Visualization",
    "Machine Learning & GenAI Applications",
    "Root Cause Analysis",
    "Cross-functional Leadership",
    "Stakeholder Management",
    "Strategic Thinking",
    "Team Mentorship",
    "Decision Making Under Pressure",
    "Problem Solving Leadership",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white scroll-smooth">

  <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
    
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

      <div className="text-lg font-semibold text-slate-100">
        Sasibhushan Muttada
      </div>

      <nav className="hidden md:flex items-center gap-8 text-sm text-slate-400">

        <a href="#about" className="hover:text-slate-200 transition">
          About
        </a>

        <a href="#projects" className="hover:text-slate-200 transition">
          Projects
        </a>

        <a href="#leadership" className="hover:text-slate-200 transition">
          Leadership
        </a>

        <a href="#skills" className="hover:text-slate-200 transition">
          Skills
        </a>

        <a href="#contact" className="hover:text-slate-200 transition">
          Contact
        </a>

      </nav>

    </div>

  </header>
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300 mb-6">
              Associate Director • Product & Analytics Leader • GenAI & Data Strategist
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
              Sasibhushan
              <span className="block text-slate-200">Muttada</span>
            </h1>

            <p className="mt-8 text-lg text-slate-300 leading-8 max-w-2xl">
              Product & Analytics Leader with 10+ years of experience driving data-backed product strategies, experimentation frameworks, customer engagement optimization, and large-scale analytical transformations. Specialized in customer acquisition, funnel optimization, fraud analytics, recommendation systems, GenAI-driven operational intelligence, and behavioral analytics across India and Southeast Asian markets.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#projects" className="px-6 py-3 rounded-2xl bg-slate-200 hover:bg-cyan-400 transition font-semibold text-black shadow-2xl">
                View Projects
              </a>

              <a href="#contact" className="px-6 py-3 rounded-2xl border border-slate-600 hover:border-cyan-400 transition text-slate-200">
                Contact Me
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 blur-3xl bg-cyan-500/20 rounded-full"></div>
            <div className="relative rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-2xl bg-slate-950 p-6 border border-slate-800">
                  <h3 className="text-4xl font-bold text-cyan-400">500M Plus</h3>
                  <p className="mt-2 text-slate-400 text-sm">
                    Events processed daily through scalable ETL and real-time analytical pipelines.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-950 p-6 border border-slate-800">
                  <h3 className="text-4xl font-bold text-cyan-400">Large Scale</h3>
                  <p className="mt-2 text-slate-400 text-sm">
                    Expertise in processing complex multi-source datasets and deriving business insights.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-950 p-6 border border-slate-800">
                  <h3 className="text-4xl font-bold text-cyan-400">2 to 30 Team Scale</h3>
                  <p className="mt-2 text-slate-400 text-sm">
                    Scaled analytics organization from 2 to 30 BI Engineers & Data Scientists with strong retention and mentorship culture.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-950 p-6 border border-slate-800">
                  <h3 className="text-4xl font-bold text-cyan-400">₹200MN Impact</h3>
                  <p className="mt-2 text-slate-400 text-sm">
                    Delivered measurable revenue growth, operational savings, and business transformation initiatives through analytics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-12">
          <h2 className="text-4xl font-bold">Who is Sasibhushan?</h2>
          <p className="text-slate-400 mt-4 max-w-3xl leading-7">
            Sasibhushan Muttada is an experienced analytics and product leader with expertise in Product Analytics, Machine Learning, GenAI applications, experimentation frameworks, customer behavior analytics, recommendation systems, and operational intelligence. He has worked across industries including Mobility, E-commerce, Insurance, Telecom, Retail Supply Chain, HR Tech, and Digital Platforms delivering measurable business outcomes using data-driven decision making.
          </p>

<div className="grid md:grid-cols-3 gap-5 mt-10">

  <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
    <div className="text-3xl mb-2">📊</div>

    <h3 className="text-lg font-semibold text-slate-200">
      Product Analytics
    </h3>

    <p className="text-slate-400 text-sm mt-2 leading-6">
      Funnel optimization, experimentation,
      customer intelligence, and behavioral analytics.
    </p>
  </div>

  <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
    <div className="text-3xl mb-2">🤖</div>

    <h3 className="text-lg font-semibold text-slate-200">
      GenAI & Machine Learning
    </h3>

    <p className="text-slate-400 text-sm mt-2 leading-6">
      AI-driven operational transformation,
      recommendation systems, and predictive modeling.
    </p>
  </div>

  <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
    <div className="text-3xl mb-2">⚡</div>

    <h3 className="text-lg font-semibold text-slate-200">
      Large Scale Systems
    </h3>

    <p className="text-slate-400 text-sm mt-2 leading-6">
      Real-time ETL pipelines, scalable analytics,
      and business intelligence systems.
    </p>
  </div>

</div>

        </div>

    
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h2 id="projects" className="text-4xl font-bold">Professional Experience & Major Projects</h2>
          <p className="text-slate-400 mt-4 max-w-3xl leading-7">
            Experience spanning redBus, Cognizant, Accenture, Tatvic Analytics, and Gupta Power with focus on large-scale analytics transformation, experimentation, recommendation systems, and AI-driven business intelligence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 hover:border-cyan-500 transition-all hover:-translate-y-1"
            >
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

              <div className="space-y-4 text-slate-300 leading-7">
                <div>
                  <span className="font-semibold text-cyan-400">Impact:</span> {project.impact}
                </div>

                <div>
                  <span className="font-semibold text-cyan-400">Challenge:</span> {project.challenge}
                </div>

                <div>
                  <span className="font-semibold text-cyan-400">Scale:</span> {project.scale}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 to-slate-950 p-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl font-bold leading-tight">
                Handling Tough Problems with Data at Scale
              </h2>

              <p className="mt-6 text-slate-300 leading-8">
                Sasibhushan has consistently worked on high-pressure analytical challenges where
                data volume, speed, and accuracy directly impacted business outcomes.
                His expertise includes identifying hidden root causes, designing scalable analytical
                frameworks, and ensuring actionable insights even in environments with noisy or fragmented data.
              </p>
            </div>

            <div className="grid gap-5">
              <div className="rounded-2xl bg-black/40 border border-slate-800 p-6">
                <h3 className="font-semibold text-cyan-400 text-xl">Massive Dataset Handling</h3>
                <p className="text-slate-400 mt-3 leading-7">
                  Experienced in working with millions of rows of event data, transaction records,
                  behavioral streams, and operational datasets.
                </p>
              </div>

              <div className="rounded-2xl bg-black/40 border border-slate-800 p-6">
                <h3 className="font-semibold text-cyan-400 text-xl">Strategic Decision Making</h3>
                <p className="text-slate-400 mt-3 leading-7">
                  Converts analytical findings into practical product and business strategies.
                </p>
              </div>

              <div className="rounded-2xl bg-black/40 border border-slate-800 p-6">
                <h3 className="font-semibold text-cyan-400 text-xl">Data Quality & Governance</h3>
                <p className="text-slate-400 mt-3 leading-7">
                  Strong focus on improving tracking quality, analytical reliability, and scalable reporting frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="max-w-7xl mx-auto px-6 py-10">
  <div className="grid lg:grid-cols-3 gap-8 items-start">
    
    <div className="lg:col-span-2">
      <h2 className="text-4xl font-bold text-slate-100">
        Who is Sasibhushan?
      </h2>

      <p className="text-slate-400 mt-6 leading-8 text-lg">
        Sasibhushan Muttada is a Product & Analytics Leader with
        10+ years of experience in building scalable analytical
        solutions, experimentation frameworks, customer intelligence
        systems, and AI-driven operational capabilities.
      </p>

      <p className="text-slate-400 mt-4 leading-8 text-lg">
        He has worked across Mobility, E-commerce, Telecom,
        Insurance, Retail Supply Chain, HR Tech, and Digital
        Platforms helping organizations solve complex business
        problems using data, machine learning, and product analytics.
      </p>
    </div>

    <div className="space-y-4">
      
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
        <div className="text-3xl mb-2">📊</div>

        <h3 className="text-lg font-semibold text-slate-200">
          Product Analytics
        </h3>

        <p className="text-slate-400 text-sm mt-2 leading-6">
          Funnel optimization, experimentation,
          customer behavior analytics, and conversion insights.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
        <div className="text-3xl mb-2">🤖</div>

        <h3 className="text-lg font-semibold text-slate-200">
          GenAI & Machine Learning
        </h3>

        <p className="text-slate-400 text-sm mt-2 leading-6">
          AI-driven operational transformation,
          recommendation systems, and predictive analytics.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
        <div className="text-3xl mb-2">⚡</div>

        <h3 className="text-lg font-semibold text-slate-200">
          Large Scale Systems
        </h3>

        <p className="text-slate-400 text-sm mt-2 leading-6">
          Real-time ETL pipelines, scalable analytics,
          and business intelligence systems.
        </p>
      </div>

    </div>
  </div>
</section>

      <section id="leadership" className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-12">
          <h2 className="text-4xl font-bold">Technical Skills & Expertise</h2>
          <p className="text-slate-400 mt-4 max-w-3xl leading-7">
            Strong expertise across analytics engineering, experimentation, machine learning, product analytics, and GenAI-driven operational transformation.
          </p>
        </div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

  {[
    { icon: "🗄️", skill: "SQL (MySQL, PostgreSQL, SQL Server)" },
    { icon: "🐍", skill: "Python (NumPy, Pandas)" },
    { icon: "🧠", skill: "Machine Learning & XGBoost" },
    { icon: "🧪", skill: "A/B Testing & Experimentation" },
    { icon: "📈", skill: "Google Analytics 4 & GTM" },
    { icon: "⚡", skill: "Redshift, Athena & Iceberg" },
    { icon: "📊", skill: "Power BI & Dashboarding" },
    { icon: "🤖", skill: "AI, GenAI & Prompt Engineering" },
    { icon: "🔍", skill: "Customer Funnel Analytics" },
    { icon: "🎯", skill: "Recommendation Systems" },
    { icon: "🔄", skill: "ETL Pipeline Architecture" },
    { icon: "📡", skill: "Behavioral Analytics" }
  ].map((item) => (
    <div
      key={item.skill}
      className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-slate-600 transition"
    >
      <div className="flex items-center gap-3">
        
        <div className="text-2xl">
          {item.icon}
        </div>

        <div className="text-base font-medium text-slate-200">
          {item.skill}
        </div>

      </div>
    </div>
  ))}

</div>
      </section>

      <footer id="contact" className="border-t border-slate-800 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-xl">Sasibhushan Muttada</h3>
            <p className="text-slate-500 mt-1">
              Building scalable analytics solutions with business impact.
            </p>
          </div>

          <div className="text-slate-500 text-sm">
            
            <div className="space-y-3 text-slate-300">
              <div>
                <span className="text-cyan-400 font-semibold">LinkedIn:</span>{" "}
                <a
                  href="https://www.linkedin.com/in/sasibhushan-m-15961425/"
                  target="_blank"
                  className="hover:text-cyan-400"
                >
                  linkedin.com/in/sasibhushan-m-15961425
                </a>
              </div>

              <div>
                <span className="text-cyan-400 font-semibold">Email:</span>{" "}
                <a href="mailto:sasi.msb@gmail.com" className="hover:text-cyan-400">
                  sasi.msb@gmail.com
                </a>
              </div>

              <div>
                <span className="text-cyan-400 font-semibold">Phone:</span>{" "}
                +91-6361341206
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
