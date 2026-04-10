import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-sage-50 to-sage-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-sage-900 mb-4">About Me</h1>
          <p className="text-sage-600 text-lg max-w-2xl mx-auto">
            Passionate about community impact and empowering organizations to secure the funding they deserve.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
            <div className="relative h-[520px] rounded-2xl overflow-hidden shadow-xl sticky top-24">
              <Image
                src="/images/headshot.jpg"
                alt="Hannah Burke"
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <span className="inline-block bg-sage-100 text-sage-600 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                Founder
              </span>
              <h2 className="text-3xl font-bold text-sage-800 mb-5">Hi, I&apos;m Hannah Burke</h2>

              <p className="text-gray-600 leading-relaxed mb-4">
                I&apos;m a senior at Penn State University studying{" "}
                <strong className="text-sage-700">Community Environment and Development (CED)</strong>{" "}
                with a focus in Corporate Social Responsibility, and minors in International Agriculture (INTAG)
                and Entrepreneurship &amp; Innovation (ENTI).
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                When I was just 15 years old, I started the{" "}
                <strong className="text-sage-700">Schuylkill Haven Community Garden</strong> with nothing
                more than an idea and a shovel. Since then, I&apos;ve been on a mission to better my community
                through various projects and organizations, and I discovered early on that great ideas often
                go unfunded simply because of imperfect grant writing.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                Through my coursework, I&apos;ve written a community profile, a critical needs assessment,
                and three grants, each building real-world expertise:
              </p>

              <ul className="space-y-3 mb-5">
                {[
                  { icon: "🎓", text: "A capstone grant for creating a CED alumni network at Penn State." },
                  { icon: "🌍", text: "A grant for the CYEC (Children and Youth Empowerment Centre) in Nyeri, Kenya." },
                  { icon: "🌱", text: "A $1,000 grant successfully secured from the Whole Kids Foundation at just 16 years old." },
                ].map((item) => (
                  <li key={item.text} className="flex gap-3 bg-sage-50 rounded-xl p-3 border border-sage-100">
                    <span className="text-lg shrink-0">{item.icon}</span>
                    <span className="text-gray-600 text-sm leading-relaxed">{item.text}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-600 leading-relaxed mb-6">
                I&apos;ve worked one-on-one with community members and organizations to identify their critical
                need areas and develop successful, sustainable projects. Community Needs Navigator is the
                direct result of that experience, combining my academic expertise with AI to make expert
                grant feedback accessible to every organization that needs it.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {["CED at Penn State", "Corporate Social Responsibility", "International Agriculture", "Entrepreneurship & Innovation", "Grant Writing", "Community Development"].map((tag) => (
                  <span key={tag} className="bg-sage-100 text-sage-700 text-xs font-medium px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <Link href="/how-it-works" className="btn-primary">
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Photos */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="section-heading">Rooted in Community</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                My approach to community development is hands-on. From launching the Schuylkill Haven
                Community Garden at 15, to partnering with organizations in Kenya, I believe in
                showing up, getting your hands dirty, and building alongside the people you serve.
              </p>
              <p className="text-gray-600 leading-relaxed">
                That same ethos drives Community Needs Navigator. It&apos;s not just a tool, it&apos;s a
                partner in your mission to create lasting positive change.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
                <Image src="/images/community.jpg" alt="Hannah working with the community garden" fill className="object-cover" />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-md mt-8">
                <Image src="/images/outdoor.jpg" alt="Hannah at the community garden" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pitch Video */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading">Hear From Me Directly</h2>
          <p className="text-gray-500 mb-8">
            Watch my pitch to learn why I built Community Needs Navigator and what makes it different.
          </p>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.youtube.com/embed/_5Xlr4sCAmU"
              title="Community Needs Navigator Pitch — Hannah Burke"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
