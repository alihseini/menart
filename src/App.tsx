import { useState } from "react";
import {
  ArrowRight,
  Download,
  ChevronLeft,
  ChevronRight,
  Building2,
  Grid2X2,
  TrendingUp,
  Globe2,
  ShieldCheck,
  Network,
  Users,
  BadgeDollarSign,
  Landmark,
  Monitor,
  Sparkles,
} from "lucide-react";

const GOLD = "#b58a3b";

const assetCards = [
  { icon: Building2, title: "Strategic Asset" },
  { icon: Grid2X2, title: "Cultural Infrastructure" },
  { icon: TrendingUp, title: "Economic Catalyst" },
  { icon: Globe2, title: "Global Liquidity" },
  { icon: ShieldCheck, title: "Authenticity & Value" },
  { icon: Network, title: "Sustainable Ecosystem" },
];

const gapStats = [
  { value: "$70M", label: "Iranian Art Market Abroad" },
  { value: "$20M", label: "Domestic Market Ceiling" },
  { value: "3+", label: "New Strategic Markets" },
  { value: "4x", label: "Increase in Market Capital Flow" },
  { value: "100%", label: "Targeted Market Expansion" },
  { value: "200%", label: "Growth in Micro Investment" },
];

const steps = [
  {
    icon: Globe2,
    title: "New Markets",
    text: "Opening and developing strategic international markets.",
  },
  {
    icon: Users,
    title: "New Collectors",
    text: "Creating access to HNWI and institutional buyers.",
  },
  {
    icon: BadgeDollarSign,
    title: "Investment Models",
    text: "Building new financial structures for art ownership.",
  },
  {
    icon: Sparkles,
    title: "Artist Growth",
    text: "Supporting the rise of new artists into the market.",
  },
  {
    icon: Landmark,
    title: "Adjacent Industries",
    text: "Connecting art with finance, real estate and technology.",
  },
  {
    icon: Monitor,
    title: "Digital Businesses",
    text: "Creating scalable digital ventures around visual art.",
  },
];

const markets = [
  {
    name: "Russia",
    line: "A strategic gateway for innovation and cultural exchange.",
    img: "market-russia",
  },
  {
    name: "China",
    line: "A vast market with growing cultural demand.",
    img: "market-china",
  },
  {
    name: "Eastern Europe",
    line: "Emerging markets with high potential.",
    img: "market-europe",
  },
  {
    name: "Southeast Asia",
    line: "Dynamic growth and new opportunities.",
    img: "market-asia",
  },
  {
    name: "Eurasia",
    line: "Connecting cultures across the region.",
    img: "market-eurasia",
  },
];

const projectSlides = [
  {
    title: "Mysterious Dreams",
    subtitle: "The Transformed Paradigm of Imagination",
    tag: "COSMOSCOW 2026",
  },
  {
    title: "Master Collection",
    subtitle: "Iranian visual arts masters",
    tag: "CURATED WORKS",
  },
  {
    title: "Cultural Capital",
    subtitle: "From artistic value to economic value",
    tag: "INVESTMENT",
  },
  {
    title: "Global Dialogue",
    subtitle: "Connecting Persian imagination to new markets",
    tag: "INTERNATIONAL",
  },
  {
    title: "Market Access",
    subtitle: "A new gateway for collectors and institutions",
    tag: "MENART",
  },
];

const masters = [
  "Behjat Sadr",
  "Mohsen Vaziri Moghaddam",
  "Reza Derakhshani",
  "Charles Hossein Zenderoudi",
  "Mohammad Ehsai",
  "Farideh Lashai",
  "Massoud Arabshahi",
  "Afshin Pirhashemi",
];

const vision = [
  { value: "100%", label: "Expansion of Iranian art market abroad" },
  { value: "3+", label: "New international markets" },
  { value: "4", label: "Sustainable visual art businesses" },
  { value: "4x", label: "Increase in market capital flow" },
  { value: "200%", label: "Growth in micro-investment" },
];

