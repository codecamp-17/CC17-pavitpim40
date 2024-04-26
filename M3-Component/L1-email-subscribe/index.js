/**********************************************
 * 🚀 Welcome to the React Practice Lab! 🚀
 *
 *
 * 📝 Problem Statement:
 * - สร้าง Function Component ที่ชื่อว่า EmailSubScribe
 * - นำ Component มา render โดยให้แสดงผลเหมือนกับรูปใน images/example.png
 *
 *
 * 🎯 Objective :
 * - พื้นฐานการเขียน Function Component
 * - การเรียกใช้งาน Function Component
 *
 * 🚧 Challenge : Abstraction, Refactor and Compose
 * - ลองแยก JSX บางส่วนจาก EmailSubscribe ไปสร้างเป็น Component ใหม่
 * - นำ Component ที่เพิ่งสร้างมาแสดงผลใน EmailSubscribe เพื่อให้แสดงเหมือนเดิม
 *
 * 🌈 Enjoy the coding journey, and remember:
 *    "The more you code, the more you learn!" 🚀🌐
 **********************************************/
// 3rd Level
function ContentDetail() {
  return (
    <div className='card__content--detail'>
      <h3>Get Diet and Fitness tips in your box.</h3>
      <p>Eat better and exercise better. Sign up for fitness and Diet newsletter</p>
    </div>
  );
}

function ContentAction() {
  return (
    <div className='card__content--action'>
      <input />
      <button>Subscribe</button>
    </div>
  );
}

// 2nd Level
function Image() {
  return (
    <div className='card__image'>
      <img src='./images/image.jpg' />
    </div>
  );
}

function Content() {
  return (
    <div className='card__content'>
      <ContentDetail />
      <ContentAction />
    </div>
  );
}

// 1st Level
function SubscribeCard() {
  return (
    <div className='card'>
      <Image />
      <Content />
    </div>
  );
}

// Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SubscribeCard />);
