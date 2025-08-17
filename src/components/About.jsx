import React from 'react'
import { motion } from 'framer-motion'
import { Construction, Shield, Users, Award, Target, Heart } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Shield,
      title: 'Qualidade Garantida',
      description: 'Utilizamos os mais rigorosos padrões de qualidade em todos os nossos projetos rodoviários.'
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Profissionais altamente qualificados com décadas de experiência em engenharia rodoviária.'
    },
    {
      icon: Award,
      title: 'Reconhecimento',
      description: 'Múltiplos prêmios e certificações que comprovam nossa excelência no setor.'
    },
    {
      icon: Target,
      title: 'Precisão',
      description: 'Projetos executados com precisão técnica e dentro dos prazos estabelecidos.'
    },
    {
      icon: Heart,
      title: 'Compromisso Social',
      description: 'Desenvolvemos infraestrutura que conecta pessoas e impulsiona o desenvolvimento regional.'
    },
    {
      icon: Construction,
      title: 'Inovação',
      description: 'Sempre na vanguarda das tecnologias de construção e materiais rodoviários.'
    }
  ]

  const achievements = [
    { number: '500+', label: 'Projetos Entregues' },
    { number: '25', label: 'Anos de Mercado' },
    { number: '1000+', label: 'Km Construídos' },
    { number: '50+', label: 'Municípios Atendidos' }
  ]

  return (
    <section id="about" className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23334155" fill-opacity="0.4" fill-rule="evenodd"/%3E%3C/svg%3E')]"></div>
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
            <span className="font-medium">Sobre a RodoviasBR</span>
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-6xl font-bold text-secondary-800 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Construindo Conectividade
            <span className="block text-gradient-primary">
              Há Mais de 25 Anos
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-secondary-600 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Somos uma empresa líder em construção de rodovias no Brasil, especializada em 
            projetos de infraestrutura de grande porte. Nossa missão é conectar pessoas, 
            cidades e regiões através de rodovias seguras, duráveis e sustentáveis.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-3xl font-bold text-secondary-800 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Nossa História e Expertise
            </motion.h3>

            <motion.p
              className="text-lg text-secondary-600 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Fundada em 1998, a RodoviasBR nasceu com o objetivo de revolucionar 
              o setor de construção rodoviária no país. Ao longo de mais de duas 
              décadas, consolidamos nossa posição como referência em qualidade e inovação.
            </motion.p>

            <motion.p
              className="text-lg text-secondary-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Nossa equipe é composta por engenheiros, arquitetos e técnicos especializados, 
              que trabalham com as mais modernas tecnologias de construção, sempre 
              priorizando a sustentabilidade e o impacto positivo nas comunidades.
            </motion.p>

            {/* Achievements */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  className="text-center bg-white rounded-lg p-6 shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl font-bold text-gradient-primary mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-secondary-600 font-medium">
                    {achievement.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Main Visual Element */}
              <motion.div
                className="bg-gradient-primary rounded-2xl p-8 text-white relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <Construction className="w-16 h-16 text-accent-500 mb-6" />
                  <h4 className="text-2xl font-bold mb-4">
                    Compromisso com a Excelência
                  </h4>
                  <p className="text-lg opacity-90 leading-relaxed">
                    Cada projeto é executado seguindo rigorosos padrões internacionais 
                    de qualidade, garantindo durabilidade e segurança para gerações.
                  </p>
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-xl"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Award className="w-8 h-8 text-accent-500" />
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 bg-accent-500 rounded-xl p-4 shadow-xl"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <Target className="w-8 h-8 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-3xl font-bold text-center text-secondary-800 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Nossos Valores e Diferenciais
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={value.title}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  <div className="bg-primary-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-primary-600" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-secondary-800 mb-3">
                    {value.title}
                  </h4>
                  
                  <p className="text-secondary-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}