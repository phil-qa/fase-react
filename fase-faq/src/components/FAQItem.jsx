import React from 'react';

const FAQItem = ({ item, isOpen, toggleOpen }) =>
{
    const getUrl = (ref) =>
    {
        if (ref.type === "local")
        {
            // For local files, we'll use the basename of the URL
            const basename = ref.url.split('/').pop();
            return `${process.env.PUBLIC_URL}/${basename}`;
        }
        return ref.url;
    };

    return (
        <div className="faq-item">
            <div className="faq-question" onClick={toggleOpen}>
                <span>{item.question}</span>
                <span>{isOpen ? '▲' : '▼'}</span>
            </div>
            {isOpen && (
                <div className="faq-answer">
                    <div className="faq-answer-text">
                        {item.answer.map((section, index) => (
                            <p key={index}>{section.section}</p>
                        ))}
                    </div>
                    {item.references && item.references.length > 0 && (
                        <div className="faq-references">
                            <p>References:</p>
                            <ul className="faq-references-list">
                                {item.references.map((ref, index) => (
                                    <li key={index}>
                                        <a
                                            href={getUrl(ref)}
                                            className="faq-link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {ref.label}
                                            {ref.type === "external" && " ↗"}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default FAQItem;