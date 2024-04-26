/******************************************************************
 * What's Function Component
 * Definition :  Javascript function that return / render UI(JSX)
 *
 * --------------------------------------------------------------
 * Syntax : Declare
 * --------------------------------------------------------------
 * function MyComponent () {
 * 		return <h1>What Ever you want to render</h1>
 * }
 *
 * --------------------------------------------------------------
 * Syntax : Call
 * --------------------------------------------------------------
 * <MyComponent />
 *
 * --------------------------------------------------------------
 * Benefits
 * --------------------------------------------------------------
 * | 1 | Separation of Concern ⭐️
 * | 2 | Reusable ⭐️
 * | 3 | Composable  ⭐️
 * | 4 | Easy to Maintain ⭐️
 * --------------------------------------------------------------
 *****************************************************************/

/**********************************************
 * DIY : create root from ReactDOM
 **********************************************/
const root = ReactDOM.createRoot(document.getElementById('root'));

/**********************************************
 * Ex-1 : UserProfile
 **********************************************/

const profile = (
  <>
    <h2>Pavit</h2>
    <h3>age : 30</h3>
  </>
);

// Function Component => เครื่องจักรในการผลิต UI (JSX,ReactElement)
function UserProfile() {
  // Logic อะไรที่ใช้เวลา
  return (
    <>
      <h2>Pavit!!!</h2>
      <h3>age : {new Date().toLocaleString()}</h3>
    </>
  );
}
// function App() {
//   return (
//     <div>
//       <h1>My App</h1>
//       <UserProfile />
//     </div>
//   );
// }

// root.render(
//   <>
//     <UserProfile />
//     <UserProfile />
//     <UserProfile />
//   </>
// );
// root.render(UserProfile());
// root.render(<App />);
// 1 Tag ของ Function Component == 1 Call Function
// Key Concept
// 1 Call == 1 UI Snap shot (call แบบ <Tag/>)
// Multiple Call == Multi UI

/**********************************************
 * Ex-2 : CC-DEV Landing Page (Refactor to Component)
 **********************************************/

function Header() {
  return (
    <header className='container header'>
      <nav className='nav'>
        <div className='logo'>
          <h2>CodeCamp</h2>
        </div>
        <div className='nav_menu' id='nav_menu'>
          <ul className='menu_list'>
            <li className='nav_menu_item'>
              <a href='#' className='nav_menu_link'>
                account
              </a>
            </li>
            <li className='nav_menu_item'>
              <a href='#' className='nav_menu_link'>
                about
              </a>
            </li>
            <li className='nav_menu_item'>
              <a href='#' className='nav_menu_link'>
                service
              </a>
            </li>
            <li className='nav_menu_item'>
              <a href='#' className='nav_menu_link'>
                contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
function ButtonGroup() {
  return (
    <div className='btn_wrapper'>
      <button className='btn view_more_btn'>view all pages</button>
      <button className='btn documentation_btn'>documentation</button>
    </div>
  );
}

function Section() {
  return (
    <section className='wrapper'>
      <div className='container'>
        <div className='grid-cols-2'>
          <div className='grid-item-1'>
            <h1 className='main-heading'>
              Welcome to <span>CodeCamp</span>
              <br />
              Develop anything.
            </h1>
            <p className='info-text'>
              Build a beautiful, modern website with flexible components built from scratch.
            </p>
            {/* ButtonGroup */}
            <ButtonGroup />
          </div>
          <div className='grid-item-2'>
            <div className='team_img_wrapper'>
              <img src='https://i.ibb.co/YkbPPn3/team.png' alt='team-photo' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className='app'>
      <Header />
      <Section />
    </div>
  );
}

root.render(<App />); // <App/> == App() == Call Function App 1 ครั้ง

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
