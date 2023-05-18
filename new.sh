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

echo "Asking further information"
echo -n "Article title --> "
read ARTICLE_TITLE
echo "The article title is : $ARTICLE_TITLE"
# echo -n "Article keywords (seperated by a dash ';') --> "
# read ARTICLE_KEYWORDS
# echo "The article keywords are : $ARTICLE_KEYWORDS"

echo "Creating the main file (article.md)"
echo "# $ARTICLE_TITLE" >$DIRECTORY/article.md

# Getting the current formatted date
# date +'%m/%d/%Y'
# date +'%r'
# CURRENT_DATE=$(date +'%m/%d/%Y')
# echo $CURRENT_DATE

# Updating the list.json
#jq '.'"$ARTICLE_SLUG"'.slug="'$ARTICLE_SLUG'" | .'"$ARTICLE_SLUG"'.title="article_title" | .'"$ARTICLE_SLUG"'.visible=false | .'"$ARTICLE_SLUG"'.date="'$CURRENT_DATE'" | .'"$ARTICLE_SLUG"'.keywords="article_keywords"' list.json | jq . >list.json

echo "Pushing on Git the new update"
git add $DIRECTORY list.json
git commit -S -m "Adding new folder for article $ARTICLE_SLUG"
git push
echo "Article published to Git"
echo "FINISHED"
