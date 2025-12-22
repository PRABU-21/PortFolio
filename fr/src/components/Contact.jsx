import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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
    setSubmitStatus(null);
    
    try {
      // Using EmailJS to send emails directly from the client
      // This is a simple solution that doesn't require a backend
      const mailtoLink = `mailto:prabakarancodes@gmail.com?subject=${encodeURIComponent(formData.subject || `Message from ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`)}`;
      
      window.location.href = mailtoLink;
      
      // Reset form after successful submission
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitStatus({ type: 'success', message: 'Opening your email client...' });
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'rgb(189, 177, 111)' }}>
            Get In Touch
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto" style={{ color: 'rgba(189, 177, 111, 0.8)' }}>
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(189, 177, 111)' }}>Contact Information</h3>
              <p className="mb-6" style={{ color: 'rgba(189, 177, 111, 0.8)' }}>
                I'm always open to discussing new opportunities, creative projects, or just having a chat about technology.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mt-1 mr-4" style={{ color: 'rgb(189, 177, 111)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium" style={{ color: 'rgb(189, 177, 111)' }}>Email</h4>
                  <p style={{ color: 'rgba(189, 177, 111, 0.8)' }}>prabakarancodes@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4" style={{ color: 'rgb(189, 177, 111)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium" style={{ color: 'rgb(189, 177, 111)' }}>Location</h4>
                  <p style={{ color: 'rgba(189, 177, 111, 0.8)' }}>India</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <h4 className="text-lg font-medium mb-4" style={{ color: 'rgb(189, 177, 111)' }}>Connect with me</h4>
              <div className="flex space-x-4">
                <a
                  href="mailto:prabakarancodes@gmail.com"
                  className="p-3 bg-yellow-900/20 hover:bg-yellow-900/30 rounded-full transition-all duration-300"
                  style={{ color: 'rgb(189, 177, 111)' }}
                  onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'}
                  onMouseOut={(e) => e.currentTarget.style.color = 'rgb(189, 177, 111)'}
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/PRABAKARAN-S-B"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-yellow-900/20 hover:bg-yellow-900/30 rounded-full transition-all duration-300"
                  style={{ color: 'rgb(189, 177, 111)' }}
                  onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'}
                  onMouseOut={(e) => e.currentTarget.style.color = 'rgb(189, 177, 111)'}
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/prabakaransb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-yellow-900/20 hover:bg-yellow-900/30 rounded-full transition-all duration-300"
                  style={{ color: 'rgb(189, 177, 111)' }}
                  onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'}
                  onMouseOut={(e) => e.currentTarget.style.color = 'rgb(189, 177, 111)'}
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a
                  href="https://wa.me/7010384271"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-yellow-900/20 hover:bg-yellow-900/30 rounded-full transition-all duration-300"
                  style={{ color: 'rgb(189, 177, 111)' }}
                  onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'}
                  onMouseOut={(e) => e.currentTarget.style.color = 'rgb(189, 177, 111)'}
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.480-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-medium mb-2" style={{ color: 'rgb(189, 177, 111)' }}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Your name"
                  style={{ color: 'rgb(189, 177, 111)' }}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block font-medium mb-2" style={{ color: 'rgb(189, 177, 111)' }}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                  style={{ color: 'rgb(189, 177, 111)' }}
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block font-medium mb-2" style={{ color: 'rgb(189, 177, 111)' }}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="What is this regarding?"
                  style={{ color: 'rgb(189, 177, 111)' }}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block font-medium mb-2" style={{ color: 'rgb(189, 177, 111)' }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Your message here..."
                  style={{ color: 'rgb(189, 177, 111)' }}
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                  isSubmitting 
                    ? 'cursor-not-allowed' 
                    : 'hover:scale-[1.02]'
                } text-black font-bold`}
                style={{ 
                  backgroundColor: isSubmitting ? 'rgb(161, 149, 85)' : 'rgb(189, 177, 111)',
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus && (
                <div className={`p-4 rounded-lg ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-900/30 text-green-400 border border-green-800' 
                    : 'bg-red-900/30 text-red-400 border border-red-800'
                }`}>
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;