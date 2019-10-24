<?php
  include("contact_process.php");
?>
<!doctype html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>Charity</title>
  <link rel="icon" href="img/favicon.png">
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <!-- animate CSS -->
  <link rel="stylesheet" href="css/animate.css">
  <!-- owl carousel CSS -->
  <link rel="stylesheet" href="css/owl.carousel.min.css">
  <!-- themify CSS -->
  <link rel="stylesheet" href="css/themify-icons.css">
  <!-- font awesome CSS -->
  <link rel="stylesheet" href="css/all.css">
  <!-- flaticon CSS -->
  <link rel="stylesheet" href="css/flaticon.css">
  <!-- magnific popup CSS -->
  <link rel="stylesheet" href="css/magnific-popup.css">
  <!-- nice select CSS -->
  <link rel="stylesheet" href="css/nice-select.css">
  <!-- swiper CSS -->
  <link rel="stylesheet" href="css/slick.css">
  <!-- style CSS -->
  <link rel="stylesheet" href="css/style.css">
</head>

<body>
  <!--::header part start::-->
  <header class="main_menu home_menu">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-12">
          <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="index.html"> <img src="logo/logo.png" alt="logo"> </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="ti-menu"></span>
            </button>

            <div class="collapse navbar-collapse main-menu-item justify-content-end" id="navbarSupportedContent">
              <ul class="navbar-nav align-items-center">
                <li class="nav-item">
                  <a class="nav-link" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="about.html">About</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="gallery.html">Gallery</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="contact.html">Contact</a>
              </li>
              <li class="d-none d-lg-block">
                  <a class="btn_2" href="donation.html">Donate</a>
              </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
  <!-- Header part end-->

  <!-- breadcrumb start-->
  <section class="breadcrumb breadcrumb_bg">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="breadcrumb_iner">
            <div class="breadcrumb_iner_item text-center">
              <h2>contact</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- breadcrumb start-->

  <!-- ================ contact section start ================= -->
  <section class="contact-section section_padding">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="contact-title">Get in Touch</h2>
        </div>
        <div class="col-lg-8">
          <form class="form-contact contact_form" action="contact.php" method="GET" id="contactForm"
            novalidate="novalidate">
            <?php contact(); ?>
            <div class="row">
              <div class="col-12">
                <div class="form-group">

                  <textarea class="form-control w-100" name="message" id="message" cols="30" rows="9"
                    onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'"
                    placeholder='Enter Message'></textarea>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <input class="form-control" name="name" id="name" type="text" onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Enter your name'" placeholder='Enter your name'>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <input class="form-control" name="email" id="email" type="email" onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Enter email address'" placeholder='Enter email address'>
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <input class="form-control" name="subject" id="subject" type="text" onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Enter Subject'" placeholder='Enter Subject'>
                </div>
              </div>
            </div>
            <div class="form-group mt-3">
              <input type="submit" class="btn_3" value="Send Message" name="contact-btn"/>
            </div>
          </form>
        </div>
        <div class="col-lg-4">
          <div class="media contact-info">
            <span class="contact-info__icon"><i class="ti-home"></i></span>
            <div class="media-body">
              <h3>Buttonwood, California.</h3>
              <p>Rosemead, CA 91770</p>
            </div>
          </div>
          <div class="media contact-info">
            <span class="contact-info__icon"><i class="ti-tablet"></i></span>
            <div class="media-body">
              <h3>00 (440) 9865 562</h3>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div class="media contact-info">
            <span class="contact-info__icon"><i class="ti-email"></i></span>
            <div class="media-body">
              <h3>support@colorlib.com</h3>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ================ contact section end ================= -->

  <!--::footer_part start::-->
  <footer class="footer_part">
      <div class="container">
          <div class="row justify-content-around">
              <div class="col-sm-6 col-lg-3">
                  <div class="single_footer_part">
                      <img src="img/footer_logo.png" class="footer_logo" alt="">
                      <p>Heaven fruitful doesn't over lesser days appear creeping seasons so behold bearing days open
                      </p>
                      <div class="work_hours">
                          <h5>Working Hours:</h5>
                          <ul>
                              <li> <p> Monday-Friday:</p> <span> 8AM - 6PM</span></li>
                              <li> <p>Saturday-Sunday:</p> <span> 8AM - 12PM</span></li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div class="col-sm-6 col-lg-2">
                  <div class="single_footer_part">
                      <h4>Causes</h4>
                      <ul class="list-unstyled">
                          <li><a href="">Boat Shippment</a></li>
                          <li><a href="">Services</a></li>
                          <li><a href="">Transport Planning</a></li>
                          <li><a href="">Transportation</a></li>
                          <li><a href="">Truck Delivery Checking</a></li>
                      </ul>
                  </div>
              </div>
              <div class="col-sm-6 col-lg-3">
                  <div class="single_footer_part footer_3">
                      <h4> our Gallery</h4>
                      <div class="footer_img">
                          <div class="single_footer_img">
                              <img src="img/footer_img/footer_img_1.png" alt="">
                          </div>
                          <div class="single_footer_img">
                              <img src="img/footer_img/footer_img_2.png" alt="">
                          </div>
                          <div class="single_footer_img">
                              <img src="img/footer_img/footer_img_3.png" alt="">
                          </div>
                          <div class="single_footer_img">
                              <img src="img/footer_img/footer_img_4.png" alt="">
                          </div>
                          <div class="single_footer_img">
                              <img src="img/footer_img/footer_img_5.png" alt="">
                          </div>
                          <div class="single_footer_img">
                              <img src="img/footer_img/footer_img_6.png" alt="">
                          </div>
                          <div class="single_footer_img">
                              <img src="img/footer_img/footer_img_7.png" alt="">
                          </div>
                          <div class="single_footer_img">
                              <img src="img/footer_img/footer_img_8.png" alt="">
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-sm-6 col-lg-3">
                  <div class="single_footer_part">
                      <h4>Newsletter</h4>
                      <p>Heaven fruitful doesn't over lesser in days. Appear creeping seasons deve behold bearing days
                          open
                      </p>
                      <div id="mc_embed_signup">
                          <form target="_blank"
                              action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                              method="get" class="subscribe_form relative mail_part" required>
                              <input type="email" name="email" id="newsletter-form-email" placeholder="Email Address"
                                  class="placeholder hide-on-focus" onfocus="this.placeholder = ''"
                                  onblur="this.placeholder = ' Email Address '" required="" type="email">
                              <button type="submit" name="submit" id="newsletter-submit"
                                  class="email_icon newsletter-submit button-contactForm"><i
                                      class="far fa-paper-plane"></i></button>
                              <div class="mt-10 info"></div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
          <hr>
          <div class="row">
              <div class="col-lg-6">
                  <div class="copyright_text">
                      <P><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="ti-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></P>
                  </div>
              </div>
              <div class="col-lg-6">
                  <div class="footer_icon social_icon">
                      <ul class="list-unstyled">
                          <li><a href="#" class="single_social_icon"><i class="fab fa-facebook-f"></i></a></li>
                          <li><a href="#" class="single_social_icon"><i class="fab fa-twitter"></i></a></li>
                          <li><a href="#" class="single_social_icon"><i class="fas fa-globe"></i></a></li>
                          <li><a href="#" class="single_social_icon"><i class="fab fa-behance"></i></a></li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </footer>
  <!--::footer_part end::-->

  <!-- jquery plugins here-->

  <script src="js/jquery-1.12.1.min.js"></script>
  <!-- popper js -->
  <script src="js/popper.min.js"></script>
  <!-- bootstrap js -->
  <script src="js/bootstrap.min.js"></script>
  <!-- easing js -->
  <script src="js/jquery.magnific-popup.js"></script>
  <!-- swiper js -->
  <script src="js/swiper.min.js"></script>
  <script src="js/wow.min.js"></script>
  <script src="js/jquery.smooth-scroll.min.js"></script>
  <!-- swiper js -->
  <script src="js/masonry.pkgd.js"></script>
  <!-- particles js -->
  <script src="js/owl.carousel.min.js"></script>
  <script src="js/jquery.nice-select.min.js"></script>
  <!-- swiper js -->
  <script src="js/slick.min.js"></script>
  <script src="js/jquery.counterup.min.js"></script>
  <script src="js/waypoints.min.js"></script>
  <script src="js/countdown.jquery.min.js"></script>
  <!-- contact js -->
  <script src="js/jquery.ajaxchimp.min.js"></script>
  <script src="js/jquery.form.js"></script>
  <script src="js/jquery.validate.min.js"></script>
  <script src="js/mail-script.js"></script>
  <script src="js/contact.js"></script>
  <!-- custom js -->
  <script src="js/custom.js"></script>
</body>

</html>