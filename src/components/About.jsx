import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 style={{
                        fontSize: '2.5rem',
                        marginBottom: 'var(--spacing-lg)',
                        color: 'var(--accent-secondary)'
                    }}>
                        About Me
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-xl)', alignItems: 'center' }}>
                        <div>
                            <p style={{ fontSize: '1.1rem', marginBottom: 'var(--spacing-md)', color: 'var(--text-secondary)' }}>
                                I am a second-year IT student at <strong style={{ color: 'var(--text-primary)' }}>Sri Sivasubramaniya Nadar College of Engineering, Chennai</strong>.
                            </p>

                            <div style={{ marginTop: 'var(--spacing-lg)' }}>
                                <h3 style={{ color: 'var(--accent-secondary)', marginBottom: 'var(--spacing-sm)', fontSize: '1.2rem' }}>Education</h3>
                                <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
                                    <li style={{ marginBottom: 'var(--spacing-md)', paddingLeft: '1rem', borderLeft: '2px solid var(--accent-primary)' }}>
                                        <strong style={{ color: 'var(--text-primary)' }}>B.Tech Information Technology</strong>
                                        <div style={{ fontSize: '0.9rem' }}>Sri Sivasubramaniya Nadar College of Engineering</div>
                                        <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>Present</div>
                                    </li>
                                    <li style={{ paddingLeft: '1rem', borderLeft: '2px solid var(--accent-secondary)' }}>
                                        <strong style={{ color: 'var(--text-primary)' }}>Higher Secondary (11th & 12th)</strong>
                                        <div style={{ fontSize: '0.9rem' }}>Maharishi Vidya Mandir Senior Secondary School, Chetpet</div>
                                        <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>Completed</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div style={{
                            width: '100%',
                            height: '300px',
                            background: 'linear-gradient(45deg, var(--accent-primary), var(--accent-secondary))',
                            borderRadius: '20px',
                            opacity: 0.8
                        }}>
                            <img
                                src="/1000018047.jpg"
                                alt="Profile"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '20px'
                                }}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