function App() {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => setSlide((prev) => (prev + 1) % projectSlides.length);
  const prevSlide = () =>
    setSlide(
      (prev) => (prev - 1 + projectSlides.length) % projectSlides.length,
    );

  const currentProject = projectSlides[slide];

  return (
    <main>
      <Header />

      <section className="hero shell">
        <div className="hero-copy">
          <h1>Architects of the Art Ecosystem</h1>
          <p>
            Art is much more than beauty. We turn art into cultural capital and
            create sustainable value.
          </p>

          <div className="hero-actions">
            <button className="btn primary">
              Explore MENART <ArrowRight size={17} />
            </button>
            <button className="btn ghost">
              View Profile <Download size={16} />
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="gold-object" />
          <div className="stone" />
        </div>
      </section>

      <section className="about shell">
        <div>
          <span className="eyebrow">About MENART</span>
          <h2>A new kind of art enterprise</h2>
          <p>
            Not a gallery. Not a dealer. A venture builder at the intersection
            of Fine Art, investment and creative economy.
          </p>

          <div className="about-tags">
            <Tag icon={TrendingUp} text="Market Development" />
            <Tag icon={BadgeDollarSign} text="Investment" />
            <Tag icon={Globe2} text="Creative Economy" />
          </div>
        </div>

        <div className="about-mark">
          <img src="/menart-logo.png" alt="MENART logo" />
        </div>
      </section>

      <section className="asset section-pad">
        <div className="shell">
          <h2>Art. Asset. Infrastructure. Growth.</h2>

          <div className="asset-grid">
            {assetCards.map((item) => {
              const Icon = item.icon;
              return (
                <div className="dark-card" key={item.title}>
                  <Icon color={GOLD} size={36} strokeWidth={1.4} />
                  <strong>{item.title}</strong>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="stat-band light shell">
        <span className="eyebrow">The Gap Between Potential and Reality</span>
        <div className="stats">
          {gapStats.map((item) => (
            <div className="stat" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="build shell">
        <span className="eyebrow">What MENART Builds</span>

        <div className="step-strip">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article className="step" key={step.title}>
                <div className="step-number">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <Icon size={42} color={GOLD} strokeWidth={1.4} />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            );
          })}
        </div>

        <div className="scroll-hint">Scroll horizontally</div>
      </section>

      <section className="markets shell">
        <aside className="markets-index">
          <span className="eyebrow">Strategic Markets</span>
          {markets.map((market, i) => (
            <div
              className={i === 0 ? "index-row active" : "index-row"}
              key={market.name}
            >
              <span>{String(i + 1).padStart(2, "0")}</span>
              <b>{market.name}</b>
            </div>
          ))}
        </aside>

        <div className="market-list">
          {markets.map((market, i) => (
            <article className="market-row" key={market.name}>
              <div className={`market-image ${market.img}`} />
              <div className="market-copy">
                <h3>{market.name}</h3>
                <p>{market.line}</p>
              </div>
              <span className="huge-num">{String(i + 1).padStart(2, "0")}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="project shell">
        <button className="circle-btn left" onClick={prevSlide}>
          <ChevronLeft size={20} />
        </button>

        <div className="project-copy">
          <span className="eyebrow">Featured Project</span>
          <h2>{currentProject.title}</h2>
          <h3>{currentProject.subtitle}</h3>
          <p>
            A curated collection of Iranian visual arts masters, presented at
            Cosmoscow 2026.
          </p>
          <button className="btn primary small">
            Explore Collection <ArrowRight size={16} />
          </button>
        </div>

        <span className="project-tag">{currentProject.tag}</span>

        <div className="dots">
          {projectSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={i === slide ? "dot active" : "dot"}
            />
          ))}
        </div>

        <button className="circle-btn right" onClick={nextSlide}>
          <ChevronRight size={20} />
        </button>
      </section>

      <section className="masters shell">
        <div className="section-head">
          <span className="eyebrow">Selected Masters</span>
        </div>

        <div className="master-marquee">
          <div className="master-track">
            {[...masters, ...masters].map((name, i) => (
              <div className="master" key={`${name}-${i}`}>
                <div className="avatar">{name[0]}</div>
                <strong>{name}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vision shell">
        <span className="eyebrow">5-Year Vision</span>
        <div className="vision-stats">
          {vision.map((item) => (
            <div className="vision-item" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="cta shell">
        <div>
          <h2>Let’s build the next art market.</h2>
          <p>
            For partnerships, investment opportunities and international
            collaborations.
          </p>
        </div>

        <div className="hero-actions">
          <button className="btn primary">
            Contact MENART <ArrowRight size={17} />
          </button>
          <button className="btn ghost">
            Download Profile <Download size={16} />
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="header">
      <a className="brand" href="#">
        <img src="/menart-logo.png" alt="MENART" />
        <strong>MENART</strong>
      </a>

      <nav>
        <a href="#">About</a>
        <a href="#">What We Do</a>
        <a href="#">Markets</a>
        <a href="#">Projects</a>
        <a href="#">Artists</a>
        <a href="#">Insights</a>
        <a href="#">Contact</a>
      </nav>

      <div className="header-actions">
        <button className="btn primary header-btn">Get In Touch</button>
        <span>EN</span>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer shell">
      <div className="brand">
        <img src="/menart-logo.png" alt="MENART" />
        <strong>MENART</strong>
      </div>

      <nav>
        <a href="#">About</a>
        <a href="#">What We Do</a>
        <a href="#">Markets</a>
        <a href="#">Projects</a>
        <a href="#">Artists</a>
        <a href="#">Contact</a>
      </nav>
    </footer>
  );
}

function Tag({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return (
    <div className="tag">
      <Icon size={24} color={GOLD} strokeWidth={1.5} />
      <span>{text}</span>
    </div>
  );
}

export default App;
