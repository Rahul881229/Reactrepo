
import { Link } from 'react-router-dom'

export default function Home() {
    const skills = [
        "Java", "Spring Boot", "Microservices",
        "Hibernate", "React.js", "Angular",
        "JavaScript", "HTML5", "CSS3",
        "SCSS", "SQL", "MySQL",
        "MongoDB", "Git", "REST APIs"
    ]

    const expertise = [
        {
            title: "Backend Development",
            description: "Building backend applications and REST APIs using Java, Spring Boot, Hibernate and microservices architecture.",
            icon: "⚙️"
        },
        {
            title: "Frontend Development",
            description: "Creating responsive and reusable user interfaces using React, Angular, JavaScript, HTML, CSS and SCSS.",
            icon: "💻"
        },
        {
            title: "Database & Integration",
            description: "Working with SQL, MySQL, MongoDB and integrating frontend applications with backend services.",
            icon: "🗄️"
        }
    ]

    return (
        <main className="bg-slate-950 text-white">

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <div>
                        <p className="text-orange-400 font-semibold tracking-widest uppercase mb-4">
                            Hello, I'm
                        </p>

                        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                            Rahul <span className="text-orange-500">Kumar.</span>
                        </h1>

                        <h2 className="text-2xl md:text-3xl text-slate-300 mt-5">
                            Full Stack Developer
                        </h2>

                        <p className="text-slate-400 text-lg leading-8 mt-6 max-w-xl">
                            I build scalable backend applications and modern
                            web interfaces. I enjoy solving problems,
                            learning new technologies and turning ideas
                            into practical software solutions.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-9">
                            <Link
                                to="/about"
                                className="bg-orange-600 hover:bg-orange-700 px-7 py-3 rounded-lg font-semibold transition"
                            >
                                More About Me →
                            </Link>

                            <a
                                href="https://www.linkedin.com/in/rahul-kumar-966283266/"
                                target="_blank"
                                rel="noreferrer"
                                className="border border-slate-600 hover:border-orange-500 px-7 py-3 rounded-lg font-semibold transition"
                            >
                                LinkedIn ↗
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-orange-500 to-purple-700 p-1">
                            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                                <span className="text-8xl md:text-9xl font-bold text-orange-500">
                                    RK
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* About Section */}
            <section className="bg-slate-900 py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-orange-400 font-semibold uppercase tracking-widest">
                        Get to know me
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold mt-3">
                        About Me
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 mt-10">
                        <p className="text-slate-400 text-lg leading-8">
                            I'm a Full Stack Developer with a B.Tech degree
                            in Electronics and Communication Engineering.
                            My development journey focuses on building
                            reliable backend services and interactive
                            frontend applications.
                        </p>

                        <p className="text-slate-400 text-lg leading-8">
                            I currently work at Trinity Mobility, where I
                            contribute to application development and
                            integration. I'm also continuously improving
                            my React and full-stack development skills.
                        </p>
                    </div>
                </div>
            </section>

            {/* Expertise Section */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <p className="text-orange-400 font-semibold uppercase tracking-widest">
                    What I do
                </p>

                <h2 className="text-3xl md:text-4xl font-bold mt-3">
                    My Expertise
                </h2>

                <div className="grid md:grid-cols-3 gap-7 mt-12">
                    {expertise.map((item) => (
                        <div
                            key={item.title}
                            className="bg-slate-900 border border-slate-800 hover:border-orange-500 p-8 rounded-2xl transition"
                        >
                            <div className="text-4xl mb-6">
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-bold mb-4">
                                {item.title}
                            </h3>

                            <p className="text-slate-400 leading-7">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Skills Section */}
            <section className="bg-slate-900 py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-orange-400 font-semibold uppercase tracking-widest">
                        My technical stack
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold mt-3">
                        Technologies I Work With
                    </h2>

                    <div className="flex flex-wrap gap-4 mt-10">
                        {skills.map((skill) => (
                            <span
                                key={skill}
                                className="px-6 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-200 hover:border-orange-500 hover:text-orange-400 transition"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <p className="text-orange-400 font-semibold uppercase tracking-widest">
                    My journey
                </p>

                <h2 className="text-3xl md:text-4xl font-bold mt-3">
                    Professional Experience
                </h2>

                <div className="mt-10 border-l-2 border-orange-500 pl-8 relative">
                    <div className="absolute w-4 h-4 bg-orange-500 rounded-full -left-[9px] top-1" />

                    <p className="text-orange-400 font-semibold">
                        MARCH 2025 – Present
                    </p>

                    <h3 className="text-2xl font-bold mt-3">
                        Full Stack Developer
                    </h3>

                    <p className="text-slate-300 mt-2">
                        Trinity Mobility
                    </p>

                    <p className="text-slate-400 leading-8 mt-5 max-w-3xl">
                        Working on application development, smart data
                        solutions and web-based components. Contributing
                        to modules including Smart Data Module,
                        Query Configuration Component, Smart Data Model
                        and Ontology.
                    </p>

                    <div className="flex flex-wrap gap-3 mt-5">
                        {["Java", "Spring Boot", "Angular", "React", "SQL", "Web Components"].map((tech) => (
                            <span
                                key={tech}
                                className="text-sm bg-slate-800 text-slate-300 px-4 py-2 rounded-md"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="bg-gradient-to-r from-orange-700 to-orange-600 py-20">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold">
                        Let's Build Something Together
                    </h2>

                    <p className="text-orange-100 mt-6 text-lg">
                        Interested in technology, collaboration or
                        discussing development opportunities?
                        Let's connect.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mt-9">
                        <a
                            href="https://www.linkedin.com/in/rahul-kumar-966283266/"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-white text-orange-700 px-7 py-3 rounded-lg font-semibold hover:bg-slate-100 transition"
                        >
                            Connect on LinkedIn
                        </a>

                        <a
                            href="https://github.com/Rahul881229"
                            target="_blank"
                            rel="noreferrer"
                            className="border border-white text-white px-7 py-3 rounded-lg font-semibold hover:bg-orange-800 transition"
                        >
                            View GitHub
                        </a>
                    </div>
                </div>
            </section>

        </main>
    )
}
