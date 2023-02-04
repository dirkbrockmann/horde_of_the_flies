# Spin Wheels

This explorable illustrates some interesting and beautiful properties of oscillators that are spatially arranged on a lattice and interact with their neighbors by phase coupling. It's the [Kuramoto Model](https://en.wikipedia.org/wiki/Kuramoto_model) on a square lattice.

The explorable is part of the [**Complexity Exporables Collection**](https://www.complexity-explorables.org). For more information about the system and its behavior consult the explorable
> [**"Spin Wheels" - Phase-coupled oscillators on a lattice**](https://www.complexity-explorables.org/explorables/spin-wheels/)

## Installation & Use

Out of the box you can use the explorable in a basic `index.html` file like this

```html
<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width,initial-scale=1">
		<script src="https://cdn.jsdelivr.net/npm/@explorables/spinwheels"></script>
	</head>
	<body class="avenir pa3 pa5-ns tj">
	    <div id="explorable_container"></div>
	</body>
	<script type="text/javascript">
		spinwheels.load("explorable_container")
	</script>
</html>
```
The header `<script>` tag loads the bundle, the `<div>` in the document is the container in which the explorable gets anchored when the function `spinwheels.load()` gets executed at the bottom. The `load` function needs the `<div>` container `id` as an agument.

## Installing the whole package locally

Clone repository:

```shell
git clone https://github.com/dirkbrockmann/spinwheels.git
```


Go to the directory, install, build and show using `npm`:

1. `cd spinwheels`
2. `npm install`
3. `npm run build`
4. `npm run show`



