para añadir el build a gh-pages

> npm run build
> git add -f dist && git commit -m "Add dist to gh-pages"
> git subtree push --prefix dist origin gh-pages

si te dice que esta por detras (sale error) 
> git push origin --delete gh-pages
i volveis a hacer el git subtree push ...
