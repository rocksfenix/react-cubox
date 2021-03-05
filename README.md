# react-cubox

> Build your own Cube 3D made with React

[![NPM](https://img.shields.io/npm/v/react-cubox.svg)](https://www.npmjs.com/package/react-cubox) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This component will you help to build a fancy Cube 3D interactive, simulated via CSS transformations with React.

See [usage and demo](https://react-cubox-website.vercel.app/).

## Install

```bash
npm install --save react-repeat
```

## Usage

Only you need the ``Cube`` and ``Face`` components, example:

```jsx
import { Cube, Face } from 'react-cubox'

const App = () => (
  <div>
    <Cube>
      <Face />
    <Cube>
  </div>
)

```

You can pass the size in px via ``size`` prop:

```jsx
import { Cube, Face } from 'react-cubox'

const App = () => (
  <div>
    <Cube size={200}>
      <Face />
    <Cube>
  </div>
)

```

You can pass any html or React components inside of the ``<Face>`` component. If you only pass one ``<Face>`` this will be repeated 6 times once by every face of the cube:

```jsx
import { Cube, Face } from 'react-cubox'

const App = () => (
  <div>
    <Cube>
      <Face>
        <span>⚡</span>
      </Face>
    <Cube>
  </div>
)

```

If you pass two or more ``<Face>`` this will repeat until to fill the six sides.

```jsx
import { Cube, Face } from 'react-cubox'

const App = () => (
  <div>
    <Cube>
      <Face>
        <span>⚡</span>
      </Face>
      <Face>
        <span>🔥</span>
      </Face>
    <Cube>
  </div>
)

```

You can pass the ``bgColor`` to change the base color:

```jsx
import { Cube, Face } from 'react-cubox'

const App = () => (
  <div>
    <Cube bgColor='red'>
      <Face>
        <span>⚡</span>
      </Face>
      <Face>
        <span>🔥</span>
      </Face>
    <Cube>
  </div>
)

```

You can pass bgColor different for every ``Face``:
```jsx
import { Cube, Face } from 'react-cubox'

const App = () => (
  <div>
    <Cube>
      <Face bgColor='red'>
        <span>⚡</span>
      </Face>
      <Face bgColor='blue'>
        <span>🔥</span>
      </Face>
    <Cube>
  </div>
)

```

The opacity is dynamic for the active or visible face, this is controlled by ``behavior`` prop, by default has ``translucid`` the opacity will be less for the active face, you can pass ``active`` and the face active will be more opaque, you can controll the opacity on every state with props ``activeOpacity`` and ``inactiveOpacity`` and define the transition duration with ``opacityTransitionTime``:

```jsx
import { Cube, Face } from 'react-cubox'

const App = () => (
  <div>
    <Cube
      behavior='active'
      bgColor='lime'
      activeOpacity={0.9}
      inactiveOpacity={0.3}
      opacityTransitionTime={450}
    >
      <Face>
        <span>⚡</span>
      </Face>
      <Face>
        <span>🔥</span>
      </Face>
    <Cube>
  </div>
)

```

You can pass the color usign ``bgColor`` by default the material is ``gradient`` but you can pass ``solid`` to avoid the gradient.

```jsx
import { Cube, Face } from 'react-cubox'

const App = () => (
  <div>
    <Cube
      bgColor='lime'
      material='solid'
    >
      <Face>
        <span>⚡</span>
      </Face>
      <Face>
        <span>🔥</span>
      </Face>
    <Cube>
  </div>
)

```

Also you can pass ``texture`` yo the ``material`` prop and define the prop ``texture`` to add a background image:
```jsx
import { Cube, Face } from 'react-cubox'

const App = () => (
  <div>
    <Cube
      bgColor='lime'
      material='texture'
      texture='https://your-image-url/image.jpg'
    >
      <Face>
        <span>⚡</span>
      </Face>
      <Face>
        <span>🔥</span>
      </Face>
    <Cube>
  </div>
)

```







<!-- 
### Composition

The declarative composition that we expected:
```js
<Cube
  bgColor='gold'
  frozen={false}
  activeOpacity={0.5}
  inactiveOpacity={1}
  opacityDuration={0.5}
  opacity={0.8}
  showFaceNumber
  speed={0.1}
  sensivity={0.1}
  touchSensivity={2}
  sensivityFade={0.87}
  onFaceClick={console.log}
  onMove={console.log}
  onMoveEnd={console.log}
  refController={controllerRef}
  texture='https://...'
  material='solid|gradient|texture'
  behavior='opaque|active|translucid'
>
  <Face bgColor='blue' />
  <Face bgColor='gold' />
  <Face>
    <span>⚡</span>
  <Face>
<Cube>

```

The full documentation is still in progress. -->

<!-- 
### Remote controller

By default, the movements will be listened in document, but you can pass a React ref to control and listen the movements on another element.

```jsx
<div ref={controllerRef}>
  Remote controller 🕹️
</div>
<Cube
  bg='red'
  refController={controllerRef}
  material='gradient'
  behavior='translucid'
>
  <Face>
    <span>⚡</span>
  <Face>
<Cube>
```

----- -->

This component uses Standard JS

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## License

MIT © [rocksfenix](https://github.com/rocksfenix)
