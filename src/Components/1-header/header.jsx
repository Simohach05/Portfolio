import { useState } from 'react';
import './header.css';
const Header = ()=>{
    const [showModal,setshowModal]= useState(false);
    return  (
        <header className=" flex">
         <button onClick={() =>{
            setshowModal(true)
         }} className="Menu">Show</button>
         <div/>
            
         <nav>
                <ul className="flex">
                    <li><a href="">About</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Speaking</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
          </nav>

          <button>light</button>

           {showModal && (
            <div className="fixed">
              <ul className="modal">
                <li><bitton onClick={ ()=> {
                    setshowModal(false)
                }}>close</bitton></li>
                  <li><a href="">About</a></li>
                  <li><a href="">Projects</a></li>
                  <li><a href="">Speaking</a></li>
                  <li><a href="">Contact</a></li>
              </ul>
            </div>
           )}

        </header>
      );
};
export default Header;