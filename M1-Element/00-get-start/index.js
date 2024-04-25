/**********************************************
 * Ways to Manipulate HTML
 * 1. Vanilla JS-DOM
 * 2. React (using createElement)
 * 3. React (using JSX)
 **********************************************/

/**********************************************
 * 1. Vanilla JS-DOM (Imperative way!)
 **********************************************/
// UI -Task
// const header = document.createElement('h1'); // 1 node == 1 object
// header.innerText = 'Hello from JS-DOM';
// header.classList = 'text-purple';

// Render - Task
// const body = document.querySelector('body');
// body.append(header);
// Code 4 บรรทัดเทียบเท่า HTML 1 บรรทัด <h1>Hello from JS-DOM</h1>

/**********************************************
 * Pre Setup for React
 * - add <div id="root"></div>
 * - add React , ReactDOM CDN script
 **********************************************/
// UI - TASK
// SYNTAX : React.createElement(tag, attribute, ...children)
const reactHeader = React.createElement(
  'h1',
  { className: 'text-purple' },
  'Hello from ReactElement'
);

// Render - TASK
// -- Render ที่ไหน
const domRoot = document.getElementById('root');
const reactDOMRoot = ReactDOM.createRoot(domRoot);

// --- Render อะไร
// reactDOMRoot.render(reactHeader);

// console.log(ReactDOM)
/**********************************************
 * 2. React (using createElement)
 **********************************************/
/*
// Hint : 3 element
// Hint : How they compose ?
<main>
	<h1>Hello From React</h1>
	<h1>Hello From Sibling</h1>
	<h2> Mor Sibling
			<button class="text-purple">ClickMe</button>
	</h2>
</main>
*/

// UI TASK : Create + Compose
const grandChild = React.createElement('button', { className: 'text-purple' }, 'ClickMe');

const child1 = React.createElement('h1', null, 'Hello From React');
const child2 = React.createElement('h1', null, 'Hello From Sibling');
const child3 = React.createElement('h2', null, grandChild);
const parent = React.createElement('main', null, child1, child2, child3);

//reactDOMRoot.render(parent);

// What's different between JSDOM , ReactElement
// const jsDOMElement = document.createElement('h1');
//const reactElement = React.createElement('h1', null, 'Hi');
//console.log(jsDOMElement); // RealDOM == Heavy weight Object (for represent DOM)
// console.log(reactElement); // Virtual DOM == Light weight Object (for represent DOM)

/**********************************************
 * 3. React (using JSX) : Javascript Syntax Extension
 **********************************************/

// const headerElement1 = React.createElement('h1', null, 'Hi');
const headerElement2 = <button>Hi</button>;

// JSX : HTML Likes Syntax in Javascript
const page = (
  <main>
    <h1>Hello From React</h1>
    <h1>Hello From Sibling</h1>
    <h2>
      Mor Sibling
      <button className='text-purple'>ClickMe</button>
    </h2>
  </main>
);

reactDOMRoot.render(page);

/**********************************************
 **************** Question ********************
 **********************************************
 * 1. What's DOM Element ? Try to console.dir and investigate it
 *	Heavy Object for Represent HTML Tag
 *
 * 2. What's React Element ? Try to console.dir and investigate it
 *  Light Object for Represent HTML Tag
 *
 * 3. How many way to create React Element ?
 *	2 Ways 1. React.createElement 2.JSX
 *
 * 4. What's JSX ?
 *  - HTML Likes Syntax (in JS)
 *
 * 5. How Different between DOM element and React Element ?
 *  - Heavy & Light
 *
 * 6. Benefit of Babel & How to using in basic HTML Project?
 *  - Transpile our code for browser compatible
 *
 * 7. How to using React Library in basic HTML Project ?
 *  - import by CDN
 *
 * 8. What's Virtual DOM
 * - Light weight Object for represent HTML TAG
 * ********************************************
 **********************************************/
