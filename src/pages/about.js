import React from 'react'

import Layout from '../components/layout'
import { Image } from 'cloudinary-react';


export default () => (
  <Layout>
    <p>

      This website serves as a blog for my media business. I want to build the very best websites. Using all the latest tech and state of the art code.

      I have created this website to blog about my life as a developer. I will keep this website updated along with my main website ( <a href="https://www.garethdavies.tech">Here</a> ) with all
      the latest news such as new tech releases or new web development tech.<br />
      <h2>Me:</h2>
      <Image cloudName="b2b-webmasters" publicId="20181229_222949" width="300" crop="scale" />

    </p>
    <p>

      <h2>Built with</h2> <br /><img height="250" width="250" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDYgMjgiPgogIDxwYXRoIGQ9Ik02Mi45IDEyaDIuOHYxMGgtMi44di0xLjNjLTEgMS41LTIuMyAxLjYtMy4xIDEuNi0zLjEgMC01LjEtMi40LTUuMS01LjMgMC0zIDItNS4zIDQuOS01LjMuOCAwIDIuMy4xIDMuMiAxLjZWMTJ6bS01LjIgNWMwIDEuNiAxLjEgMi44IDIuOCAyLjggMS42IDAgMi44LTEuMiAyLjgtMi44IDAtMS42LTEuMS0yLjgtMi44LTIuOC0xLjYgMC0yLjggMS4yLTIuOCAyLjh6bTEzLjUtMi42VjIyaC0yLjh2LTcuNmgtMS4xVjEyaDEuMVY4LjZoMi44VjEyaDEuOXYyLjRoLTEuOXptOC41IDBjLS43LS42LTEuMy0uNy0xLjYtLjctLjcgMC0xLjEuMy0xLjEuOCAwIC4zLjEuNi45LjlsLjcuMmMuOC4zIDIgLjYgMi41IDEuNC4zLjQuNSAxIC41IDEuNyAwIC45LS4zIDEuOC0xLjEgMi41cy0xLjggMS4xLTMgMS4xYy0yLjEgMC0zLjItMS0zLjktMS43bDEuNS0xLjdjLjYuNiAxLjQgMS4yIDIuMiAxLjIuOCAwIDEuNC0uNCAxLjQtMS4xIDAtLjYtLjUtLjktLjktMWwtLjYtLjJjLS43LS4zLTEuNS0uNi0yLjEtMS4yLS41LS41LS44LTEuMS0uOC0xLjkgMC0xIC41LTEuOCAxLTIuMy44LS42IDEuOC0uNyAyLjYtLjcuNyAwIDEuOS4xIDMuMiAxLjFsLTEuNCAxLjZ6bTYuMS0xLjFjMS0xLjQgMi40LTEuNiAzLjItMS42IDIuOSAwIDQuOSAyLjMgNC45IDUuM3MtMiA1LjMtNSA1LjNjLS42IDAtMi4xLS4xLTMuMi0xLjZWMjJIODNWNS4yaDIuOHY4LjF6bS0uMyAzLjdjMCAxLjYgMS4xIDIuOCAyLjggMi44IDEuNiAwIDIuOC0xLjIgMi44LTIuOCAwLTEuNi0xLjEtMi44LTIuOC0yLjgtMS43IDAtMi44IDEuMi0yLjggMi44em0xMyAzLjVMOTMuNyAxMkg5N2wzLjEgNS43IDIuOC01LjdoMy4ybC04IDE1LjNoLTMuMmwzLjYtNi44ek01NCAxMy43aC03djIuOGgzLjdjLS42IDEuOS0yIDMuMi00LjYgMy4yLTIuOSAwLTUtMi40LTUtNS4zUzQzLjEgOSA0NiA5YzEuNiAwIDMuMi44IDQuMiAyLjFsMi4zLTEuNUM1MSA3LjUgNDguNiA2LjMgNDYgNi4zYy00LjQgMC04IDMuNi04IDguMXMzLjQgOC4xIDggOC4xIDgtMy42IDgtOC4xYy4xLS4zIDAtLjUgMC0uN3oiLz4KICA8cGF0aCBkPSJNMjUgMTRoLTd2Mmg0LjhjLS43IDMtMi45IDUuNS01LjggNi41TDUuNSAxMWMxLjItMy41IDQuNi02IDguNS02IDMgMCA1LjcgMS41IDcuNCAzLjhsMS41LTEuM0MyMC45IDQuOCAxNy43IDMgMTQgMyA4LjggMyA0LjQgNi43IDMuMyAxMS42bDEzLjIgMTMuMkMyMS4zIDIzLjYgMjUgMTkuMiAyNSAxNHptLTIyIC4xYzAgMi44IDEuMSA1LjUgMy4yIDcuNiAyLjEgMi4xIDQuOSAzLjIgNy42IDMuMkwzIDE0LjF6IiBmaWxsPSIjZmZmIi8+CiAgPHBhdGggZD0iTTE0IDBDNi4zIDAgMCA2LjMgMCAxNHM2LjMgMTQgMTQgMTQgMTQtNi4zIDE0LTE0UzIxLjcgMCAxNCAwek02LjIgMjEuOEM0LjEgMTkuNyAzIDE2LjkgMyAxNC4yTDEzLjkgMjVjLTIuOC0uMS01LjYtMS4xLTcuNy0zLjJ6bTEwLjIgMi45TDMuMyAxMS42QzQuNCA2LjcgOC44IDMgMTQgM2MzLjcgMCA2LjkgMS44IDguOSA0LjVsLTEuNSAxLjNDMTkuNyA2LjUgMTcgNSAxNCA1Yy0zLjkgMC03LjIgMi41LTguNSA2TDE3IDIyLjVjMi45LTEgNS4xLTMuNSA1LjgtNi41SDE4di0yaDdjMCA1LjItMy43IDkuNi04LjYgMTAuN3oiIGZpbGw9IiM2MzkiLz4KPC9zdmc+Cg=="></img>
    </p>
    <h1>Contact Us</h1>
    <form
      name="contact-form"
      method="post"
      data-netlify="true"
      netlify-honeypot="bot-field"
      action="/thanks"

    >
      <input hidden className="hidden" name="bot-field" />
      <input type="email" placeholder="Email" name="email" />
      <br />
      <br />
      <input type="text" placeholder="Name" name="name" />
      <div data-netlify-recaptcha />
      <button>Send</button>
    </form>
  </Layout>
)
