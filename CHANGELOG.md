# Changelog
All notable changes to **Image Gallery** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.2.1] - 2019-07-12
### Changed
- Subdependency *lodash.template* version due to vulnerabity issue.

## [0.2.0] - 2019-07-12
### Added
- Frontend Web with React
  - Libraries *axios*, *React Router* and *Socket.IO-client*.
  - Pages *Feed* and *New Post*.
  - Component *Header*.
- REST API with NodeJS
  - **Post** *controller*:
    - *like*
  - **Post** *routes*:
    - POST */post/:id/like*

## [0.1.0] - 2019-07-01
### Added
- REST API with NodeJS
  - Libraries *CORS*, *Express*, *mongoose*, *multer*, *sharp* and *Socket.IO*.
  - Libraries *ESLint* and *nodemon* exclusively for development purposes.
  - **Post** *model*:
    - *author*
    - *place*
    - *description*
    - *hashtags*
    - *imageUrl*
    - *likes*
    - *timestamps* (*createdAt* and *updatedAt*)
  - **Post** *controller*:
    - *getAll*
    - *getById*
    - *getByAuthor*
    - *create*
  - **Post** *routes*:
    - GET */post*
    - GET */post/:id*
    - GET */post/byAuthor/:author*
    - POST */post*
  - Static images acessible through */files/:filename* route