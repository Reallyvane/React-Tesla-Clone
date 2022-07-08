import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { selectCars } from "./features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [menuStatus, setMenuStatus] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="logo" />
      </a>

      <Selection>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="#">
              {car}
            </a>
          ))}
      </Selection>
      <Menu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
      </Menu>
      <Menufixed onClick={() => setMenuStatus(true)}>
        <a href="#">Menu</a>
      </Menufixed>
      <MenuNav show={menuStatus}>
        <MenuClose>
          <MenuCloseStyle onClick={() => setMenuStatus(false)}>
            <FontAwesomeIcon icon={faClose}> </FontAwesomeIcon>
          </MenuCloseStyle>
        </MenuClose>

        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-In</a>
        </li>
        <li>
          <a href="#">Test Drive</a>
        </li>
        <li>
          <a href="#">Insurance</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Semi</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">Powerwall</a>
        </li>
        <li>
          <a href="#">Commercial Energy</a>
        </li>
        <li>
          <a href="#">Utilities</a>
        </li>
        <li>
          <a href="#">Find Us</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Investor Relations</a>
        </li>
        <LngSelector>
          <Globe>
            <FontAwesomeIcon icon={faGlobe}> </FontAwesomeIcon>
          </Globe>
          <p>
            United States <span>English</span>
          </p>
        </LngSelector>
      </MenuNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 32px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 35px;
  top: 0;
  left: 0;
  right: 0;
  background:rgba(223, 240, 255, 0.79);
  z-index: 1;
  img {
    cursor: pointer;
    width: 120px;
    height: 24px;
  }
`;

const Selection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 500;
    font-size: 14px;
    padding: 10px 20px;
    flex-wrap: no-wrap;
    cursor: pointer;
  }

  a:hover {
    background-color: rgba(244, 244, 244, 1);
    border-radius: 20px;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 500;
    font-size: 14px;
    padding: 10px 10px;
    margin-right: 10px;
  }
  a:hover {
    background-color: rgba(244, 244, 244, 1);
    border-radius: 20px;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

const Menufixed = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 500;
    font-size: 14px;
    padding: 10px 10px;
    margin-right: 10px;
  }

  a:hover {
    background-color: rgba(244, 244, 244, 0.65);
    border-radius: 20px;
  }
`;

const MenuNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  width: 300px;
  z-index: 2;
  list-style: none;
  padding: 20px 30px;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
  li {
    padding: 15px 0px;
    font-size: 14px;
    font-weight: 500;
    padding-left: 15px;
  }

  li:hover {
    background-color: rgba(244, 244, 244, 0.65);
    border-radius: 20px;
  }

`;

const MenuClose = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const MenuCloseStyle = styled.div`
  cursor: pointer;
`;

const LngSelector = styled.div`
  display: flex;
  justify-content: start;
  padding: 10px 20px;

  p {
    font-weight: 600;
    font-size: 14px;
  }

  p:hover {
    cursor: pointer;
  }

  span {
    display: flex;
    font-size: 12px;
    font-weight: 500;
  }

  :hover {
    background-color: rgba(244, 244, 244, 0.65);
    border-radius: 20px;
  }
`;

const Globe = styled.div`
  margin-right: 10px;
`;