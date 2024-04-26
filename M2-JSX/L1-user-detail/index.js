/**********************************************
 * 🚀 Welcome to the React Practice Lab! 🚀
 * 🚀 Relearn Solution - All Rights Reserved 🚀
 *
 * 📝 Problem Statement:
 * - render หน้า web โดยใช้ JSX ดังนี้
 * - แสดงชื่อ ชื่อจริง นามสกุลของตัวเอง ใน tag <h1>
 * - แสดงอายุใน tag <p> (ให้เอาปีปัจจุบันลบด้วยปีเกิด)
 *
 * 🎯 Objective : พื้นฐานการใช้งาน JSX
 *
 * 🚧 Challenge
 * - แสดงผลโดยใช้ตัวแปรเก็บข้อมูลแทนการ HardCode ลง JSX
 *
 * 🌈 Enjoy the coding journey, and remember:
 *    "The more you code, the more you learn!" 🚀🌐
 **********************************************/

// UI
const profileElement = (
  <>
    <h1>Pavit Pimchanagul</h1>
    <p>Age : {2024 - 2000}</p>
  </>
);

// Render
const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);
root.render(profileElement);
