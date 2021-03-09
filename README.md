[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![License: HorribleLicense](https://img.shields.io/badge/HorribleLicense-HL-grey)](https://www.google.ca)

# HorribleGLEngine
An attempt to clone CS1.6 in with WebGL :/ 

### About
No, I'm not literally drawing out every vertex with glStart(GL_TRIANGLES); ... glEnd(); but I'm absolutely amazed at [this guy](https://www.youtube.com/channel/UCkJYfCcenyjHr3DZ9JWHbkQ)
and I've been watching him create a Game Engine from scratch just baffled lol. He's quite gifted in algorithm development, but I think the lack of a basic 
precalculus background ... not knowing how to calculate the Field of View of a pinhole camera, for example:

<img src="https://github.com/HorribleProgram/HorribleGLEngine/blob/master/resources/fov.png" align="center" height="200" width="200">

leads him to make a lot of weird decisions (_I stuff think he's a genius btw and he's done more than I would ever be able too_). Secondly, I don't see OpenGL full screen windows being a thing for much longer. Full screen experiences are fun, but I have a theory that we're going to start seeing more weird places to embed 3D environments, :man_shrugging: 

#### About this Repository
There's 2 "main" branches:

1. master
2. second-master (...lol...)

second-master is actually just a "client-side" version that won't include server-side node/express features, it just serves static files.
It's also more of a "testing" playground. Other branches are just feature and issue branch hotfixes and whatnot.