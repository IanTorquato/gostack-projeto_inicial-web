import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle `
	* {
		box-sizing: border-box;
		margin:0;
		outline: 0;
		padding: 0;
	}

	html, body, #root {
		min-height: 100vh; 
	}

	body {
		background-color: #7159c1;
	}

	body, inpu, button {
		color: #222;
		font-family: Arial, Helvetica, sans-serif;
		font-size: 14px;
	}

	button {
		cursor: pointer;
	}
`