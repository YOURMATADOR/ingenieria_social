const fake_mail = (
  usuario,
  btn_url
) => `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width" />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
      integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
      crossorigin="anonymous"
    />
    <!-- For development, pass document through inliner -->

    <style type="text/css">
      .peligro {
        color: red;
      }
      * {
        margin: 0;
        padding: 0;
        font-size: 100%;
        font-family: "Avenir Next", "Helvetica Neue", "Helvetica", Helvetica,
          Arial, sans-serif;
        line-height: 1.65;
      }

      img {
        max-width: 100%;
        margin: 0 auto;
        display: block;
      }

      body,
      .body-wrap {
        width: 100% !important;
        height: 100%;
        background: #f8f8f8;
      }

      a {
        color: #71bc37;
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }

      .text-center {
        text-align: center;
      }

      .text-right {
        text-align: right;
      }

      .text-left {
        text-align: left;
      }

      .button {
        display: inline-block;
    color: black;
    padding: .5rem;
    background: transparent;
    border: solid #191918;
    /* border-width: 10px 20px 8px; */
    font-weight: bold;
    border-radius: 4px;
      }

      .button:hover {
        text-decoration: none;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin-bottom: 20px;
        line-height: 1.25;
      }

      h1 {
        font-size: 32px;
      }

      h2 {
        font-size: 28px;
      }

      h3 {
        font-size: 24px;
      }

      h4 {
        font-size: 20px;
      }

      h5 {
        font-size: 16px;
      }

      p,
      ul,
      ol {
        font-size: 16px;
        font-weight: normal;
        margin-bottom: 20px;
      }

      .container {
        display: block !important;
        clear: both !important;
        margin: 0 auto !important;
        max-width: 580px !important;
      }

      .container table {
        width: 100% !important;
        border-collapse: collapse;
      }

      .container .masthead {
        padding: 80px 0;
        background: #3079ff;
        color: white;
      }

      .container .masthead h1 {
        margin: 0 auto !important;
        max-width: 90%;
        text-transform: uppercase;
      }

      .container .content {
        background: white;
        padding: 30px 35px;
      }

      .container .content.footer {
        background: none;
      }

      .container .content.footer p {
        margin-bottom: 0;
        color: #888;
        text-align: center;
        font-size: 14px;
      }

      .container .content.footer a {
        color: #888;
        text-decoration: none;
        font-weight: bold;
      }

      .container .content.footer a:hover {
        text-decoration: underline;
      }
      .logo_face {
        width: 15%;
        margin-right: 75%;
      }
      .info {
        font-style: italic;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        flex-direction: row;
      }
      .info img{
        margin: 1rem;
      }
      .info_img{
          width:20px;
          height:20px;
      }
      .info_img_mini{
        width:15px;
        height:15px;
      }
    </style>
  </head>
  <body>
    <table class="body-wrap">
      <tr>
        <td class="container">
          <!-- Message start -->
          <table>
            <tr>
              <td align="center" class="masthead">
                <img src="cid:logo" alt="" srcset="" class="logo_face" />
              </td>
            </tr>
            <tr>
              <td class="content">
                <h2 style="display: flex;justify-content: center;align-items: center;">
                  Actividad sospechosa <img src="cid:info" alt="" srcset="" style="margin: 1rem;" class="info_img" />
                </h2>

                <p>
                  Hemos impedido que alguien que conoce tu contraseña iniciara
                  sesión en tu cuenta. Si no has sido tú, deberías cambiar la
                  contraseña de inmediato.
                </p>
                <p class="info">
                <img src="cid:ques" alt="" srcset="" class="info_img_mini" /> Dispositivo desconocido
              </p>
              <p class="info">
              <img src="cid:clock" alt="" srcset="" class="info_img_mini" /> 16 de mayo, 3:06
              </p>
              <p class="info">
              <img src="cid:gps" alt="" srcset="" class="info_img_mini" /> Cerca de, Guadalajara,
                Jalisco, Mexico 54.90.207.224
              </p>

                <table>
                  <tr>
                    <td align="center">
                      <p>
                        <a href="${btn_url}" class="button">Validar datos de seguridad</a>
                      </p>
                    </td>
                  </tr>
                </table>


                <p><em>– Equipo de Facebook</em></p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td class="container">
          <!-- Message start -->
          <table>
            <tr>
              <td class="content footer" align="center">
                <p>
                  Enviado por <a href="#">Facebook</a>, 1234 Yellow Brick Road,
                  OZ, 99999
                </p>
                <p>
                  <a href="mailto:">facebook@support.com</a> |
                  <a href="#">Desubscribirse</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;

module.exports = { fake_mail };
