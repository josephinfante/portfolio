export const handleEmailClick = () => {
    const emailAddress = 'josephinfante.y@gmail.com';
    const subject = 'Inquiry from Your Portfolio';
    const body = 'Hello,\n\nI visited your portfolio page and would like to discuss potential opportunities. Please get back to me at your earliest convenience.\n\nBest regards,\n\n[Your Name]';

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
};