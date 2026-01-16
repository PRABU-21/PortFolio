import { useState } from 'react';
import ScrollFloat from './ScrollFloat';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const mailtoLink = `mailto:prabakarancodes@gmail.com?subject=Message from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`)}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl mx-auto w-full">
        <ScrollFloat
          containerClassName="text-center mb-12"
          textClassName="text-4xl md:text-5xl font-bold text-[#E8E3B1]"
          scrollStart="top bottom-=10%"
          scrollEnd="center center"
        >
          Let's Connect
        </ScrollFloat>

        <p className="text-center text-[#E8E3B1]/80 mb-12 text-lg">
          Let's build something amazing together
        </p>

        {/* Contact Form */}
        <div className="bg-[#000000] border border-neutral-800 rounded-2xl p-8 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-4 bg-neutral-900/50 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-[#E8E3B1] placeholder-[#E8E3B1]/40"
                placeholder="Your Name"
              />
            </div>

            <div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-4 bg-neutral-900/50 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-[#E8E3B1] placeholder-[#E8E3B1]/40"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-4 bg-neutral-900/50 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-[#E8E3B1] placeholder-[#E8E3B1]/40 resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                isSubmitting
                  ? 'bg-amber-600/50 cursor-not-allowed'
                  : 'bg-amber-500 hover:bg-amber-600 hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-500/20'
              } text-black`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {/* Social Links */}
          <div className="mt-8 pt-8 border-t border-neutral-800">
            <p className="text-center text-[#E8E3B1]/60 text-sm mb-4">Or connect with me on</p>
            <div className="flex justify-center space-x-4">
              <a
                href="mailto:prabakarancodes@gmail.com"
                className="p-3 bg-neutral-900/50 hover:bg-amber-500/10 border border-neutral-700 hover:border-amber-500/30 rounded-lg transition-all duration-300 text-[#E8E3B1] hover:text-amber-400"
                title="Email"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                </svg>
              </a>
              <a
                href="https://github.com/PRABU-21"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-neutral-900/50 hover:bg-amber-500/10 border border-neutral-700 hover:border-amber-500/30 rounded-lg transition-all duration-300 text-[#E8E3B1] hover:text-amber-400"
                title="GitHub"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/prabakaransb"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-neutral-900/50 hover:bg-amber-500/10 border border-neutral-700 hover:border-amber-500/30 rounded-lg transition-all duration-300 text-[#E8E3B1] hover:text-amber-400"
                title="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/7010384271"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-neutral-900/50 hover:bg-amber-500/10 border border-neutral-700 hover:border-amber-500/30 rounded-lg transition-all duration-300 text-[#E8E3B1] hover:text-amber-400"
                title="WhatsApp"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.480-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
          