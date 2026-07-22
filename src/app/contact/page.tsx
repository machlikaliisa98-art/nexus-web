export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-32">
        <p
          className="uppercase tracking-[0.4em] text-sm text-blue-400"
          style={{ fontFamily: "Arial" }}
        >
          CONTACT
        </p>

        <h1
          className="mt-6 text-5xl md:text-7xl leading-tight"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          Let's Build the
          <br />
          Future Together
        </h1>

        <p
          className="mt-10 max-w-4xl text-xl leading-10 text-gray-300"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          Whether you're exploring a partnership, interested in our
          research, seeking enterprise AI solutions, or considering a
          career at Nexus Inc., we'd love to hear from you.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 pb-32 lg:grid-cols-2">

        {/* Contact Information */}

        <div>

          <h2
            className="mb-10 text-4xl"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Contact Information
          </h2>

          <div className="space-y-8">

            <div>
              <h3 className="text-blue-400 uppercase tracking-wider">
                Headquarters
              </h3>

              <p className="mt-2 leading-8 text-gray-300">
                Nexus Inc. Limited
                <br />
                Norrsken House
                <br />
                1 KN 78 St
                <br />
                Kigali, Rwanda
              </p>
            </div>

            <div>
              <h3 className="text-blue-400 uppercase tracking-wider">
                Email
              </h3>

              <p className="mt-2 text-gray-300">
                info@nexusinc.ai
              </p>
            </div>

            <div>
              <h3 className="text-blue-400 uppercase tracking-wider">
                Partnerships
              </h3>

              <p className="mt-2 text-gray-300">
                partnerships@nexusinc.ai
              </p>
            </div>

            <div>
              <h3 className="text-blue-400 uppercase tracking-wider">
                Careers
              </h3>

              <p className="mt-2 text-gray-300">
                careers@nexusinc.ai
              </p>
            </div>

          </div>

        </div>

        {/* Contact Form */}

        <div className="rounded-3xl border border-white/10 bg-white/5 p-10">

          <h2
            className="mb-8 text-3xl"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Send Us a Message
          </h2>

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-xl border border-white/10 bg-[#0b1022] px-5 py-4 outline-none focus:border-blue-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border border-white/10 bg-[#0b1022] px-5 py-4 outline-none focus:border-blue-500"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-xl border border-white/10 bg-[#0b1022] px-5 py-4 outline-none focus:border-blue-500"
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              className="w-full rounded-xl border border-white/10 bg-[#0b1022] px-5 py-4 outline-none focus:border-blue-500"
            ></textarea>

            <button
              type="submit"
              className="rounded-full bg-blue-600 px-8 py-4 transition hover:bg-blue-500"
            >
              Send Message
            </button>

          </form>

        </div>

      </section>
    </main>
  );
}