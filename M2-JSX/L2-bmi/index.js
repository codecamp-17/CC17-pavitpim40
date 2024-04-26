/**********************************************
 * 🚀 Welcome to the React Practice Lab! 🚀
 * Relearn Solution - All Rights Reserved
 *
 * 🎯 Objective : การใช้ผลลัพธ์ของฟังก์ชันแสดงผลใน JSX
 *
 * 📝 Problem Statement:
 * - ให้สร้างฟังก์ชัน calcBMI เพื่อคำนวณค่า BMI (BMI = m / h^2)
 * - m คือมวล , h คือความสูง
 * - ให้ render หน้า web เพื่อแสดงค่า BMI ใน tag <h3>
 *
 *
 *
 * 🚧 Challenge
 * - ใช้ตัวแปรเก็บข้อมูลแทนการ HardCode
 *
 * 🌈 Enjoy the coding journey, and remember:
 *    "The more you code, the more you learn!" 🚀🌐
 **********************************************/
// Logic
function BMI(m, h) {
  return m / h ** 2;
}

// UI
const bmiElement = <h3>BMI : {BMI(70, 1.75).toFixed(2)}</h3>;

// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(bmiElement);
