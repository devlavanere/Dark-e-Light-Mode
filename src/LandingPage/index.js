import './style.css';

import { useState } from 'react';

const LandingPage = () => {

    const [temaEscuro, setTemaEscuro] = useState(false);

    const alterarTema = () => {
        setTemaEscuro(!temaEscuro);
    }

    return(
    <div className={temaEscuro ? 'modo-escuro' : 'modo-claro'}>
        <header>
            <div className= 'limitar-secao'>
                <img className= 'logomarca' src='assets/barbearia-logo.png' alt = 'Logomarca' />
                <button onClick={alterarTema}  className= {temaEscuro ? 'modo-escuro' : 'modo-claro'}>
                    <img className= 'btn-icone' src={temaEscuro ? 'assets/moon.png' : 'assets/sun.png'} alt = 'Icone' />
                    {temaEscuro ? `Light` : `Dark`}
                </button>
            </div>
        </header>

        <section className= 'secao-banner'>
            
        </section>

        <section className= 'secao-texto limitar-secao'>
            <div className='limitar-secao'>
                <h1>Bem-vindo a Barber Shop</h1>
                <p className= 'primeiro-paragrafo'>
                    Nossa barbearia sempre oferece profissionais de qualidade e
                    estamos prontos para lidar com suas maiores expectativas.
                </p>
                <p className= 'segundo-paragrafo'>
                    Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos
                    uma equipe premiada que demonstrou o talento de mestres barbeiros
                    em vários concursos de estilo. Deixe nosso barbeiro ser seu
                    estilista pessoal e você nunca ficará desapontado.
                </p>
                <p className= 'assinatura'>S. Kelly</p>
            </div>
        </section>
    </div>
    );
}

export default LandingPage;