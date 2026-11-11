
export default function Contact() {
    return (
        <main className="bg-slate-950 text-white min-h-screen">

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 pt-20 pb-12">
                <p className="text-orange-400 font-semibold uppercase tracking-widest">
                    Get in touch
                </p>

                <h1 className="text-4xl md:text-6xl font-bold mt-4">
                    Let's Work <span className="text-orange-500">Together.</span>
                </h1>

                <p className="text-slate-400 text-lg mt-6 max-w-2xl leading-8">
                    Have a project in mind, an opportunity to discuss, or
                    just want to connect? I'd love to hear from you.
                    Drop me a message and let's start a conversation.
                </p>
            </section>

            {/* Contact Section */}
            <section className="max-w-7xl mx-auto px-6 pb-24">
                <div className="grid lg:grid-cols-5 gap-8">

                    {/* Left Contact Information */}
                    <div className="lg:col-span-2 bg-gradient-to-br from-orange-600 to-orange-800 p-8 md:p-10 rounded-3xl relative overflow-hidden">

                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold">
                                Contact Information
                            </h2>

                            <p className="text-orange-100 mt-4 leading-7">
                                Feel free to reach out. I'm always open
                                to discussing new projects, creative ideas
                                and opportunities.
                            </p>

                            <div className="space-y-8 mt-12">

                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <div className="bg-white/20 p-3 rounded-xl">
                                        <svg className="w-6 h-6" fill="none"
                                            stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>

                                    <div>
                                        <p className="text-orange-100 text-sm">Email</p>
                                        <p className="font-semibold mt-1 break-all">
                                           rky881229@gmail.com
                                        </p>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-start gap-4">
                                    <div className="bg-white/20 p-3 rounded-xl">
                                        <svg className="w-6 h-6" fill="none"
                                            stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 21s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11z" />
                                            <circle cx="12" cy="10" r="2.5" strokeWidth="2" />
                                        </svg>
                                    </div>

                                    <div>
                                        <p className="text-orange-100 text-sm">Location</p>
                                        <p className="font-semibold mt-1">
                                            Bengaluru, India
                                        </p>
                                    </div>
                                </div>

                                {/* Availability */}
                                <div className="flex items-start gap-4">
                                    <div className="bg-white/20 p-3 rounded-xl">
                                        <svg className="w-6 h-6" fill="none"
                                            stroke="currentColor" viewBox="0 0 24 24">
                                            <circle cx="12" cy="12" r="9" strokeWidth="2" />
                                            <path strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 7v5l3 2" />
                                        </svg>
                                    </div>

                                    <div>
                                        <p className="text-orange-100 text-sm">Availability</p>
                                        <p className="font-semibold mt-1">
                                            Open to opportunities
                                        </p>
                                    </div>
                                </div>

                            </div>

                            {/* Social Links */}
                            <div className="mt-14">
                                <p className="font-semibold mb-4">
                                    Connect with me
                                </p>

                                <div className="flex gap-4">
                                    <a
                                        href="https://www.linkedin.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="bg-white/20 hover:bg-white hover:text-orange-700 p-3 rounded-xl transition"
                                        aria-label="LinkedIn"
                                    >
                                        <svg className="w-6 h-6" fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM8.5 18H6V9h2.5zM7.25 7.75a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM18 18h-2.5v-4.5c0-1.1-.4-1.8-1.3-1.8-.7 0-1.1.5-1.3 1-.1.2-.1.5-.1.8V18h-2.5V9h2.5v1.3c.4-.6 1-1.5 2.4-1.5 1.8 0 2.8 1.2 2.8 3.5z" />
                                        </svg>
                                    </a>

                                    <a
                                        href="https://github.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="bg-white/20 hover:bg-white hover:text-orange-700 p-3 rounded-xl transition"
                                        aria-label="GitHub"
                                    >
                                        <svg className="w-6 h-6" fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path d="M12 .8a11.2 11.2 0 00-3.54 21.82c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.51-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.62 1.23 3.26.94.1-.73.4-1.23.71-1.51-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.16-2.99-.12-.29-.5-1.42.11-2.95 0 0 .95-.3 3.08 1.14a10.7 10.7 0 015.6 0c2.13-1.44 3.08-1.14 3.08-1.14.61 1.53.23 2.66.11 2.95.72.78 1.16 1.77 1.16 2.99 0 4.29-2.62 5.23-5.11 5.51.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.77.54A11.2 11.2 0 0012 .8z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Circle */}
                        <div className="absolute -bottom-24 -right-20 w-64 h-64 rounded-full border-[35px] border-white/10" />
                    </div>

                    {/* Right Contact Form */}
                    <div className="lg:col-span-3 bg-slate-900 border border-slate-800 p-8 md:p-10 rounded-3xl">

                        <h2 className="text-3xl font-bold">
                            Send Me a Message
                        </h2>

                        <p className="text-slate-400 mt-3 mb-8">
                            Fill out the form below and I'll get back to you.
                        </p>

                        <form
                            onSubmit={(e) => {
                                e.preventDefault()
                                alert("Thank you for reaching out! Please connect with me through email.")
                            }}
                            className="space-y-6"
                        >

                            <div className="grid md:grid-cols-2 gap-6">

                                <div>
                                    <label htmlFor="name"
                                        className="block text-sm font-medium text-slate-300 mb-2">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Enter your name"
                                        required
                                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email"
                                        className="block text-sm font-medium text-slate-300 mb-2">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        required
                                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
                                    />
                                </div>

                            </div>

                            <div>
                                <label htmlFor="subject"
                                    className="block text-sm font-medium text-slate-300 mb-2">
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="What would you like to discuss?"
                                    required
                                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
                                />
                            </div>

                            <div>
                                <label htmlFor="message"
                                    className="block text-sm font-medium text-slate-300 mb-2">
                                    Your Message
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Write your message here..."
                                    required
                                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="inline-flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-xl transition duration-300 hover:shadow-lg hover:shadow-orange-600/20"
                            >
                                Send Message

                                <svg className="w-5 h-5" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 12h14m-7-7l7 7-7 7" />
                                </svg>
                            </button>

                        </form>
                    </div>

                </div>
            </section>
        </main>
    )
}
