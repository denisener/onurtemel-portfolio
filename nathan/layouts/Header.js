"use client";
import Link from "next/link";

const Header = ({
  activePage,
  menus = [
    { id: 1, href: "/", text: "Home" },
    { id: 2, href: "/about", text: "About Me" },
    { id: 3, href: "/services", text: "What I Do" },
    { id: 4, href: "/works", text: "Works" },
    { id: 5, href: "/blog", text: "Blog" },
    { id: 6, href: "/contact", text: "Hire Me" },
  ],
  showBlog = true,
  extraClass = "",
}) => {
  const filteredMenus = showBlog === false
    ? menus.filter((item) => item.href !== "/blog")
    : menus;

  return (
    <div className={`d-menu-1 wow ${extraClass}`} data-wow-delay=".3s">
      <ul>
        {filteredMenus.map((item, index) => (
          <li
            key={index}
            className={`${activePage == item.id ? "active" : ""} menu-item-${
              item.id
            }`}
          >
            <Link href={item.href}>
              {activePage ===
              (item.href === "/" ? "home" : item.href.slice(1)) ? (
                <span>{item.href === "/" ? "Home" : activePage}</span>
              ) : (
                item.text
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Header;
