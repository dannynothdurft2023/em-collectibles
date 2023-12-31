/* 
  Datei: OrderMail.js
  Version: 1.0.0
  Entwickler: Danny Nothdurft
*/

import nodemailer from "nodemailer";
import settings from "@/utils/settings.json";

module.exports = async (mailObj, emailSubject, orderNumber) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_APP_PASSWORD,
    },
  });

  const subTemplate = mailObj.basket
    .map((item) => {
      return `
      <tr>
      <!--[if !mso]><!-->
      <td class=t182
          style="background-color:#FFFFFF;overflow:hidden;width:760px;padding:20px 20px 20px 20px;">
          <!--<![endif]-->
          <!--[if mso]><td class=t182 style="background-color:#FFFFFF;overflow:hidden;width:800px;padding:20px 20px 20px 20px;"><![endif]-->
          <div class=t188
              style="display:inline-table;width:100%;text-align:left;vertical-align:middle;">
              <!--[if mso]>
<table role=presentation cellpadding=0 cellspacing=0 align=left valign=middle><tr><td class=t213 style="width:10px;" width=10></td><td width=68.77673 valign=middle><![endif]-->
              <div class=t214
                  style="display:inline-table;text-align:initial;vertical-align:inherit;width:17.9821%;max-width:221px;">
                  <div class=t215
                      style="padding:0 10px 0 10px;">
                      <table role=presentation width=100%
                          cellpadding=0 cellspacing=0
                          class=t216>
                          <tr>
                              <td class=t217>
                                  <div style="font-size:0px;">
                                      <img class=t218
                                          style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;"
                                          width=68.77673224978614
                                          height=96.53125
                                          src=${item.image} />
                                  </div>
                              </td>
                          </tr>
                      </table>
                  </div>
              </div>
              <!--[if mso]>
</td><td class=t213 style="width:10px;" width=10></td><td class=t193 style="width:10px;" width=10></td><td width=205.30368 valign=middle><![endif]-->
              <div class=t194
                  style="display:inline-table;text-align:initial;vertical-align:inherit;width:50.44752%;max-width:620px;">
                  <div class=t195
                      style="padding:0 10px 0 10px;">
                      <table role=presentation width=100%
                          cellpadding=0 cellspacing=0
                          class=t196>
                          <tr>
                              <td class=t197>
                                  <h1 class=t198
                                      style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:16px;font-weight:700;font-style:normal;font-size:14px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#1A1A1A;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">
                                      ${item.titel}</h1>
                              </td>
                          </tr>
                      </table>
                  </div>
              </div>
              <!--[if mso]>
</td><td class=t193 style="width:10px;" width=10></td><td class=t203 style="width:10px;" width=10></td><td width=125.91959 valign=middle><![endif]-->
              <div class=t204
                  style="display:inline-table;text-align:initial;vertical-align:inherit;width:31.57038%;max-width:388px;">
                  <div class=t205
                      style="padding:0 10px 0 10px;">
                      <table role=presentation width=100%
                          cellpadding=0 cellspacing=0
                          class=t206>
                          <tr>
                              <td class=t207>
                                  <p class=t208
                                      style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:uppercase;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:right;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                      Mänge: <span class=t219
                                          style="font-weight:bold;mso-line-height-rule:exactly;">${item.quantity}</span>
                                  </p>
                              </td>
                          </tr>
                      </table>
                  </div>
              </div>
              <!--[if mso]>
</td><td class=t203 style="width:10px;" width=10></td>
</tr></table>
<![endif]-->
          </div>
      </td>
  </tr>
      `;
    })
    .join("");

  const emailContent = `<!DOCTYPE html
  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office" lang="de">

<head>
  <meta name=x-apple-disable-message-reformatting>
  <meta http-equiv=X-UA-Compatible>
  <meta charset=utf-8>
  <meta name=viewport content=target-densitydpi=device-dpi>
  <meta content=true name=HandheldFriendly>
  <meta content=width=device-width name=viewport>
  <style type="text/css">
      table {
          border-collapse: separate;
          table-layout: fixed;
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt
      }

      table td {
          border-collapse: collapse
      }

      .ExternalClass {
          width: 100%
      }

      .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,a
      .ExternalClass div {
          line-height: 100%
      }

      * {
          line-height: inherit;
          text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
          -moz-text-size-adjust: 100%;
          -o-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale
      }

      html {
          -webkit-text-size-adjust: none !important
      }

      img+div {
          display: none;
          display: none !important
      }

      img {
          Margin: 0;
          padding: 0;
          -ms-interpolation-mode: bicubic
      }

      h1,
      h2,
      h3,
      p,
      a {
          line-height: 1;
          overflow-wrap: normal;
          white-space: normal;
          word-break: break-word
      }

      a {
          text-decoration: none
      }

      h1,
      h2,
      h3,
      p {
          min-width: 100% !important;
          width: 100% !important;
          max-width: 100% !important;
          display: inline-block !important;
          border: 0;
          padding: 0;
          margin: 0
      }

      a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: none !important;
          font-size: inherit !important;
          font-family: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important
      }

      a[href^="mailto"],
      a[href^="tel"],
      a[href^="sms"] {
          color: inherit;
          text-decoration: none
      }

      @media (min-width: 481px) {
          .hd {
              display: none !important
          }
      }

      @media (max-width: 480px) {
          .hm {
              display: none !important
          }
      }

      [style*="Albert Sans"] {
          font-family: 'Albert Sans', BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, sans-serif !important;
      }

      @media only screen and (min-width: 481px) {
          .t3 {
              mso-line-height-alt: 45px !important;
              line-height: 45px !important;
              display: block !important
          }

          .t9 {
              padding-left: 50px !important;
              padding-bottom: 60px !important;
              padding-right: 50px !important
          }

          .t11 {
              padding-left: 50px !important;
              padding-bottom: 60px !important;
              padding-right: 50px !important;
              width: 500px !important
          }

          .t15,
          .t23 {
              width: 250px !important
          }

          .t27,
          .t32 {
              padding-bottom: 15px !important
          }

          .t33 {
              line-height: 26px !important;
              font-size: 24px !important;
              letter-spacing: -1.56px !important
          }

          .t40 {
              padding: 48px 50px !important
          }

          .t42 {
              padding: 48px 50px !important;
              width: 500px !important
          }

          .t69 {
              padding-bottom: 60px !important;
              width: 130px !important
          }

          .t74 {
              padding-bottom: 60px !important
          }

          .t192,
          .t197 {
              padding-left: 24px !important
          }
      }
  </style>
  <!--[if !mso]><!-->
  <link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;500;700;800&display=swap" rel="stylesheet"
      type="text/css">
  <!--<![endif]-->
  <!--[if mso]>
<style type="text/css">
div.t3{mso-line-height-alt:45px !important;line-height:45px !important;display:block !important}td.t11,td.t9{padding-left:50px !important;padding-bottom:60px !important;padding-right:50px !important}td.t15,td.t23{width:250px !important}td.t27,td.t32{padding-bottom:15px !important}h1.t33{line-height:26px !important;font-size:24px !important;letter-spacing:-1.56px !important}td.t40,td.t42{padding:48px 50px !important}td.t69{padding-bottom:60px !important;width:130px !important}td.t74{padding-bottom:60px !important}td.t192,td.t197{padding-left:24px !important}
</style>
<![endif]-->
  <!--[if mso]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
</head>

<body class=t0 style="min-width:100%;Margin:0px;padding:0px;background-color:#242424;">
  <div class=t1 style="background-color:#242424;">
      <table role=presentation width=100% cellpadding=0 cellspacing=0 border=0 align=center>
          <tr>
              <td class=t220 style="font-size:0;line-height:0;mso-line-height-rule:exactly;" valign=top align=center>
                  <!--[if mso]>
<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
<v:fill color=#242424 />
</v:background>
<![endif]-->
                  <table role=presentation width=100% cellpadding=0 cellspacing=0 border=0 align=center>
                      <tr>
                          <td>
                              <div class=t3 style="mso-line-height-rule:exactly;font-size:1px;display:none;">&nbsp;
                              </div>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <table class=t10 role=presentation cellpadding=0 cellspacing=0 align=center>
                                  <tr>
                                      <!--[if !mso]><!-->
                                      <td class=t11
                                          style="background-color:#F8F8F8;overflow:hidden;width:540px;padding:0 30px 40px 30px;">
                                          <!--<![endif]-->
                                          <!--[if mso]><td class=t11 style="background-color:#F8F8F8;overflow:hidden;width:600px;padding:0 30px 40px 30px;"><![endif]-->
                                          <table role=presentation width=100% cellpadding=0 cellspacing=0>
                                              <tr>
                                                  <td>
                                                      <table class=t68 role=presentation cellpadding=0 cellspacing=0
                                                          align=left>
                                                          <tr>
                                                              <!--[if !mso]><!-->
                                                              <td class=t69 style="width:80px;padding:0 0 50px 0;">
                                                                  <!--<![endif]-->
                                                                  <!--[if mso]><td class=t69 style="width:80px;padding:0 0 50px 0;"><![endif]-->
                                                                  <div style="font-size:0px;"><img class=t75
                                                                          style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;"
                                                                          width=130 height=130
                                                                          src=${settings.logo} />
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <table class=t26 role=presentation cellpadding=0 cellspacing=0
                                                          align=center>
                                                          <tr>
                                                              <!--[if !mso]><!-->
                                                              <td class=t27 style="width:600px;padding:0 0 20px 0;">
                                                                  <!--<![endif]-->
                                                                  <!--[if mso]><td class=t27 style="width:600px;padding:0 0 20px 0;"><![endif]-->
                                                                  <h1 class=t33
                                                                      style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:28px;font-weight:800;font-style:normal;font-size:26px;text-decoration:none;text-transform:none;letter-spacing:-1.04px;direction:ltr;color:#191919;text-align:left;mso-line-height-rule:exactly;mso-text-raise:1px;">
                                                                      Hallo ${mailObj.shipping.firstname}, vielen Dank für Deine Bestellung.
                                                                  </h1>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <table class=t78 role=presentation cellpadding=0 cellspacing=0
                                                          align=center>
                                                          <tr>
                                                              <!--[if !mso]><!-->
                                                              <td class=t79 style="width:600px;padding:0 0 22px 0;">
                                                                  <!--<![endif]-->
                                                                  <!--[if mso]><td class=t79 style="width:600px;padding:0 0 22px 0;"><![endif]-->
                                                                  <p class=t85
                                                                      style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                      Sobald Deine Bestellung von uns bearbeitet wird, bekommst Du eine weitere Mail mit der Sendungsnummer.</p>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <table class=t88 role=presentation cellpadding=0 cellspacing=0
                                                          align=center>
                                                          <tr>
                                                              <!--[if !mso]><!-->
                                                              <td class=t89 style="width:600px;">
                                                                  <!--<![endif]-->
                                                                  <!--[if mso]><td class=t89 style="width:600px;"><![endif]-->
                                                                  <p class=t95
                                                                      style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                      <span class=t96
                                                                          style="font-weight:bold;mso-line-height-rule:exactly;">Rechnungsnummer</span>
                                                                  </p>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <table class=t99 role=presentation cellpadding=0 cellspacing=0
                                                          align=center>
                                                          <tr>
                                                              <!--[if !mso]><!-->
                                                              <td class=t100 style="width:600px;padding:0 0 22px 0;">
                                                                  <!--<![endif]-->
                                                                  <!--[if mso]><td class=t100 style="width:600px;padding:0 0 22px 0;"><![endif]-->
                                                                  <p class=t106
                                                                      style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                      ${orderNumber}
                                                                      </p>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <table class=t120 role=presentation cellpadding=0 cellspacing=0
                                                          align=center>
                                                          <tr>
                                                              <!--[if !mso]><!-->
                                                              <td class=t121 style="width:600px;">
                                                                  <!--<![endif]-->
                                                                  <!--[if mso]><td class=t121 style="width:600px;"><![endif]-->
                                                                  <p class=t127
                                                                      style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                      <span class=t128
                                                                          style="font-weight:bold;mso-line-height-rule:exactly;">Lieferadresse</span>
                                                                  </p>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <table class=t151 role=presentation cellpadding=0 cellspacing=0
                                                          align=center>
                                                          <tr>
                                                              <!--[if !mso]><!-->
                                                              <td class=t152 style="width:600px;">
                                                                  <!--<![endif]-->
                                                                  <!--[if mso]><td class=t152 style="width:600px;"><![endif]-->
                                                                  <p class=t158
                                                                      style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                      ${mailObj.shipping.firstname} ${mailObj.shipping.lastname}</p>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <table class=t161 role=presentation cellpadding=0 cellspacing=0
                                                          align=center>
                                                          <tr>
                                                              <!--[if !mso]><!-->
                                                              <td class=t162 style="width:600px;">
                                                                  <!--<![endif]-->
                                                                  <!--[if mso]><td class=t162 style="width:600px;"><![endif]-->
                                                                  <p class=t168
                                                                      style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                      ${mailObj.shipping.street} ${mailObj.shipping.houseNumber}</p>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <table class=t171 role=presentation cellpadding=0 cellspacing=0
                                                          align=center>
                                                          <tr>
                                                              <!--[if !mso]><!-->
                                                              <td class=t172 style="width:600px;">
                                                                  <!--<![endif]-->
                                                                  <!--[if mso]><td class=t172 style="width:600px;"><![endif]-->
                                                                  <p class=t178
                                                                      style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                      ${mailObj.shipping.zip} ${mailObj.shipping.city}</p>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <table class=t171 role=presentation cellpadding=0 cellspacing=0
                                                          align=center>
                                                          <tr>
                                                              <!--[if !mso]><!-->
                                                              <td class=t172 style="width:600px;">
                                                                  <!--<![endif]-->
                                                                  <!--[if mso]><td class=t172 style="width:600px;"><![endif]-->
                                                                  <p class=t178
                                                                      style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;letter-spacing:-0.56px;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">
                                                                      ${mailObj.shipping.country}</p>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div class=t170
                                                          style="mso-line-height-rule:exactly;mso-line-height-alt:30px;line-height:30px;font-size:1px;display:block;">
                                                          &nbsp;</div>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <table class=t181 role=presentation cellpadding=0 cellspacing=0
                                                          align=center>
                                                          ${subTemplate}
                                                      </table>
                                                  </td>
                                              </tr>
                                          </table>
                                      </td>
                                  </tr>
                              </table>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <table class=t41 role=presentation cellpadding=0 cellspacing=0 align=center>
                                  <tr>
                                      <!--[if !mso]><!-->
                                      <td class=t42
                                          style="background-color:#242424;overflow:hidden;width:540px;padding:40px 30px 40px 30px;">
                                          <!--<![endif]-->
                                          <!--[if mso]><td class=t42 style="background-color:#242424;overflow:hidden;width:600px;padding:40px 30px 40px 30px;"><![endif]-->
                                          <table role=presentation width=100% cellpadding=0 cellspacing=0>
                                              <tr>
                                                  <td>
                                                      <table class=t55 role=presentation cellpadding=0 cellspacing=0
                                                          align=center>
                                                          <tr>
                                                              <!--[if !mso]><!-->
                                                              <td class=t56 style="width:600px;">
                                                                  <!--<![endif]-->
                                                                  <!--[if mso]><td class=t56 style="width:600px;"><![endif]-->
                                                                  <p class=t62
                                                                      style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#888888;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;">
                                                                      ${settings.company} | ${settings.street} ${settings.streetNumber} | ${settings.plz} ${settings.city}</p>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <table class=t45 role=presentation cellpadding=0 cellspacing=0
                                                          align=center>
                                                          <tr>
                                                              <!--[if !mso]><!-->
                                                              <td class=t46 style="width:600px;">
                                                                  <!--<![endif]-->
                                                                  <!--[if mso]><td class=t46 style="width:600px;"><![endif]-->
                                                                  <p class=t52
                                                                      style="font-family:BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,'Albert Sans';line-height:22px;font-weight:500;font-style:normal;font-size:12px;text-decoration:none;text-transform:none;direction:ltr;color:#888888;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;">
                                                                      <a class=t64 href="http://localhost:3000/info/datenschutz"
                                                                          style="font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#888888;mso-line-height-rule:exactly;"
                                                                          target=_blank>Datenschutz</a> • <a class=t65
                                                                          href="http://localhost:3000/info/kontakt"
                                                                          style="font-weight:700;font-style:normal;text-decoration:none;direction:ltr;color:#878787;mso-line-height-rule:exactly;"
                                                                          target=_blank>Kontakt</a>
                                                                  </p>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </table>
                                      </td>
                                  </tr>
                              </table>
                          </td>
                      </tr>
                  </table>
              </td>
          </tr>
      </table>
  </div>
</body>

</html>`;

  const mailOptions = {
    from: "danny.nothdurft@gmail.com",
    to: mailObj.shipping.email,
    subject: `Bestellbestätigung - ${orderNumber}`,
    content: "Bestellbestätigung",
    html: emailContent,
    // attachments: [
    //   {
    //     filename: "rechnung.pdf",
    //     path: "https://www.sugarshape.de/out/media/MusterWiderrufsformular.pdf",
    //     contentType: "application/pdf",
    //   },
    // ],
  };

  await transporter.sendMail(mailOptions);
};
