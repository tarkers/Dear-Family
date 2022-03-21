// import Sitemap from 'react-router-sitemap'
// require('@babel/register');

// const router = require('./router').default;
// // const Sitemap = require('./').default;

// (
// 	new Sitemap(router)
// 		.build('https://tarkers.github.io/Dear-Family')
// 		.save('./sitemap.xml')
// );
 const pkg =require('react-router-sitemap');
// import pkg from 'react-router-sitemap';
const { default: Sitemap } = pkg

const router = [
    {
        path: '/',
    },
    {
        path: '*',
    },
    {
        path: '/story',
    },
    {
        path: '/letter',
    },
    {
        path: '/download/:id',
    },
]


new Sitemap(router)
	.build('https://tarkers.github.io/Dear-Family/')
	.save('./sitemap.xml')