import "./footer.scss";
import logo from "../../assets/images/logo.svg";
import { NavLink, Link } from "react-router-dom";
import React from "react";
import { useFetchData } from "../../hooks/useFetchData/useFetchData.jsx";
import Card from "../card/card.jsx";

const Footer = () => {
  const { data: services, isLoading: isLoadingServices } = useFetchData(
    "/services",
    "serviceCategory"
  );
  const { data: servicesCategories, isLoading: isLoadingCategories } =
    useFetchData("/service-categories");

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-body">
          <NavLink className="footer-logo G-flex" to="/home">
            <img src={logo} alt="" />
          </NavLink>

          <div className="footer-cnt G-flex">
            <nav className="footer-menu">
              <ul className="footer-menu-list G-flex-column">
                <li className="footer-menu-item">
                  <NavLink to={"/services"} className="footer-menu-link">
                    Услуги
                  </NavLink>
                </li>
                <li className="footer-menu-item">
                  <NavLink to={"/products"} className="footer-menu-link">
                    Продукты
                  </NavLink>
                </li>
                <li className="footer-menu-item">
                  <NavLink to={"/vacancies"} className="footer-menu-link">
                    Вакансии
                  </NavLink>
                </li>
                <li className="footer-menu-item">
                  <NavLink to={"/company"} className="footer-menu-link">
                    О компании
                  </NavLink>
                </li>
              </ul>
            </nav>

            {isLoadingServices ? (
              <div className="loading">Загрузка...</div>
            ) : servicesCategories.length === 0 ? (
              <div className="null-products">
                Нет продуктов в этой категории.
              </div>
            ) : (
              servicesCategories.map((category) => (
                <div
                  className="outsourcing-list G-flex-column"
                  key={category.id}
                >
                  <h2 className="outsourcing-title">{category.name}</h2>

                  {services
                    .filter(
                      (service) =>
                        service?.serviceCategory?.name === category.name
                    )
                    .map((item, index) => (
                      <Link
                        key={index}
                        to={`/servicesDetails/${item.documentId}`}
                        className="outsourcing-item"
                      >
                        {item.title}
                      </Link>
                    ))}
                </div>
              ))
            )}

    

            <div className="footer-links G-flex">
              <a target="blank" className="footer-link" href="https://docs.google.com/document/d/1WiUZt5YHyH8X9rTKlNfaC5qjIbMPVWmjOi-th4n-3GA/edit?usp=sharing">
                Политика обработки персональных данных
              </a>
              {/* <NavLink className="footer-link" to={"/"}>
                Управление качеством
              </NavLink>
              <NavLink className="footer-link" to={"/"}>
                Управление рисками
              </NavLink> */}
            </div>

            <div className="footer-clue">
              <p>Copyright © ДИОК, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
