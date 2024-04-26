/**********************************************
 * 🚀 Welcome to the React Practice Lab! 🚀
 * Relearn Solution - All Rights Reserved
 *
 * 🎯 Objective :
 * - Self Closing Tag
 * - JSX Attribute !== HTML Attribute
 *
 * 📝 Problem Statement:
 * - ให้สร้าง tag <label> และ <input>
 * - tag <input> มี attribute ต่างๆดังนี้
 * 			- มี class ชื่อ username
 * 			- มี id คือ username
 * 			- มี name เท่ากับ username
 * - tag <label>
 * 			- ให้ใส่ข้อความว่า Username
 * 			- ทำให้สามารถกด tag <label> แล้วมีการ auto-focus ที่ tag <input>
 * - ให้ render หน้า web เพื่อแสดง tag ทั้งสองในแบบ JSX
 *
 * 🚧 Challenge
 *
 * 🌈 Enjoy the coding journey, and remember:
 *    "The more you code, the more you learn!" 🚀🌐
 **********************************************/

// UI
// const inputElement = (
//   <>
//     <label htmlFor='_username'>Username </label>
//     <input className='username' id='_username' name='username' />
//   </>
// );

// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

// root.render(inputElement);
