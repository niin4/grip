### Todo

* `gatsby-image`
    When Contentful image sizes are updated replace `sizes` and `resolutions` with `fluid` and `fixed` 

### Usage

## Develop
`docker run -it --rm -v $(pwd):/site -p 8000:8000 tag develop`

## Stage
In other words, build and serve:
`docker run -it --rm -v $(pwd):/site -p 8000:8000 tag stage`

## Build
Builds production ready site into site/public:
`docker run -it --rm -v $(pwd):/site -p 8000:8000 tag build`

## Run arbitary command inside the container
`docker run -it --rm -v $(pwd):/site -p 8000:8000 tag <YOUR-COMMAND-HERE>`