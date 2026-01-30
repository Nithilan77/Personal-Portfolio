import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: "Hybrid RAG Based Multilingual Document Scanner and Explainer",
        description: "A full-stack application that scans documents via the browser, uses AI to extract text, searches a legal knowledge base, and provides simplified explanations in local languages.",
        tags: ["React", "Node.js", "FastAPI", "Gemini OCR API", "ChromaDB"],
        link: "https://github.com/Nithilan77/Document-Scanner"
    },

    {
        id: 2,
        title: "Voice-Activated AI VR World Tour",
        description: "An immersive web application that enables users to explore global landmarks through VR scenes, powered by AI-generated explanations and voice interaction.",
        tags: ["Node.js", "A-Frame (WebVR)", "Google Gemini API"],
        link: "https://github.com/Nithilan77/vr-world-tour"
    },
    {
        id: 3,
        title: "Task Management & To-Do Application",
        description: "A desktop-based task management system designed for efficient task tracking with persistent storage and clean architectural design.",
        tags: ["Java", "JavaFX", "Hibernate", "Oracle Database"],
        link: "https://github.com/Nithilan77/Task_Management_And_To_Do_Application"
    },
    {
        id: 4,
        title: "Student Result Management System",
        description: "A full-stack web application that automates student result processing, role-based access, and performance analytics for academic institutions.",
        tags: ["Python", "Flask", "SQLite", "Bootstrap"],
        link: "https://github.com/Nithilan77/Student-Result-Management"
    },
    {
        id: 5,
        title: "Hotel Reservation Management System",
        description: "A web-based reservation system that manages bookings, cancellations, and waitlists with admin and user workflows.",
        tags: ["C", "CGI", "HTML", "File-Based Storage"],
        link: "https://github.com/Nithilan77/SDP-Table-Reservation-System"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    style={{
                        fontSize: '2.5rem',
                        marginBottom: 'var(--spacing-xl)',
                        color: 'var(--accent-primary)'
                    }}
                >
                    Featured Projects
                </motion.h2>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: 'var(--spacing-lg)'
                }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            style={{
                                flex: '1 1 300px',
                                maxWidth: '400px',
                                background: 'var(--bg-secondary)',
                                padding: 'var(--spacing-lg)',
                                borderRadius: '15px',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}
                        >
                            <h3 style={{ marginBottom: 'var(--spacing-sm)', fontSize: '1.5rem' }}>{project.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-md)' }}>{project.description}</p>
                            <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap', marginBottom: 'var(--spacing-md)' }}>
                                {project.tags.map(tag => (
                                    <span key={tag} style={{
                                        fontSize: '0.8rem',
                                        padding: '4px 8px',
                                        borderRadius: '20px',
                                        background: 'rgba(0, 243, 255, 0.1)',
                                        color: 'var(--accent-primary)'
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <a href={project.link} className="btn" style={{ fontSize: '0.9rem', padding: '8px 16px' }}>View Project</a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
