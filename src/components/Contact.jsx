import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 style={{
                        fontSize: '3rem',
                        marginBottom: 'var(--spacing-md)',
                        background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        Get In Touch
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        color: 'var(--text-secondary)',
                        marginBottom: 'var(--spacing-xl)'
                    }}>
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <a href="mailto:nithilan7437@gmail.com" className="btn" style={{ fontSize: '1.2rem', padding: '16px 32px' }}>
                        Say Hello
                    </a>

                    <div style={{ marginTop: 'var(--spacing-xl)', display: 'flex', justifyContent: 'center', gap: 'var(--spacing-lg)' }}>
                        {/* Social links moved to Home section */}
                    </div>
                </motion.div>
            </div>

            <footer style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                textAlign: 'center',
                padding: 'var(--spacing-md)',
                color: 'var(--text-secondary)',
                fontSize: '0.9rem'
            }}>
                © 2025 Nithilan S. Built with React & Vite.
            </footer>
        </section>
    );
};

export default Contact;
