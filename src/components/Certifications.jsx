import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Try to import data, handle if missing
let certificationsData = {};
try {
    // @ts-ignore
    certificationsData = await import('../data/certifications.json').then(m => m.default);
} catch (e) {
    console.warn("Certifications data not found. Run 'npm run update-certs'");
}

const Certifications = () => {
    const categories = Object.keys(certificationsData);
    const hasData = categories.length > 0;

    return (
        <section id="certifications" className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    style={{
                        fontSize: '2.5rem',
                        marginBottom: 'var(--spacing-xl)',
                        color: 'var(--accent-secondary)'
                    }}
                >
                    Certifications
                </motion.h2>

                {!hasData ? (
                    <div style={{ textAlign: 'center', color: 'var(--text-secondary)', padding: '2rem' }}>
                        <p>No certifications found.</p>
                        <p style={{ fontSize: '0.9rem', marginTop: '1rem' }}>
                            Add files to <code>public/certifications</code> and run <code>npm run update-certs</code>.
                        </p>
                    </div>
                ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }}>
                        {categories.map((category, catIndex) => (
                            <div key={category}>
                                <motion.h3
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    style={{
                                        fontSize: '1.5rem',
                                        marginBottom: 'var(--spacing-md)',
                                        color: 'var(--text-primary)',
                                        borderBottom: '1px solid var(--accent-glow)',
                                        paddingBottom: '0.5rem',
                                        display: 'inline-block'
                                    }}
                                >
                                    {category}
                                </motion.h3>

                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: 'var(--spacing-md)'
                                }}>
                                    {certificationsData[category].map((cert, index) => (
                                        <motion.div
                                            key={cert.path}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            whileHover={{ y: -5 }}
                                            style={{
                                                flex: '1 1 250px',
                                                maxWidth: '350px',
                                                background: 'rgba(255,255,255,0.03)',
                                                borderRadius: '12px',
                                                overflow: 'hidden',
                                                border: '1px solid rgba(255,255,255,0.05)'
                                            }}
                                        >
                                            {cert.type === 'image' ? (
                                                <div style={{ height: '160px', overflow: 'hidden' }}>
                                                    <img
                                                        src={cert.path}
                                                        alt={cert.name}
                                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                                                        onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
                                                        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                                                    />
                                                </div>
                                            ) : (
                                                <div style={{
                                                    height: '160px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    background: 'rgba(255,0,0,0.1)',
                                                    color: '#ff4444'
                                                }}>
                                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                                        <polyline points="14 2 14 8 20 8"></polyline>
                                                        <line x1="16" y1="13" x2="8" y2="13"></line>
                                                        <line x1="16" y1="17" x2="8" y2="17"></line>
                                                        <polyline points="10 9 9 9 8 9"></polyline>
                                                    </svg>
                                                </div>
                                            )}

                                            <div style={{ padding: '1rem' }}>
                                                <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                                    {cert.name}
                                                </h4>
                                                <a
                                                    href={cert.path}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn"
                                                    style={{
                                                        fontSize: '0.8rem',
                                                        padding: '6px 12px',
                                                        width: '100%',
                                                        textAlign: 'center',
                                                        display: 'block'
                                                    }}
                                                >
                                                    View {cert.type === 'pdf' ? 'PDF' : 'Image'}
                                                </a>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Certifications;
