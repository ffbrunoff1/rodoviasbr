import React from 'react'
import { motion } from 'framer-motion'
import { Construction, Mail, Phone, Heart } from 'lucide-react'

export default function Footer() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const footerLinks = {
    empresa: [
      { name: 'Sobre Nós', href: '#about' },
      { name: 'Nossos Serviços', href: '#services' },
      { name: 'Projetos', href: '#about' },
      { name: 'Contato', href: '#contact' }
    ],
    servicos: [
      { name: 'Construção de Rodovias', href: '#services' },
      { name: 'Manutenção Rodoviária', href: '#services' },
      { name: 'Projetos e Consultoria', href: '#services' },
      { name: 'Segurança Rodoviária', href: '#services' }
    ],
    contato: [
      { name: 'contato@rodoviasbr.com.br', href: '#contact', icon: Mail },
      { name: '+55 (11) 9999-9999', href: '#contact', icon: Phone }
    ]
  }

  return (
    <footer className="bg-secondary-900 text-white relative overflow-hidden pb-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="pt-16 pb-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Logo */}
              <motion.div 
                className="flex items-center space-x-3 mb-6 cursor-pointer"
                onClick={() => scrollToSection('#hero')}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-2 rounded-lg bg-primary-600 shadow-lg">
                  <Construction className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    RodoviasBR
                  </h3>
                  <p className="text-sm text-gray-300">
                    Construção de Rodovias
                  </p>
                </div>
              </motion.div>

              <motion.p
                className="text-gray-300 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Especialistas em construção de rodovias há mais de 25 anos, 
                conectando pessoas e transformando infraestruturas com qualidade e inovação.
              </motion.p>

              <motion.div
                className="flex items-center text-accent-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Heart className="w-5 h-5 mr-2" />
                <span className="text-sm">
                  Construindo o futuro do Brasil
                </span>
              </motion.div>
            </motion.div>

            {/* Quick Links - Empresa */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold mb-6 text-white">
                Empresa
              </h4>
              <ul className="space-y-3">
                {footerLinks.empresa.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-accent-500 transition-colors duration-300 hover:underline"
                    >
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Links - Serviços */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold mb-6 text-white">
                Serviços
              </h4>
              <ul className="space-y-3">
                {footerLinks.servicos.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-accent-500 transition-colors duration-300 hover:underline"
                    >
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold mb-6 text-white">
                Entre em Contato
              </h4>
              <div className="space-y-4">
                {footerLinks.contato.map((contact, index) => {
                  const IconComponent = contact.icon
                  return (
                    <motion.button
                      key={contact.name}
                      onClick={() => scrollToSection(contact.href)}
                      className="flex items-center text-gray-300 hover:text-accent-500 transition-colors duration-300 group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="bg-primary-600 w-10 h-10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-accent-500 transition-colors duration-300">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm">
                        {contact.name}
                      </span>
                    </motion.button>
                  )
                })}
              </div>

              {/* CTA Button */}
              <motion.button
                onClick={() => scrollToSection('#contact')}
                className="mt-6 w-full bg-gradient-primary text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Solicitar Orçamento
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-700 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              className="text-gray-400 text-sm mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              © {new Date().getFullYear()} RodoviasBR. Todos os direitos reservados.
            </motion.p>

            <motion.div
              className="flex items-center text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <span>Criado com</span>
              <Heart className="w-4 h-4 mx-1 text-red-500" />
              <span>por</span>
              <a 
                href="https://papum.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-1 italic text-accent-500 hover:text-accent-400 transition-colors duration-300"
              >
                Papum
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}