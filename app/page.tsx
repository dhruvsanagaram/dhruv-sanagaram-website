// app/page.tsx
import Head from 'next/head';
import HomeLanding from './home';

export default function Home() {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function toggleDarkMode() {
                if (document.documentElement.classList.contains('dark')) {
                  document.documentElement.classList.remove('dark');
                  localStorage.setItem('theme', 'light');
                } else {
                  document.documentElement.classList.add('dark');
                  localStorage.setItem('theme', 'dark');
                }
              }
              if (localStorage.getItem('theme') === 'dark') {
                document.documentElement.classList.add('dark');
              }
            `,
          }}
        />
      </Head>
      <HomeLanding />
    </>
  );
}
