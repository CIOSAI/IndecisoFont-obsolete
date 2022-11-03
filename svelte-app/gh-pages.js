import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/CIOSAI/IndecisoFont', // Update to point to your repository
  user: {
   name: 'CIOSAI', // update to use your name
   email: 'jyinteractive.tw@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);