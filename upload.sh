echo "~~~~~Indices~~~~~"
aws s3 --region us-west-1 sync --cache-control no-cache --exclude "*" --include "*.html" printed/ s3://my1stinstrument.com --profile rob
echo "~~~~Cachables~~~~"
aws s3 --region us-west-1 sync printed/ s3://my1stinstrument.com --profile rob
aws s3 --region us-west-1 sync assets/ s3://my1stinstrument.com --profile rob