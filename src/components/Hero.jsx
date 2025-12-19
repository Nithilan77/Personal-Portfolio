import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="section hero" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            background: 'radial-gradient(circle at center, var(--bg-secondary) 0%, var(--bg-primary) 100%)'
        }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 style={{
                        color: 'var(--accent-primary)',
                        fontFamily: 'var(--font-mono)',
                        marginBottom: 'var(--spacing-md)'
                    }}>
                        Hello, I'm
                    </h2>
                    <h1 style={{
                        fontSize: 'clamp(3rem, 8vw, 6rem)',
                        fontWeight: '800',
                        lineHeight: '1.1',
                        marginBottom: 'var(--spacing-md)'
                    }}>
                        <span className="gradient-text">Nithilan S</span>
                    </h1>
                    <h3 style={{
                        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                        color: 'var(--text-secondary)',
                        marginBottom: 'var(--spacing-lg)'
                    }}>
                        AI & ML Enthusiast
                    </h3>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <a href="#projects" className="btn">View My Work</a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
