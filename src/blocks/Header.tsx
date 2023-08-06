import Ball from "../components/ball/Ball";
import {useEffect, useState} from "react";
import BGBallHandle from "../components/BGballHandle/BGballHandle";
import "../assets/style/burgerMenu.css"


const Header = ({ball, handleBall}:{ball:boolean, handleBall:()=>void}) => {

    // make header Fixed
    const [fixedHeader, setFixedHeader] = useState(false)
    const handleScroll = () => {
        if (window.scrollY > 250) {
            setFixedHeader(true)
        }
        else{
            setFixedHeader(false)
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    // active Burger Menu

    const [burgerMenu, setBurgerMenu] = useState(false)

    function handleBurgerMenu(){
        setBurgerMenu(burgerMenu=>!burgerMenu)
    }






    return (
        <header className={"header "+(fixedHeader?"fixed":"block")}>
            {!fixedHeader&&
                <Ball
                    className={"center"}
                    color={"yellow"}
                    top={50}
                    left={50}
                />
            }


            <div className="wrapper">

                {/*show/hide BG balls*/}
                <BGBallHandle
                    className={"bgBallHandle flex"+(burgerMenu?' active':"")}
                    ball={ball}
                    handleBall={handleBall}
                />



                <div className="headerBlock flexBetween">
                    <a className="title logo coloredText1" href="#Header">IKA</a>

                    <div className={"burgerMenu" + (burgerMenu?" active":"")} onClick={handleBurgerMenu}>
                        <div className="burgerStick"></div>
                    </div>

                    <nav className={"menuItem" + (burgerMenu?" active":"")}>
                        <ul className="menuList flex">
                            <li><a className="subTitle" href="#About">About</a></li>
                            <li><a className="subTitle" href="#Projects">Portfolio</a></li>
                            <li><a className="subTitle" href="#Contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;