import { Button } from "@/components/Button";
import { Github, Linkedin } from "@/components/icons";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { useMemo } from "react";
import  img  from "/src/assets/sharique.JPG";
import heroBg from "/src/assets/hero.png";
import resume from "/public/Sharique_Ahmed_Resume.pdf";


const skills = [
  "React",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
  "Figma",
  "Git",
  "GitHub Actions",
  "Java",
  "MySql",
];

export const Hero = () => {
    return (
   <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {useMemo(() => {
          const getRandomDots = () => {
            return Array.from({ length: 30 }).map(() => ({
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              duration: `${15 + Math.random() * 20}s`,
              delay: `${Math.random() * 5}s`,
            }));
          };
          const dots = getRandomDots();
          return dots.map((dot, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full opacity-60"
              style={{
                backgroundColor: "#20B2A6",
                left: dot.left,
                top: dot.top,
                animation: `slow-drift ${dot.duration} ease-in-out infinite`,
                animationDelay: dot.delay,
              }}
            />
          ));
        }, [])}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer • Full Stack Developer
              </span>
            </div>
            {/* Heading */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>
                <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Sharique Ahmed Sharief is a full-stack developer skilled in React.js, Node.js, MySQL, and Java.
                 He specializes in developing responsive web applications, designing efficient backend systems,
                  and managing databases to deliver reliable and scalable software solutions.
                  His focus is on writing clean, maintainable code and creating seamless user experiences.
              </p>
            </div>


            {/* CTAs */}
             <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#contact">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              </a>
              <a href={resume} target="_blank" rel="noopener noreferrer">
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
              </a>
            </div>

            {/* Social Links */}
                 <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foregro0und">Follow me: </span>
              {[
                { icon: Github, href: "https://github.com/sharique-16?tab=overview&from=2026-06-01&to=2026-06-02" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/sharique-ahmed-sharief-07b300243" },
                ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
                rounded-3xl bg-linear-to-br 
                from-primary/30 via-transparent 
                to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src={img}
                  alt="sharique ahmed"
                    className="w-full aspect-4/5 object-cover rounded-2xl"
                />
                     {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">1+</div>
                  <div className="text-xs text-muted-foreground">
                    Hands on experience.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

                {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-linear-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-linear-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
            </div>

        <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
               </section>
    );

} ;