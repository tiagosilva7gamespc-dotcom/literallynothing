
import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  Zap, 
  TrendingUp, 
  Instagram, 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2, 
  Menu, 
  X,
  Bot
} from 'lucide-react';

// Reusable Components
const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="https://res.cloudinary.com/dmibs2bbf/image/upload/v1768341812/logo_halupt.jpg" 
              alt="KlipChat Logo" 
              className="h-10 w-auto rounded"
            />
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#inicio" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-500 font-medium transition-colors`}>Início</a>
            <a href="#servicos" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-500 font-medium transition-colors`}>Serviços</a>
            <a href="#sobre" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-500 font-medium transition-colors`}>Sobre</a>
            <a 
              href="https://wa.me/558988052209" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-semibold transition-all shadow-lg hover:shadow-blue-500/50"
            >
              Contato
            </a>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`${isScrolled ? 'text-gray-900' : 'text-white'} p-2`}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl border-t animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="px-4 py-6 space-y-4">
            <a href="#inicio" onClick={() => setMobileMenuOpen(false)} className="block text-gray-800 text-lg font-medium">Início</a>
            <a href="#servicos" onClick={() => setMobileMenuOpen(false)} className="block text-gray-800 text-lg font-medium">Serviços</a>
            <a href="#sobre" onClick={() => setMobileMenuOpen(false)} className="block text-gray-800 text-lg font-medium">Sobre</a>
            <a 
              href="https://wa.me/558988052209" 
              className="block bg-blue-600 text-white text-center py-3 rounded-lg font-bold"
            >
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
    <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden blue-gradient">
        {/* Background Patterns */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -right-24 w-64 h-64 bg-cyan-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left animate-in fade-in slide-in-from-left duration-700">
              <span className="inline-block px-4 py-1.5 mb-6 bg-white/10 text-white text-sm font-bold tracking-wider uppercase rounded-full border border-white/20">
                Inovação em Atendimento
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                Sua empresa no piloto <span className="text-cyan-300">automático</span> e inteligente.
              </h1>
              <p className="text-xl text-blue-100 mb-10 max-w-xl leading-relaxed">
                A KlipChat transforma o seu atendimento. Automatizamos processos repetitivos e criamos chatbots que realmente resolvem, otimizando seu desempenho global.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/558988052209" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-blue-50 transition-all shadow-lg shadow-black/10"
                >
                  <MessageCircle size={20} />
                  Falar no WhatsApp
                </a>
                <a 
                  href="#servicos" 
                  className="border border-white/40 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                >
                  Conhecer Soluções
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
            
            <div className="hidden md:block relative animate-in fade-in zoom-in duration-1000">
              <div className="relative z-10 bg-white/5 backdrop-blur-sm p-4 rounded-3xl border border-white/10 shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/tech/800/600" 
                  alt="Interface KlipChat" 
                  className="rounded-2xl shadow-lg"
                />
              </div>
              {/* Floating Decorative Elements */}
              <div className="absolute -top-10 -right-10 bg-white p-6 rounded-2xl shadow-xl animate-bounce">
                <Bot size={40} className="text-blue-600" />
              </div>
              <div className="absolute -bottom-6 -left-10 bg-cyan-400 p-6 rounded-2xl shadow-xl">
                <Zap size={32} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Nossas Soluções</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Como a KlipChat escala seu negócio</h3>
            <p className="text-gray-600 text-lg">
              Oferecemos tecnologia de ponta para que sua equipe foque no que realmente importa, enquanto a IA cuida do resto.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<MessageSquare size={30} />}
              title="Atendimento Inteligente"
              description="Chatbots que entendem o contexto e respondem seus clientes 24/7 com precisão e naturalidade."
            />
            <FeatureCard 
              icon={<Zap size={30} />}
              title="Automação de Processos"
              description="Elimine tarefas manuais repetitivas. Automatizamos fluxos de trabalho para reduzir erros e ganhar tempo."
            />
            <FeatureCard 
              icon={<TrendingUp size={30} />}
              title="Otimização de Desempenho"
              description="Análise de dados e otimização global dos pontos de contato, garantindo máxima eficiência operacional."
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <img 
                  src="https://picsum.photos/seed/business/600/600" 
                  alt="Equipe KlipChat" 
                  className="rounded-3xl shadow-2xl relative z-10"
                />
                <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-blue-600 rounded-3xl z-0"></div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Sobre Nós</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Tecnologia que conecta e simplifica</h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                A KlipChat nasceu da necessidade de tornar as empresas mais ágeis. Em um mundo onde o cliente espera respostas instantâneas, nós fornecemos as ferramentas para você nunca deixá-los esperando.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Foco em resultados e escalabilidade",
                  "Atendimento personalizado via WhatsApp",
                  "Tecnologia intuitiva e de fácil integração",
                  "Suporte técnico especializado"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                    <CheckCircle2 className="text-blue-600" size={24} />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <a 
                  href="https://www.instagram.com/klipchatoficial/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline"
                >
                  <Instagram size={20} />
                  Siga-nos no Instagram @klipchatoficial
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="blue-gradient rounded-[3rem] p-12 text-center shadow-2xl shadow-blue-500/30 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Bot size={120} />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Pronto para transformar seu negócio?</h2>
            <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
              Nossos especialistas estão prontos para desenhar a melhor automação para sua empresa. Clique abaixo e comece agora.
            </p>
            <a 
              href="https://wa.me/558988052209" 
              className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-xl inline-flex items-center gap-3 hover:scale-105 transition-transform shadow-xl"
            >
              Falar com um Especialista
              <MessageCircle size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <img 
                src="https://res.cloudinary.com/dmibs2bbf/image/upload/v1768341812/logo_halupt.jpg" 
                alt="KlipChat Logo" 
                className="h-10 mb-6 brightness-110"
              />
              <p className="text-gray-400 max-w-sm mb-6">
                Especialistas em automação inteligente e otimização de fluxos para empresas que buscam alta performance.
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/klipchatoficial/" className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-full hover:bg-blue-600 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://wa.me/558988052209" className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-full hover:bg-green-600 transition-colors">
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
                <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
                <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="https://wa.me/558988052209" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Contato</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center gap-2">
                  <MessageCircle size={18} className="text-blue-500" />
                  (89) 8805-2209
                </li>
                <li className="flex items-center gap-2 underline">
                  <Instagram size={18} className="text-blue-500" />
                  @klipchatoficial
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:row justify-between items-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} KlipChat. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Termos de Uso</a>
              <a href="#" className="hover:text-white">Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
