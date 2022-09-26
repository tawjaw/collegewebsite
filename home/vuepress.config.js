import { defineUserConfig, defaultTheme  } from 'vuepress'

export default defineUserConfig({
  lang: 'en-US',
  base:'/~tjawhar/',
  title: 'Tawfiq Jawhar',
  description: 'Computer Science Teacher at Champlain College St-Lambert',
  theme: defaultTheme({
    // default theme config
    navbar: [
      {
        text: 'Courses',
        children: [
            {
              text: 'Java Web Programming',
              link: 'http://champlaincsc.com/~tjawhar/javaweb/'
            },
          ],
        }
    ],
  }),
})