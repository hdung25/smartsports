import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, ArrowRight, BookOpen, Trophy, Lightbulb, Users, Heart } from "lucide-react";
import StayConnected from "@/components/StayConnected";
import BuildWhatsNext from "@/components/BuildWhatsNext";
import RevealOnScroll from "@/components/RevealOnScroll";

function BlogsHero() {
  return (
    <section className="relative w-full h-[480px] sm:h-[520px] lg:h-[580px] overflow-hidden">
      <Image
        src="/images/blog1.png"
        alt="Students learning"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/55 to-black/75 sm:bg-gradient-to-r sm:from-black/55 sm:via-black/20 sm:to-transparent" />
      <div className="relative container-x h-full flex items-end pb-10 sm:pb-16">
        <div className="max-w-xl text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
            Blogs
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed">
            Stories, insights, and ideas
            <br className="hidden sm:block" />
            {" "}from the Smart Sports community
          </p>
          <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
            <Link href="#latest" className="btn-orange text-xs sm:text-sm justify-center">
              Read Latest
            </Link>
            <Link
              href="#subscribe"
              className="btn border-2 border-white text-white hover:bg-white hover:text-brand-blue text-xs sm:text-sm justify-center"
            >
              Subscribe
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

type Tag = "Story" | "Insight" | "Program" | "Community";

const tagStyles: Record<Tag, string> = {
  Story: "bg-brand-blue-card text-white",
  Insight: "bg-brand-orange text-white",
  Program: "bg-brand-green text-white",
  Community: "bg-amber-400 text-white",
};

const articles: {
  tag: Tag;
  image: string;
  date: string;
  title: string;
  excerpt: string;
}[] = [
  {
    tag: "Story",
    image: "/images/blog2.png",
    date: "May 10, 2026",
    title: "From the Field to the Future",
    excerpt:
      "How one scholar discovered a path into sports management through Smart Sports.",
  },
  {
    tag: "Insight",
    image: "/images/wmd2.jpg",
    date: "April 28, 2026",
    title: "Why Application Beats Memorization",
    excerpt:
      "Hands-on learning tied to real scenarios builds skills that stick — here is what we are seeing.",
  },
  {
    tag: "Program",
    image: "/images/wmd3.png",
    date: "April 15, 2026",
    title: "Inside the Career Pathways Lab",
    excerpt:
      "A look at how scholars are exploring careers in business, health, and technology.",
  },
  {
    tag: "Community",
    image: "/images/anhmoi2.png",
    date: "March 30, 2026",
    title: "Building Bridges with Local Partners",
    excerpt:
      "Partnerships with schools and community orgs that make our work possible.",
  },
];

function LatestArticles() {
  return (
    <section id="latest" className="bg-white py-14 sm:py-20">
      <div className="container-x">
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl text-brand-blue uppercase tracking-wide">
          Latest Articles
        </h2>
        <p className="text-center mt-3 text-sm sm:text-base text-brand-ink/80 font-medium px-2">
          Stories from scholars, coaches, parents, and the team behind the work.
        </p>

        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {articles.map((a, i) => (
            <article
              key={i}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-[0_6px_22px_rgba(15,27,61,0.08)] flex flex-col"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={a.image}
                  alt={a.title}
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                />
                <span
                  className={`absolute top-3 left-3 ${tagStyles[a.tag]} text-xs font-semibold rounded-md px-3 py-1`}
                >
                  {a.tag}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <p className="flex items-center gap-2 text-brand-blue text-sm font-medium">
                  <CalendarCheck size={16} />
                  {a.date}
                </p>
                <h3 className="mt-3 text-brand-blue text-lg sm:text-xl leading-tight">
                  {a.title}
                </h3>
                <p className="mt-3 text-sm text-brand-muted leading-relaxed flex-1">
                  {a.excerpt}
                </p>
                <Link
                  href="#"
                  className="mt-5 inline-flex items-center gap-2 text-brand-blue font-semibold text-sm hover:gap-3 transition-all"
                >
                  Read more <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="#all"
            className="inline-flex items-center justify-center font-semibold rounded-full px-8 py-3 border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white transition-colors"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}

const topics = [
  { icon: BookOpen, bg: "bg-brand-blue-card", title: "Stories", desc: "Real voices from scholars and families." },
  { icon: Trophy, bg: "bg-brand-orange", title: "Impact", desc: "Outcomes from our programs and partners." },
  { icon: Lightbulb, bg: "bg-brand-green", title: "Insights", desc: "Research, ideas, and frameworks we trust." },
  { icon: Users, bg: "bg-amber-400", title: "Community", desc: "Voices from coaches, mentors, and partners." },
  { icon: Heart, bg: "bg-brand-blue-card", title: "All Topics", desc: "Browse everything we have written." },
];

function BlogTopics() {
  return (
    <section className="relative bg-white py-14 sm:py-20 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72"
        style={{
          backgroundImage: "url('/images/hieuung-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "top left",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 w-48 h-48 sm:w-72 sm:h-72 rotate-180"
        style={{
          backgroundImage: "url('/images/hieuung-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "top left",
        }}
      />

      <div className="container-x relative">
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl text-brand-blue uppercase tracking-wide">
          Topics
        </h2>
        <p className="text-center mt-3 text-sm sm:text-base text-brand-ink/80 font-medium px-2">
          Browse posts by what matters to you.
        </p>

        <div className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {topics.map(({ icon: Icon, bg, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-5 sm:p-6 text-center border border-slate-100 shadow-[0_6px_20px_rgba(15,27,61,0.06)]"
            >
              <div
                className={`mx-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full ${bg} flex items-center justify-center text-white`}
              >
                <Icon size={26} />
              </div>
              <h3 className="mt-4 sm:mt-5 text-brand-blue text-sm sm:text-base">{title}</h3>
              <p className="mt-2 text-xs sm:text-sm text-brand-muted leading-snug">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function BlogsPage() {
  return (
    <>
      <BlogsHero />
      <RevealOnScroll>
        <LatestArticles />
      </RevealOnScroll>
      <RevealOnScroll>
        <BlogTopics />
      </RevealOnScroll>
      <RevealOnScroll>
        <section id="subscribe">
          <StayConnected />
        </section>
      </RevealOnScroll>
      <RevealOnScroll>
        <BuildWhatsNext />
      </RevealOnScroll>
    </>
  );
}
