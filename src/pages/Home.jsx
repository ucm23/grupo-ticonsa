
const Home = () => {
    return (
        <>
            <nav>
                <div className="nav__logo">Grupo Ticonsa</div>
                <ul className="nav__links">
                    <li className="link"><a href="#">Grupo con historia</a></li>
                    <li className="link"><a href="#">Sistema de prefabricado</a></li>
                    <li className="link"><a href="#">Productos</a></li>
                    <li className="link"><a href="#">Portafolio</a></li>
                    <li className="link"><a href="#">Contacto</a></li>
                </ul>
                <button className="btn">Descargar C.V.</button>
            </nav>

            <header>
                <div className="section__container header__container">
                    
                    <div className="header__content">
                        <div>
                            <h1>Concreto, Prefabricado y Presforzado</h1>
                            <p className="section__subtitle">
                                40 años de experiencia desarrollando soluciones innovadoras que aportan valor agregado a los proyectos de nuestros clientes.
                            </p>
                            <div className="action__btns">
                            <button className="btn">Conoce más</button>
                            </div>
                        </div>
                    </div>
                    <div className="header__image">
                        <img src="/a.jpg" alt="header" />
                        <img src="/2.jpeg" alt="header" />
                    </div>
                </div>
            </header>

            <section className="gallary">
                <div className="section__container gallary__container">
                    <div className="image__gallary">
                        <div className="gallary__col">
                            <img src="/4.jpg" alt="gallary" />
                        </div>
                        <div className="gallary__col">
                            <img src="/1.jpg" alt="gallary" />
                            <img src="/5.webp" alt="gallary" />
                        </div>
                    </div>
                    <div className="gallary__content">
                        <div>
                            <h2 className="section__title">
                                Servicios que ofrecemos:
                            </h2>
                            <p className="section__subtitle">
                                <ul>
                                    <li> Fabricación, transporte y montaje de todo tipo de elementos estructurales existentes en el mercado y todo tipo de fachadas con base a elementos de concreto.</li>
                                    <li>Proyectos arquitectónicos.</li>
                                    <li>Estructuración y diseño estructural.</li>
                                    <li>Supervisión de obras y dirección de proyecto.</li>
                                    <li>Sistema de pretensado y postensado.</li>
                                </ul>
                            </p>

                        </div>
                    </div>
                </div>
            </section>

            <section className="section__container destination__container">
                <div className="section__header">
                    <div>
                        <h2 className="section__title">Explore top destinations</h2>
                        <p className="section__subtitle">
                            Explore your suitable and dream places around the world. Here you
                            can find your right destination.
                        </p>
                    </div>
                    <div className="destination__nav">
                        <span><i className="ri-arrow-left-s-line"></i></span>
                        <span><i className="ri-arrow-right-s-line"></i></span>
                    </div>
                </div>
                <div className="destination__grid">
                    <div className="destination__card">
                        <img src="/destination-1.jpg" alt="destination" />
                        <div className="destination__details">
                            <p className="destination__title">Banff</p>
                            <p className="destination__subtitle">Canada</p>
                        </div>
                    </div>
                    <div className="destination__card">
                        <img src="/destination-2.jpg" alt="destination" />
                        <div className="destination__details">
                            <p className="destination__title">Machu Picchu</p>
                            <p className="destination__subtitle">Peru</p>
                        </div>
                    </div>
                    <div className="destination__card">
                        <img src="/destination-3.jpg" alt="destination" />
                        <div className="destination__details">
                            <p className="destination__title">Lauterbrunnen</p>
                            <p className="destination__subtitle">Switzerland</p>
                        </div>
                    </div>
                    <div className="destination__card">
                        <img src="/destination-4.jpg" alt="destination" />
                        <div className="destination__details">
                            <p className="destination__title">Zhangjiajie</p>
                            <p className="destination__subtitle">China</p>
                        </div>
                    </div>
                </div>
            </section>

            

            <section className="trip">
                <div className="section__container trip__container">
                    <h2 className="section__title">Best trip package</h2>
                    <p className="section__subtitle">
                        Explore your suitable and dream places around the world. Here you can find your right destination.
                    </p>
                    <div className="trip__grid">
                        <div className="trip__card">
                            <img src="/trip-1.jpg" alt="trip" />
                            <div className="trip__details">
                                <p>Wasserwerk Frelberg, Germany</p>
                                <div className="rating"><i className="ri-star-fill"></i> 4.2</div>
                                <div className="booking__price">
                                    <div className="price"><span>From</span> $300</div>
                                    <button className="book__now">Book Now</button>
                                </div>
                            </div>
                        </div>

                        <div className="trip__card">
                            <img src="/trip-2.jpg" alt="trip" />
                            <div className="trip__details">
                                <p>Patagonia, Argentina and Chile</p>
                                <div className="rating"><i className="ri-star-fill"></i> 4.5</div>
                                <div className="booking__price">
                                    <div className="price"><span>From</span> $450</div>
                                    <button className="book__now">Book Now</button>
                                </div>
                            </div>
                        </div>

                        <div className="trip__card">
                            <img src="/trip-3.jpg" alt="trip" />
                            <div className="trip__details">
                                <p>The Dolomites, Italy</p>
                                <div className="rating"><i className="ri-star-fill"></i> 4.7</div>
                                <div className="booking__price">
                                    <div className="price"><span>From</span> $400</div>
                                    <button className="book__now">Book Now</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="view__all">
                        <button className="btn">View All</button>
                    </div>
                </div>
            </section>

            

            <section className="subscribe">
            <div className="section__container subscribe__container">
                <div className="subscribe__content">
                <h2 className="section__title">Subscribe to get special prize</h2>
                <p className="section__subtitle">
                    Explore your suitable and dream places around the world. Here you
                    can find your right destination.
                </p>
                </div>
                <div className="subscribe__form">
                <form>
                    <input type="email" placeholder="Your email here" />
                    <button className="btn" type="submit">Send</button>
                </form>
                </div>
            </div>
            </section>

            <footer className="footer">
            <div className="section__container footer__container">
                <div className="footer__col">
                <h3>Pathway<span>.</span></h3>
                <p>
                    Explore your suitable and dream places around the world. Here you
                    can find your right destination.
                </p>
                </div>
                <div className="footer__col">
                <h4>Support</h4>
                <p>FAQs</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Contact Us</p>
                </div>
                <div className="footer__col">
                <h4>Address</h4>
                <p>
                    <span>Address:</span> 280 Wilson Street, Cima, California, 92323,
                    United States
                </p>
                <p><span>Email:</span> info@pathway.com</p>
                <p><span>Phone:</span> +91 9876543210</p>
                </div>
            </div>
            <div className="footer__bar">
                Copyright © 2023 Web Design Mastery. All rights reserved.
            </div>
            </footer>
        
        </>
    )
}

export default Home