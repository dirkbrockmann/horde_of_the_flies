[cc-by]: http://creativecommons.org/licenses/by/4.0/
[cc-by-image]: https://i.creativecommons.org/l/by/4.0/88x31.png
[cc-by-shield]: https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg

# Horde of the Flies

[![CC BY 4.0][cc-by-shield]][cc-by]

This explorable illustrates one of the most fundamental and simple models for swarming and collective behavior in animal populations: The [Vicsek-Model](https://en.wikipedia.org/wiki/Vicsek_model). Individuals move around at constant speed and align their heading according to the mean heading of others in the vicinity.

The explorable is part of the [**Complexity Exporables Collection**](https://www.complexity-explorables.org). For more information about the system and its behavior consult the explorable
> [**"Horde of the Flies" - The Vicsek-Model**](https://www.complexity-explorables.org/explorables/horde-of-the-flies/)

## Installation & Use

Out of the box you can use the explorable in a basic `index.html` file like this

```html
<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width,initial-scale=1">
		<script src="https://cdn.jsdelivr.net/npm/@explorables/horde_of_the_flies"></script>
	</head>
	<body class="avenir pa3 pa5-ns tj">
	    <div id="explorable_container"></div>
	</body>
	<script type="text/javascript">
		horde_of_the_flies.load("explorable_container")
	</script>
</html>
```
The header `<script>` tag loads the bundle, the `<div>` in the document is the container in which the explorable gets anchored when the function `horde_of_the_flies.load()` gets executed at the bottom. The `load` function needs the `<div>` container `id` as an agument.

## Installing the whole package locally

Clone repository:

```shell
git clone https://github.com/dirkbrockmann/horde_of_the_flies.git
```


Go to the directory, install, build and show using `npm`:

1. `cd horde_of_the_flies`
2. `npm install`
3. `npm run build`
4. `npm run show`

--- 

## License

This work is licensed under a
[Creative Commons Attribution 4.0 International License][cc-by].

[![CC BY 4.0][cc-by-image]][cc-by]

