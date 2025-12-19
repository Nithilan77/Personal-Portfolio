import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaFileAlt, FaWhatsapp } from 'react-icons/fa';

const Home = () => {
    return (
        <section id="home" className="section" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            background: 'radial-gradient(circle at center, var(--bg-secondary) 0%, var(--bg-primary) 100%)',
            padding: 'var(--spacing-xl) 0'
        }}>
            <div className="container" style={{ width: '100%' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 'var(--spacing-xl)',
                    alignItems: 'center'
                }}>
                    {/* Left Side - Hero Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ textAlign: 'center' }}
                    >
                        <div style={{
                            width: '200px',
                            height: '200px',
                            margin: '0 auto var(--spacing-lg)',
                            borderRadius: '50%',
                            padding: '5px',
                            background: 'linear-gradient(45deg, var(--accent-primary), var(--accent-secondary))',
                        }}>
                            <img
                                src="/1000018047.jpg"
                                alt="Nithilan S"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '50%',
                                    border: '4px solid var(--bg-secondary)'
                                }}
                            />
                        </div>

                        <h2 style={{
                            color: 'var(--accent-primary)',
                            fontFamily: 'var(--font-mono)',
                            marginBottom: 'var(--spacing-md)'
                        }}>

                        </h2>
                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 5rem)',
                            fontWeight: '800',
                            lineHeight: '1.1',
                            marginBottom: 'var(--spacing-md)'
                        }}>
                            <span className="gradient-text">Nithilan S</span>
                        </h1>
                        <h3 style={{
                            fontSize: 'clamp(1.2rem, 2.5vw, 2rem)',
                            color: 'var(--text-secondary)',
                            marginBottom: 'var(--spacing-lg)'
                        }}>
                            AI & ML Enthusiast
                        </h3>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: 'var(--spacing-md)'
                            }}
                        >
                            <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
                                <a href="#projects" className="btn">View My Work</a>
                                <a href="/resume.pdf" target="_blank" className="btn" style={{ background: 'transparent', borderColor: 'var(--text-secondary)', color: 'var(--text-secondary)' }}>
                                    <FaFileAlt style={{ marginRight: '8px' }} /> Resume
                                </a>
                            </div>

                            <div style={{ display: 'flex', gap: 'var(--spacing-md)', marginTop: 'var(--spacing-sm)' }}>
                                <a href="https://github.com/Nithilan77" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', transition: 'color 0.3s' }} className="social-icon">
                                    <FaGithub />
                                </a>
                                <a href="https://www.linkedin.com/in/nithilan-s-4496a6318/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', transition: 'color 0.3s' }} className="social-icon">
                                    <FaLinkedin />
                                </a>
                                <a href="https://www.instagram.com/nithilan__.437?igsh=bmg0aWtybXN5ZzBn" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', transition: 'color 0.3s' }} className="social-icon">
                                    <FaInstagram />
                                </a>
                                <a href="https://wa.me/919677151456" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', transition: 'color 0.3s' }} className="social-icon">
                                    <FaWhatsapp />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - About Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{
                            background: 'rgba(255, 255, 255, 0.03)',
                            padding: 'var(--spacing-lg)',
                            borderRadius: '20px',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)'
                        }}
                    >
                        <h2 style={{
                            fontSize: '2rem',
                            marginBottom: 'var(--spacing-md)',
                            color: 'var(--accent-secondary)'
                        }}>
                            About Me
                        </h2>
                        <div style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                            <p style={{ marginBottom: 'var(--spacing-md)', fontSize: '1.05rem' }}>
                                I am a second-year IT student at <strong style={{ color: 'var(--text-primary)' }}>Sri Sivasubramaniya Nadar College of Engineering, Chennai</strong>.
                                My interests are majorly aligned towards <strong style={{ color: 'var(--accent-primary)' }}>Artificial Intelligence and Machine Learning</strong> and related technologies.
                            </p>

                            <div style={{ marginTop: 'var(--spacing-lg)' }}>
                                <h3 style={{ color: 'var(--accent-secondary)', marginBottom: 'var(--spacing-sm)', fontSize: '1.1rem' }}>Education</h3>
                                <ul style={{ listStyle: 'none' }}>
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
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
// Updated social links
export default Home;
