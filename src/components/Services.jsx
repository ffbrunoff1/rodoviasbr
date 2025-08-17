import React from 'react'
import { motion } from 'framer-motion'
import { Construction, Truck, Map, Shield, Check, Star } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Construction,
      title: 'Construção de Rodovias',
      description: 'Projetos completos de construção rodoviária, desde o planejamento até a entrega final.',
      features: [
        'Estudos de viabilidade técnica',
        'Terraplanagem e drenagem',
        'Pavimentação asfáltica',
        'Sinalização e segurança'
      ],
      highlight: 'Mais Procurado'
    },
    {
      icon: Truck,
      title: 'Manutenção e Conservação',
      description: 'Serviços especializados para manter a qualidade e durabilidade das rodovias existentes.',
      features: [
        'Manutenção preventiva',
        'Recapeamento asfáltico',
        'Reparo de pavimentos',
        'Limpeza e conservação'
      ],
      highlight: 'Essencial'
    },
    {
      icon: Map,
      title: 'Projetos e Consultoria',
      description: 'Desenvolvimento de projetos executivos e consultoria técnica especializada.',
      features: [
        'Projetos geométricos',
        'Estudos de impacto',
        'Licenciamento ambiental',
        'Consultoria técnica'
      ],
      highlight: 'Especializado'
    },
    {
      icon: Shield,
      title: 'Segurança Rodoviária',
      description: 'Implementação de sistemas de segurança e sinalização para rodovias.',
      features: [
        'Sistemas de proteção',
        'Sinalização vertical e horizontal',
        'Iluminação rodoviária',
        'Barreiras de contenção'
      ],
      highlight: 'Inovador'
    }
  ]

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center bg-primary-100 text-primary-600 rounded-full px-6 py-3 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Construction className="w-5 h-5 mr-2" />
            <span className="font-medium">Nossos Serviços</span>
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-6xl font-bold text-secondary-800 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Soluções Completas em
            <span className="block text-gradient-primary">
              Infraestrutura Rodoviária
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-secondary-600 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Oferecemos um portfólio completo de serviços especializados em construção 
            e manutenção rodoviária, sempre com foco na qualidade, segurança e sustentabilidade.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.title}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Highlight Badge */}
                <motion.div
                  className="absolute top-6 right-6 bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {service.highlight}
                </motion.div>

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="bg-gradient-primary w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <motion.h3
                    className="text-2xl font-bold text-secondary-800 mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {service.title}
                  </motion.h3>

                  <motion.p
                    className="text-secondary-600 mb-6 leading-relaxed"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {service.description}
                  </motion.p>

                  {/* Features List */}
                  <motion.div
                    className="space-y-3 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.7 + index * 0.1 + featureIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <div className="bg-primary-100 w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <Check className="w-4 h-4 text-primary-600" />
                        </div>
                        <span className="text-secondary-700 text-sm font-medium">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* CTA Button */}
                  <motion.button
                    onClick={scrollToContact}
                    className="w-full bg-secondary-800 text-white py-3 px-6 rounded-lg font-semibold hover:bg-secondary-900 transition-colors duration-300 group-hover:bg-primary-600 mt-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Solicitar Orçamento
                  </motion.button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="bg-gradient-primary rounded-2xl p-8 lg:p-12 text-white text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div
              className="flex items-center justify-center mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Star className="w-8 h-8 text-accent-500 mr-2" />
              <Star className="w-10 h-10 text-accent-500 mr-2" />
              <Star className="w-8 h-8 text-accent-500" />
            </motion.div>

            <motion.h3
              className="text-3xl lg:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Pronto para Iniciar Seu Projeto?
            </motion.h3>

            <motion.p
              className="text-xl opacity-90 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Entre em contato conosco e descubra como podemos transformar 
              suas ideias em realidade com nossa expertise em construção rodoviária.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={scrollToContact}
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Solicitar Orçamento Gratuito
              </motion.button>

              <motion.button
                onClick={scrollToContact}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Falar com Especialista
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}