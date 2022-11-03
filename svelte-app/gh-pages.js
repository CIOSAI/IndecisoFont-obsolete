var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/CIOSAI/IndecisoFont.git', // Update to point to your repository  
        user: {
            name: 'CIOSAI', // update to use your name
            email: 'jyinteractive.tw@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)