import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  MessageSquare, 
  Settings, 
  TrendingUp, 
  CheckCircle, 
  Instagram, 
  Phone, 
  ArrowRight,
  Menu,
  X,
  Zap,
  Users,
  Clock
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WHATSAPP_LINK = "https://wa.me/558988052209";
const INSTAGRAM_LINK = "https://www.instagram.com/klipchatoficial/";
const LOGO_URL = "https://res.cloudinary.com/dmibs2bbf/image/upload/v1768341812/logo_halupt.jpg";

// Componentes
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-md' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* Logotipo oficial da KlipChat */}
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden shadow-sm border border-white/20">
            <img 
              src={LOGO_URL} 
              alt="KlipChat Logo" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<span class="text-brand font-bold">K</span>';
              }}
            />
          </div>
          <span className={`text-2xl font-extrabold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            klip<span className="text-brand-light">chat</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#inicio" className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-brand' : 'text-white/80 hover:text-white'}`}>Início</a>
          <a href="#servicos" className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-brand' : 'text-white/80 hover:text-white'}`}>Serviços</a>
          <a href="#vantagens" className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-brand' : 'text-white/80 hover:text-white'}`}>Vantagens</a>
          <a 
            href={WHATSAPP_LINK} 
            target="_blank" 
            className="bg-brand text-white px-6 py-2.5 rounded-full font-semibold hover:bg-brand-dark transition-all shadow-lg hover:shadow-brand/40"
          >
            Falar Conosco
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} className={isScrolled ? 'text-gray-900' : 'text-white'} /> : <Menu size={28} className={isScrolled ? 'text-gray-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white w-full border-b"
          >
            <div className="flex flex-col p-6 gap-4 text-gray-800">
              <a href="#inicio" onClick={() => setIsMobileMenuOpen(false)}>Início</a>
              <a href="#servicos" onClick={() => setIsMobileMenuOpen(false)}>Serviços</a>
              <a href="#vantagens" onClick={() => setIsMobileMenuOpen(false)}>Vantagens</a>
              <a href={WHATSAPP_LINK} className="bg-brand text-white p-3 rounded-lg text-center font-bold">WhatsApp</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-dark/20 to-transparent"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-light/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 text-brand-light px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-white/20">
            <Zap size={16} />
            Líder em Automação Inteligente
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 italic">
            Atendimento <span className="text-brand-light">Inteligente</span>, Processos <span className="text-brand-light">Otimizados</span>.
          </h1>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            A KlipChat revoluciona a forma como sua empresa interage com o mundo. 
            Automatizamos tarefas manuais para que sua equipe foque no que realmente importa: resultados.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href={WHATSAPP_LINK}
              className="bg-white text-brand px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-light hover:text-brand-dark transition-all flex items-center gap-2 shadow-xl"
            >
              Começar Agora
              <ArrowRight size={20} />
            </a>
            <a 
              href="#servicos"
              className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:border-white transition-all"
            >
              Ver Soluções
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative animate-float">
             <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center">
                    <MessageSquare className="text-brand" />
                  </div>
                  <div>
                    <div className="h-3 w-32 bg-white/30 rounded-full mb-2"></div>
                    <div className="h-3 w-20 bg-white/20 rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-white text-sm">"Olá! Como posso ajudar com seu atendimento hoje?"</p>
                  </div>
                  <div className="p-4 bg-brand/40 rounded-2xl border border-white/10 ml-8">
                    <p className="text-white text-sm">"Gostaria de automatizar minhas vendas."</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                       <CheckCircle size={14} className="text-brand-light" />
                       <span className="text-brand-light text-xs font-bold uppercase tracking-widest">Processando...</span>
                    </div>
                    <p className="text-white text-sm italic">Otimizando fluxos de trabalho...</p>
                  </div>
                </div>
             </div>
             {/* Decorative elements */}
             <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-light rounded-full blur-2xl opacity-50"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-all group"
  >
    <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-white transition-all">
      <Icon size={32} />
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
    <a href={WHATSAPP_LINK} className="text-brand font-bold flex items-center gap-2 hover:gap-4 transition-all">
      Saiba mais <ArrowRight size={18} />
    </a>
  </motion.div>
);

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Nossas Soluções</h2>
          <p className="text-gray-600 text-lg">Impulsionamos seu negócio através de tecnologia de ponta e automação customizada.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard 
            icon={MessageSquare}
            title="Atendimento Inteligente"
            description="Chatbots avançados que aprendem com o seu negócio para atender clientes 24h por dia com naturalidade."
            delay={0.1}
          />
          <ServiceCard 
            icon={Settings}
            title="Automação de Processos"
            description="Elimine erros humanos e tarefas manuais exaustivas. Automatizamos seus fluxos de trabalho do início ao fim."
            delay={0.2}
          />
          <ServiceCard 
            icon={TrendingUp}
            title="Otimização de Performance"
            description="Análise detalhada de gargalos e implementação de melhorias contínuas para escala máxima do seu negócio."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const benefits = [
    { title: "Escalabilidade Ilimitada", icon: Users },
    { title: "Disponibilidade 24/7", icon: Clock },
    { title: "Redução de Custos", icon: TrendingUp },
    { title: "Integração Completa", icon: Zap }
  ];

  return (
    <section id="vantagens" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-brand rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12"></div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8">Por que escolher a <span className="text-brand-light">KlipChat</span>?</h2>
              <div className="space-y-6">
                {benefits.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-brand-light">
                      <item.icon size={24} />
                    </div>
                    <span className="text-xl text-white font-medium">{item.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
               <div className="text-center">
                  <p className="text-white/80 text-lg mb-4 italic">"Com a KlipChat, reduzimos o tempo de resposta aos nossos clientes em 85% e triplicamos nossa capacidade de conversão em menos de um mês."</p>
                  <div className="h-1 w-20 bg-brand-light mx-auto mb-4"></div>
                  <p className="text-white font-bold">Inovação Garantida</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
             <div className="flex items-center gap-2 mb-6">
              <span className="text-3xl font-extrabold">klip<span className="text-brand-light">chat</span></span>
            </div>
            <p className="text-gray-400 max-w-sm mb-6 italic">
              Empresa líder em soluções de automação e IA para atendimento comercial e processos internos.
            </p>
            <div className="flex gap-4">
              <a href={INSTAGRAM_LINK} target="_blank" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand transition-all">
                <Instagram size={20} />
              </a>
              <a href={WHATSAPP_LINK} target="_blank" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand transition-all">
                <Phone size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#inicio" className="hover:text-brand-light transition-all">Início</a></li>
              <li><a href="#servicos" className="hover:text-brand-light transition-all">Serviços</a></li>
              <li><a href="#vantagens" className="hover:text-brand-light transition-all">Vantagens</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Contato</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Brasil</li>
              <li>{WHATSAPP_LINK.replace('https://', '')}</li>
              <li>@klipchatoficial</li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} KlipChat Soluções Inteligentes. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => (
  <motion.a
    href={WHATSAPP_LINK}
    target="_blank"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:shadow-[#25D366]/40 transition-all flex items-center justify-center"
  >
    <Phone size={28} />
  </motion.a>
);

const App = () => {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      
      {/* CTA Final */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 italic">Pronto para dar o próximo passo?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Junte-se a dezenas de empresas que já otimizaram seus resultados com a KlipChat.
          </p>
          <a 
            href={WHATSAPP_LINK} 
            className="inline-flex items-center gap-2 bg-brand text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-brand-dark transition-all shadow-xl shadow-brand/20"
          >
            Falar com um Especialista
            <ArrowRight size={24} />
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
