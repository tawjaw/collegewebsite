import { defineUserConfig, defaultTheme  } from 'vuepress'

export default defineUserConfig({
  lang: 'en-US',
  base:'/~tjawhar/javaweb/',
  title: 'Java Web Programming',
  description: 'Course given by Tawfiq Jawhar at Champlain College St-Lambert',
  theme: defaultTheme({
    // default theme config
    navbar: [
      {
        text: 'Labs',
        children: [
            {
              text: 'Lab 2',
              link: '/lab2/'
            },
            {
              text: 'Lab 3',
              link: '/lab3/'
            },
          ],
        },{
        text: 'References',
        link: '/references/',
        children: [
            {
              text: 'Functional Programming',
              link: '/references/functional.html'
            },
            {
                text: 'Three Dots',
                link: '/references/threedots.html'
              },
              {
                text: 'Conditional Rendering',
                link: '/references/conditional.html'
              },
              {
                text: 'useEffect',
                link: 'https://dmitripavlutin.com/react-useeffect-explanation/'
              },
          ],
      },
      {
        text: 'Home',
        link: 'http://champlaincsc.com/~tjawhar/'
      }
    ],
  }),
})