import { useState } from 'react'
import './App.css'


function App() {
  

  return (
    <>
      {/* ***** Preloader Start ***** */}
      <div id="js-preloader" className="js-preloader">
        <div className="preloader-inner">
          <span className="dot"></span>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      {/* ***** Preloader End ***** */}

      {/* ***** Header Area Start ***** */}
      <header
        className="header-area header-sticky wow slideInDown"
        data-wow-duration="0.75s"
        data-wow-delay="0s"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* ***** Logo Start ***** */}
                <a href="index.html" className="logo">
                  <img src="images/logo.png" alt="Chain App Dev" />
                </a>
                {/* ***** Logo End ***** */}
                {/* ***** Menu Start ***** */}
                <ul className="nav">
                  <li className="scroll-to-section">
                    <a href="#top" className="active">
                      Home
                    </a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#services">Services</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#about">About</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#pricing">Pricing</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#newsletter">Newsletter</a>
                  </li>
                  <li>
                    <div className="gradient-button">
                      <a id="modal_trigger" href="#modal">
                        <i className="fa fa-sign-in-alt"></i> Sign In Now
                      </a>
                    </div>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
                {/* ***** Menu End ***** */}
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* ***** Header Area End ***** */}

      {/* ***** Modal ***** */}
      <div
        id="modal"
        className="popupContainer"
        style={{ display: "none" }}
      >
        <div className="popupHeader">
          <span className="header_title">Login</span>
          <span className="modal_close">
            <i className="fa fa-times"></i>
          </span>
        </div>

        <section className="popupBody">
          {/* Social Login */}
          <div className="social_login">
            <div>
              <a href="#" className="social_box fb">
                <span className="icon">
                  <i className="fab fa-facebook"></i>
                </span>
                <span className="icon_title">Connect with Facebook</span>
              </a>

              <a href="#" className="social_box google">
                <span className="icon">
                  <i className="fab fa-google-plus"></i>
                </span>
                <span className="icon_title">Connect with Google</span>
              </a>
            </div>

            <div className="centeredText">
              <span>Or use your Email address</span>
            </div>

            <div className="action_btns">
              <div className="one_half">
                <a href="#" id="login_form" className="btn">
                  Login
                </a>
              </div>
              <div className="one_half last">
                <a href="#" id="register_form" className="btn">
                  Sign up
                </a>
              </div>
            </div>
          </div>

          {/* Username & Password Login form */}
          <div className="user_login">
            <form>
              <label>Email / Username</label>
              <input type="text" />
              <br />

              <label>Password</label>
              <input type="password" />
              <br />

              <div className="checkbox">
                <input id="remember" type="checkbox" />
                <label htmlFor="remember">Remember me on this computer</label>
              </div>

              <div className="action_btns">
                <div className="one_half">
                  <a href="#" className="btn back_btn">
                    <i className="fa fa-angle-double-left"></i> Back
                  </a>
                </div>
                <div className="one_half last">
                  <a href="#" className="btn btn_red">
                    Login
                  </a>
                </div>
              </div>
            </form>

            <a href="#" className="forgot_password">
              Forgot password?
            </a>
          </div>

          {/* Register Form */}
          <div className="user_register">
            <form>
              <label>Full Name</label>
              <input type="text" />
              <br />

              <label>Email Address</label>
              <input type="email" />
              <br />

              <label>Password</label>
              <input type="password" />
              <br />

              <div className="checkbox">
                <input id="send_updates" type="checkbox" />
                <label htmlFor="send_updates">
                  Send me occasional email updates
                </label>
              </div>

              <div className="action_btns">
                <div className="one_half">
                  <a href="#" className="btn back_btn">
                    <i className="fa fa-angle-double-left"></i> Back
                  </a>
                </div>
                <div className="one_half last">
                  <a href="#" className="btn btn_red">
                    Register
                  </a>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>

      {/* ***** Main Banner ***** */}
      <div
        className="main-banner wow fadeIn"
        id="top"
        data-wow-duration="1s"
        data-wow-delay="0.5s"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6 align-self-center">
                  <div
                    className="left-content show-up header-text wow fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay="1s"
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <h2>Get The Latest App From App Stores</h2>
                        <p>
                          Chain App Dev is an app landing page HTML5 template
                          based on Bootstrap v5.1.3 CSS layout provided by
                          TemplateMo, a great website to download free CSS
                          templates.
                        </p>
                      </div>
                      <div className="col-lg-12">
                        <div className="white-button first-button scroll-to-section">
                          <a href="#contact">
                            Free Quote <i className="fab fa-apple"></i>
                          </a>
                        </div>
                        <div className="white-button scroll-to-section">
                          <a href="#contact">
                            Free Quote <i className="fab fa-google-play"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="right-image wow fadeInRight"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    <img src="images/slider-dec.png" alt="slider" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ***** Header ***** */}
      <header
        className="header-area header-sticky wow slideInDown"
        data-wow-duration="0.75s"
        data-wow-delay="0s"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="#top" className="logo">
                  <img src="images/logo.png" alt="Chain App Dev" />
                </a>
                <ul className="nav">
                  <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                  <li className="scroll-to-section"><a href="#services">Services</a></li>
                  <li className="scroll-to-section"><a href="#about">About</a></li>
                  <li className="scroll-to-section"><a href="#pricing">Pricing</a></li>
                  <li className="scroll-to-section"><a href="#newsletter">Newsletter</a></li>
                  <li>
                    <div className="gradient-button">
                      <a id="modal_trigger" href="#modal">
                        <i className="fa fa-sign-in-alt"></i> Sign In Now
                      </a>
                    </div>
                  </li>
                </ul>
                <a className="menu-trigger"><span>Menu</span></a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* ***** Banner ***** */}
      <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                <h2>Get The Latest App From App Stores</h2>
                <p>Chain App Dev is an app landing page HTML5 template based on Bootstrap v5.1.3 CSS layout.</p>
                <div className="white-button first-button scroll-to-section">
                  <a href="#contact">Free Quote <i className="fab fa-apple"></i></a>
                </div>
                <div className="white-button scroll-to-section">
                  <a href="#contact">Free Quote <i className="fab fa-google-play"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                <img src="images/slider-dec.png" alt="slider" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ***** Services ***** */}
      <section id="services" className="services section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
                <h4>Amazing <em>Services</em> &amp; Features</h4>
                <img src=" /images/heading-line-dec.png" alt="" />
                <p>Check out the services we provide for our customers.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
              <div className="service-item">
                <div className="icon"><img src="images/service-icon-01.png" alt="" /></div>
                <h4>App Maintenance</h4>
                <p>Keep your app updated and bug-free.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s">
              <div className="service-item">
                <div className="icon"><img src="images/service-icon-02.png" alt="" /></div>
                <h4>Rocket Speed</h4>
                <p>Fast loading apps with smooth performance.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s">
              <div className="service-item">
                <div className="icon"><img src=" /images/service-icon-03.png" alt="" /></div>
                <h4>Best Security</h4>
                <p>Your data and apps are fully secured with us.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.8s">
              <div className="service-item">
                <div className="icon"><img src="images/service-icon-04.png" alt="" /></div>
                <h4>24/7 Support</h4>
                <p>Always here to assist you with any issues.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ***** About ***** */}
      <section id="about" className="about section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src=" /images/about-left-image.png" alt="About" />
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="section-heading wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                <h4>About <em>Our Company</em></h4>
                <img src=" /images/heading-line-dec.png" alt="" />
                <p>We build and design modern web & mobile applications.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ***** Clients ***** */}
      <section id="clients" className="the-clients section">
        <div className="container">
          <h4>Our <em>Happy Clients</em></h4>
          <div className="row">
            <div className="col-lg-2 col-4"><img src=" /images/client-01.png" alt="client" /></div>
            <div className="col-lg-2 col-4"><img src=" /images/client-02.png" alt="client" /></div>
            <div className="col-lg-2 col-4"><img src=" /images/client-03.png" alt="client" /></div>
            <div className="col-lg-2 col-4"><img src=" /images/client-04.png" alt="client" /></div>
            <div className="col-lg-2 col-4"><img src=" /images/client-05.png" alt="client" /></div>
            <div className="col-lg-2 col-4"><img src=" /images/client-06.png" alt="client" /></div>
          </div>
        </div>
      </section>

      {/* ***** Pricing ***** */}
      <section id="pricing" className="pricing section">
        <div className="container">
          <div className="section-heading">
            <h4>Choose <em>Pricing</em> Plan</h4>
            <img src=" /images/heading-line-dec.png" alt="" />
          </div>
          <div className="row">
            <div className="col-lg-4"><div className="pricing-item"><h4>Basic</h4><p>$19/month</p></div></div>
            <div className="col-lg-4"><div className="pricing-item active"><h4>Standard</h4><p>$49/month</p></div></div>
            <div className="col-lg-4"><div className="pricing-item"><h4>Premium</h4><p>$99/month</p></div></div>
          </div>
        </div>
      </section>

      {/* ***** Newsletter ***** */}
      <section id="newsletter" className="newsletter section">
        <div className="container">
          <h4>Subscribe To Our <em>Newsletter</em></h4>
          <form>
            <input type="email" placeholder="Your Email..." />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>

      {/* ***** Footer ***** */}
      <footer className="footer">
        <div className="container">
          <p>© 2025 Chain App Dev. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App
