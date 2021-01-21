import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    try {
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: <>{initialProps.styles}</>,
      };
    } catch (ex) {}
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-186479295-1"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              const urlParams = new URLSearchParams(window.location.search);
              const bool = urlParams.get('me');
              let me;

              if (bool && (bool === 'true' || bool === 'false')) {
                me = JSON.parse(bool);
              }

              if (!(
                  location.hostname === "localhost" || 
                  location.hostname === "127.0.0.1" || 
                  location.hostname.includes("192.168")
                  ) && !me) 
              {
                console.log("google analytics is connected")
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-186479295-1');
              }
              `,
            }}
          />

          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                if (!(
                    location.hostname === "localhost" || 
                    location.hostname === "127.0.0.1" || 
                    location.hostname.includes("192.168")
                    )) 
                {
                    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                    (function(){
                    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                    s1.async=true;
                    s1.src='https://embed.tawk.to/5ff48553c31c9117cb6bb0ae/1er9ihk5r';
                    s1.charset='UTF-8';
                    s1.setAttribute('crossorigin','*');
                    s0.parentNode.insertBefore(s1,s0);
                    })();
                }
                `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
