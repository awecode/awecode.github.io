<template>
  <div class="bg-darkk text-color">
    <section id="contact" class="alt row">
      <h1 class="reachUs"><b>Reach Us</b></h1>
      <div class="divideItems">
        <div class="infoBlock">
          <h3><b>Contact</b></h3>

          <div>
            Email:
            <span itemprop="email">
              <a href="mailto:info@awecode.com">info@awecode.com</a>
            </span>
          </div>
          <div>
            <a href="img/awecodeQR.png" target="_blank" title="View QR Code"
              >QR</a
            >
            |
            <a
              href="/vcf/awecodeVCF.vcf"
              target="_blank"
              title="Download vCard vcf"
              >vCard</a
            >
          </div>

          <div
            itemprop="address"
            itemscope
            itemtype="http://schema.org/PostalAddress"
          >
            <a
              href="https://www.google.com.np/maps/place/Edusanjal.com/@27.6809116,85.3396912,18.22z/data=!4m12!1m6!3m5!1s0x39eb1992f90aecdd:0x948f5caccc4535f!2sEdusanjal.com!8m2!3d27.6809442!4d85.3397459!3m4!1s0x39eb1992f90aecdd:0x948f5caccc4535f!8m2!3d27.6809442!4d85.3397459"
              target="_blank"
              class="u"
            >
              View Map
            </a>
            <div itemprop="streetAddress">Mahadevsthan</div>
            <div itemprop="addressLocality">Sahayoginagar-32, Koteshwor</div>
            <div>Kathmandu, Nepal</div>
          </div>

          <meta itemprop="openingHours" datetime="Su-Fr 10:00-19:00" />
        </div>
        <form
          class="message"
          method="POST"
          action="https://formspree.io/info@awecode.com"
        >
          <h3><b>Say Hello</b></h3>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            required
          ></textarea>
          <input type="submit" value="Send" class="send" />
        </form>
      </div>

      <div class="social">
        <a
          target="_blank"
          itemprop="sameAs"
          href="https://www.facebook.com/awecode.inc"
          title="Facebook"
        >
          <img class="lazy" src="/img/social/facebook.png" alt="Facebook" />
        </a>

        <a
          target="_blank"
          itemprop="sameAs"
          href="https://foursquare.com/v/awecode/527f7a1a11d20c8dbf2623f9"
          title="Foursquare"
        >
          <img class="lazy" src="/img/social/foursquare.png" alt="Foursquare" />
        </a>

        <a
          target="_blank"
          itemprop="sameAs"
          href="https://github.com/awecode/"
          title="Github"
        >
          <img class="lazy" src="/img/social/github.png" alt="Github" />
        </a>

        <a
          target="_blank"
          itemprop="sameAs"
          href="https://instagram.com/explore/locations/522386803/"
          title="Instagram"
        >
          <img class="lazy" src="/img/social/instagram.png" alt="Instagram" />
        </a>

        <a
          target="_blank"
          itemprop="sameAs"
          href="https://www.linkedin.com/company/awecode"
          title="LinkedIn"
        >
          <img class="lazy" src="/img/social/linkedin.png" alt="LinkedIn" />
        </a>
      </div>
    </section>
  </div>
</template>

<style>
.reachUs {
  padding-top: 3rem;
  padding-bottom: 1rem;
}
#contact a {
  color: #ddd;
}
#contact {
  padding-bottom: 0;
  justify-content: space-evenly;
  font-size: 15px;
}

.infoBlock {
  padding: 2rem 3rem;
  font-size: 16px;
}

form {
  min-width: 50%;
  display: inline-block;
}

input,
textarea {
  display: block;
  min-width: 90%;
  line-height: 1.5rem;
  padding: 1rem;
  margin: 1rem auto;
}
.send {
  min-width: 85%;
  padding: 10px;
}
.social {
  padding-bottom: 0 !important;
}
.social img {
  background: #eee;
  opacity: 0.5;
  margin: 2px;
}
.social img:hover {
  opacity: 1;
}
.w-100,
h1,
h3,
hr {
  width: 100%;
}
.social {
  padding-bottom: 0 !important;

  margin-block: 5px;
}
.social img {
  background: #eee;
  opacity: 0.5;
}
.social img:hover {
  opacity: 1;
}

.divideItems {
  display: flex;
  justify-content: space-around;
  padding-block: 2rem;
}
@media screen and (max-width: 760px) {
  .divideItems {
    display: block;
  }
  /* form {
    width: 50%;
  } */
  .divideItems {
    padding-top: 0;
  }
  /* input,
  textarea {
    display: block;
    min-width: 90%;
    line-height: 1.5rem;
    padding: 1rem;
    margin: 1rem auto;
  } */
}
</style>
