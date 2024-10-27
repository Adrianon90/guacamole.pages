import React from 'react';

function App() {
    return (
        <div>
            <header>
                <div className="container">
                    <h1>Agência WebPro</h1>
                    <nav>
                        <ul>
                            <li><a href="#sobre">Sobre Nós</a></li>
                            <li><a href="#servicos">Serviços</a></li>
                            <li><a href="#portfolio">Portfólio</a></li>
                            <li><a href="#contato">Contato</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <section id="home">
                <div className="container">
                    <h2>Criação de Páginas Personalizadas</h2>
                    <p>Transforme sua presença online com nosso serviço de criação de páginas web personalizadas e eficientes.</p>
                    <a href="#contato" className="btn">Solicite um Orçamento</a>
                </div>
            </section>

            <section id="sobre">
                <div className="container">
                    <h2>Sobre Nós</h2>
                    <p>Na Agência WebPro, somos especialistas em criar websites que atendem às suas necessidades e superam suas expectativas. Nossa equipe de profissionais trabalha para garantir que você tenha uma presença online de destaque.</p>
                </div>
            </section>

            <section id="servicos">
                <div className="container">
                    <h2>Serviços</h2>
                    <ul>
                        <li>Desenvolvimento de Websites</li>
                        <li>Design Responsivo</li>
                        <li>Otimização para Motores de Busca (SEO)</li>
                        <li>Manutenção de Sites</li>
                    </ul>
                </div>
            </section>

            <section id="portfolio">
                <div className="container">
                    <h2>Portfólio</h2>
                    <p>Confira alguns dos nossos projetos anteriores e veja como podemos ajudar você a criar um site incrível!</p>
                    {/* Here you can add images of your projects */}
                </div>
            </section>

            <section id="contato">
                <div className="container">
                    <h2>Contato</h2>
                    <p>Entre em contato conosco para saber mais sobre nossos serviços ou para solicitar um orçamento.</p>
                    <form>
                        <input type="text" placeholder="Seu Nome" required />
                        <input type="email" placeholder="Seu Email" required />
                        <textarea placeholder="Sua Mensagem" required></textarea>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </section>

            <footer>
                <div className="container">
                    <p>&copy; 2024 Agência WebPro. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
