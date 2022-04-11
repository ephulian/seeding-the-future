import React, { useEffect, useRef, useState } from 'react';
import '../Styles/Visualisation.css';

export default function Visualisation() {
	const [isStarted, setStarted] = useState(false);
	const count = useRef(0);

	function generateQueryConstructor(query) {
		for (const key in query) {
			this[key] = query[key];
		}
	}

	function randomNumber(from, to) {
		return Math.floor(Math.random() * (to + 1)) + from;
	}

	function randomInArray(arr) {
		const index = randomNumber(0, arr.length - 1);
		return arr[index];
	}

	const lorem12 = [
		'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere vitae ratione mollitia.',
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem consequuntur quaerat suscipit',
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi enim quas in?',
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique facilis sed tempore.',
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab minima cupiditate.',
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis harum vero voluptas!',
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores ad dicta.',
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. At animi dolore molestiae.',
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab minima cupiditate.',
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis harum vero voluptas!',
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores ad dicta.',
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. At animi dolore molestiae.',
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique facilis sed tempore.',
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab minima cupiditate.',
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis harum vero voluptas!',
	];

	const matrixCharacters = lorem12;

	class MatrixEffect {
		constructor() {
			generateQueryConstructor.call(this, ...arguments);
		}
		get ctx() {
			if (this.canvas) {
				return this.canvas.getContext('2d');
			}
		}

		build() {
			this.#buildCanvas();
			this.#buildSymbols();
			this.#buildAnimation();
		}
		#buildCanvas() {
			const { canvas, settings } = this;

			if (canvas) {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
				this.totalColumns = Math.round(canvas.width / settings.columnSize);
			}
		}
		#buildSymbols() {
			if (this.canvas) {
				this.symbols = [...new Array(this.totalColumns)].map((_, index) => {
					const randomY = randomNumber(
						0,
						Math.round(this.canvas.height / this.settings.columnSize)
					);

					const randomX = randomNumber(0, Math.round(this.canvas.width / this.settings.columnSize));

					const matrixSymbolSettings = {
						matrixEffect: this,
						// text: randomInArray(matrixCharacters),
						text: 'abc',
						x: index,
						y: randomY,
					};
					return new MatrixSymbol(matrixSymbolSettings);
				});
			}
		}
		#buildAnimation() {
			const { ctx } = this;
			if (ctx) {
				ctx.font = `${this.settings.columnSize}px monospace`;
			}
		}

		/////

		startAnimation() {
			const matrixAnimation = new MatrixAnimation({ matrixEffect: this });
			matrixAnimation.animate();
		}
	}

	class MatrixAnimation {
		constructor() {
			generateQueryConstructor.call(this, ...arguments);
		}
		animate() {
			if (this.matrixEffect.ctx) {
				const { ctx, canvas, symbols, settings } = this.matrixEffect;

				ctx.fillStyle = `rgba( 0, 0, 0, 0.${settings.fadeOutEffect} )`;
				ctx.textAlign = 'center';

				ctx.fillRect(0, 0, canvas.width, canvas.height);

				symbols.forEach((symbol) => symbol.draw(ctx));

				setTimeout((_) => {
					requestAnimationFrame(this.animate.bind(this));
					console.log(count.current);
				}, settings.fallingSpeed);
			}
		}
	}

	class MatrixSymbol {
		constructor() {
			generateQueryConstructor.call(this, ...arguments);
		}
		draw() {
			const {
				canvas,
				ctx,
				settings: { columnSize, symbolsColors },
			} = this.matrixEffect;

			ctx.fillStyle = randomInArray(symbolsColors);

			const xPos = this.x * columnSize;
			const yPos = this.y * columnSize;
			ctx.fillText(this.text, xPos, yPos);

			this.#resetText();
			this.#resetToTop({ xPos, yPos, canvas });
		}
		#resetText() {
			this.text = randomInArray(matrixCharacters);
		}
		#resetToTop({ xPos, yPos, canvas }) {
			const delayCondition = Math.random() > 0.98;
			this.y = yPos > canvas.height && delayCondition ? 0 : this.y + 1;
			// this.x = xPos > canvas.width && delayCondition ? 0 : this.x + 0.2;
		}
	}

	////////////

	const canvas = document.getElementsByTagName('canvas')[0];

	const matrixEffect = new MatrixEffect({
		canvas,
		settings: {
			animationSpeed: '10',
			animation: 'y',
			columnSize: 13,
			symbolsColors: ['white'],
			fadeOutEffect: '35',
			fallingSpeed: 600,
			count: count,
		},
	});

	const handleClick = () => {
		if (!isStarted) {
			setStarted(true);
		} else {
			setStarted(false);
		}
	};

	useEffect(() => {
		matrixEffect.build();
		matrixEffect.startAnimation();
	}, [isStarted]);

	return (
		<>
			<canvas className='visualisation-container' id='canvas'></canvas>
			<button
				id='start-animation'
				className={isStarted ? 'hide' : ''}
				onClick={() => handleClick()}
			>
				START ANIMATION
			</button>
		</>
	);
}
