/******************************************************************
 * What's JSX
 * Def :  HTML likes Syntax in JS file, but not actual HTML
 *
 * --------------------------------------------------------------
 * Six Keys Concept
 * --------------------------------------------------------------
 * | 1 | One Root Parent ⭐️
 * | 2 | Need Closing Tag / Self Closing Tag
 * | 3 | Insert JS-Expression inside bracket {} ⭐️
 * | 4 | Cannot Render null, undefined, true, false, object(Error)
 * | 5 | JSX Attribute: camelCase (Props) ⭐️
 * | 6 | Styles Obj (inline-style)
 * --------------------------------------------------------------
 *
 * Additional
 * 7. Fragment
 * 8. CodeComment
 *****************************************************************/

/**********************************************
 * DIY : Implement ReactDOM (just Once)
 **********************************************/
const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

/**********************************************
 * 1 : One Root Parent (1 JSX จะมี Parent แค่ 1 ตัว - ใช้ Fragment ช่วยได้)
 **********************************************/
// Not Valid ❌ (multiple root)
// const element = (
//     <h1>element-1</h1>
//     <h1>element-2</h1>

// );

// Valid ✅
// const element = (
//   <div>
//     <h1>element-1</h1>
//     <h1>element-2</h1>
//   </div>
// );

// ReactFragment ✅
// const element = (
//   <>
//     <h1>element-1</h1>
//     <h1>element-2</h1>
//   </>
// );

// root.render(element);
/**********************************************
 * 2 : Need Closing Tag / Self Closing Tag
 **********************************************/
/*
imgUrl : https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
*/

// const imgElement = <img> //  Unterminated JSX contents.❌
// const imgElement = <img></img>; ✅
// const imgElement = <img />; ✅
const imgElement = (
  <img src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
);

// root.render(imgElement);

/**********************************************
 * 3 : Insert JS-Expression inside bracket {}
 * - Number, ArithMatic Expression
 * - String, Template Literal
 * - Array
 * - Function Result
 * - Ternary, Logical Operator
 **********************************************/
// #### 1.Primitive

//  ### Number
// const element = <h1>5</h1>; // 5
// const element = <h1>2+3</h1>; // 2+3
// const element = <h1>{2 + 3}</h1>; // 5

// let num = 10;
// const element = <h1>{num + 3}</h1>; // 5

// ### String
// const element = <h1>Hi</h1>; // Hi
// const element = <h1>{Hi}</h1>; // variable Hi
// const element = <h1>{'Hi'}</h1>; //  String Hi
// const element = <h1>{'Hi' + ' ' + 'Guest'}</h1>; //  String Hi

// ### 2.EMPTY NODE (null,boolean,undefined จะปรินท์ไม่ได้)

// const element = <h1>true</h1>;
// const element = <h1>undefined</h1>;
// const element = <h1>null</h1>;

// const element = <h1>{true}</h1>;
// const element = <h1>{null}</h1>;
// const element = <h1>{undefined}</h1>;

// #### 3.Collection
// Array of String ✅ or Other Primitive
// const friends = ['Tony', 'Tu', 'Pom'];
// const element = <h1>{friends}</h1>;

// Array of JSX ✅
// const todoList = [<li>todo-1</li>, <li>todo-2</li>, <li>todo-3</li>];
// root.render(<ul>{todoList}</ul>);

// Object ❌  Error : Objects are not valid as a React child
// const user = { name: 'John', age: 32 };
// root.render(<h1>{user}</h1>);

// ##### 4. Complex Expression

// Ternary ✅
// const isAdmin = false;
// const element = <h1>{isAdmin ? 'Hi Admin' : 'Hi Guest'}</h1>;

// Function Result ✅
// function square(n) {
//   return n ** 2;
// }

// const element = <h1>{square(5)}</h1>; // <h1>{25}</h1>

// For Loop - Other Control Structure ❌
// const element = (
//   <h1>
//     {
//       // for(let i = 0; i < 10; i++) {}
//       // if(true) {}
//       // switch(5) {}
//       // while (true) {}
//     }
//   </h1>
// );

// ##### 5.React Element | Node

const element = (
  <div>
    <h1>Understand JSX</h1>
    <button>Yes</button>
  </div>
);

root.render(element);

/**********************************************
 * 4 : Cannot Render null, undefined, true, false, object(Error)
 **********************************************/

/**********************************************
 * 5 : JSX Attribute: camelCase (Props)
 * - class -> className
 * - for -> htmlFor
 * - onclick -> onClick
 * - onsubmit -> onSubmit
 **********************************************/
// const header = <h1 className='text-red'>Hi</h1>;

const form = (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      alert('Submit');
    }}
  >
    <input type='radio' name='language' id='html' />
    <label htmlFor='html'>HTML</label>
    <input type='radio' name='language' id='css' />
    <label htmlFor='css'>CSS</label>
    <button type='button' onClick={() => alert('Reset')}>
      Reset
    </button>
    <button type='submit'>Submit</button>
  </form>
);

// root.render(form);

/**********************************************
 * 6. Styles Obj (inline-style)
 * using Object for describe style
 * all dash CSS property -> camelCase
 * all value in CSS -> JS Datatype
 **********************************************/

/**********************************************
 * 7. Fragment
 * 8. CodeComment
 **********************************************/

// ทั้งไฟล์คือ JS
// เฉพาะส่วนที่มี tag คือ JSX
const page = (
  <>
    <header></header>
    {/*<main></main>*/}
    <footer></footer>
  </>
);

/******************************************************************
 * 🚀 CodeCamp Thailand - Relearn Solution Co. 🌐
 *
 * 👤 Author: Pavit Pimchanagul
 * 📅 Date: 2023-12 (CC16)
 *
 * 📜 Description:
 *    [Brief description of the code or file]
 *
 * 🛠️ Modification History:
 *    [Date] - 🧑‍💻 [ModifiedBy]
 *       [Description of changes]
 *
 * 🌟 Elevate your coding journey with Relearn Solution!
 *    Happy coding, fellow CodeCampers! 🚀✨
 ******************************************************************/
