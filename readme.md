para añadir el build a gh-pages

npm run build
git add -f dist && git commit -m 'Add dist to gh-pages'
git subtree push --prefix dist origin gh-pages