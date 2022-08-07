# CLI program used to create a new dedicated folder for an upcoming article

# TO BE IMPLEMENTED
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
fi

ARTICLE_SLUG=$1
echo $ARTICLE_SLUG
DIRECTORY=articles/$ARTICLE_SLUG
if [[ -d "$DIRECTORY" ]]; then
    echo "$DIRECTORY already exists on your filesystem."
    exit 1
fi

echo "Creating the folder"
mkdir $DIRECTORY

echo "Creating the main file (article.md)"
touch $DIRECTORY/article.md

echo "Pushing on Git the new update"
git add $DIRECTORY
git commit -m "Adding new folder for article $ARTICLE_SLUG"
git push

date +'FORMAT'

# Getting the current formatted date
date +'%m/%d/%Y'
date +'%r'
CURRENT_DATE=$(date +'%m/%d/%Y')
echo $CURRENT_DATE

cat list.json | jq '.'"$ARTICLE_SLUG"'.slug="'$ARTICLE_SLUG'" | .'"$ARTICLE_SLUG"'.title="Article title" | .'"$ARTICLE_SLUG"'.visible=false | .'"$ARTICLE_SLUG"'.date="'$CURRENT_DATE'" | .'"$ARTICLE_SLUG"'.keywords="---"' >new_list.json
