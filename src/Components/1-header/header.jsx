import './header.css';

const Header = ()=>{
    return  (
        <header className=" flex">
         <button className="Menu">Show</button>
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



          <div className="fixed">
            
              <ul className="modal">
                  <li><a href="">About</a></li>
                  <li><a href="">Projects</a></li>
                  <li><a href="">Speaking</a></li>
                  <li><a href="">Contact</a></li>
             </ul>

          </div>
         

        </header>
    );
};
export default Header;