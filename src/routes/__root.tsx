import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import appCss from "../styles.css?url";

const APP_NAME = "AADITYA. | Portfolio";

const themeBoot = `try{var t=localStorage.getItem('theme')||'light';document.documentElement.classList.toggle('dark',t==='dark');document.documentElement.style.colorScheme=t}catch(e){}`;

const removeInjectedButtons = `
(function(){
  function clean(){
    document.querySelectorAll('a,button').forEach(function(el){
      var t=(el.textContent||'').toLowerCase();
      if(t.includes('download cv')||t.includes('whatsapp')||t.includes('hire me')){
        el.remove();
      }
    });
    document.querySelectorAll('script[src*="grok-app-builder/extensions"]').forEach(function(s){s.remove();});
  }
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',clean);
  }else{clean();}
  setTimeout(clean,500);
  setTimeout(clean,1500);
})();
`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "Aaditya, founder of CodeXViber — modern websites, creative design, AI solutions and digital products. Ideas → Code → Impact.",
      },
      { name: "theme-color", content: "#dc2626" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: () => (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: themeBoot }} />
        <script dangerouslySetInnerHTML={{ __html: removeInjectedButtons }} />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
