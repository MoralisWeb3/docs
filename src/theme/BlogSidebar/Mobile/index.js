import React from "react";
import Link from "@docusaurus/Link";
import { NavbarSecondaryMenuFiller } from "@docusaurus/theme-common";
function BlogSidebarMobileSecondaryMenu({ sidebar }) {
  return (
    <ul className="menu__list">
      {Object.keys(sidebar).map((month) => (
        <>
          <div>{month}</div>
          <li key={sidebar[month].permalink} className="menu__list-item">
            {sidebar[month].map((item) => (
              <Link
                isNavLink
                to={item.permalink}
                className="menu__link"
                activeClassName="menu__link--active"
              >
                {item.title}
              </Link>
            ))}
          </li>
        </>
      ))}
    </ul>
  );
}
export default function BlogSidebarMobile(props) {
  return (
    <NavbarSecondaryMenuFiller
      component={BlogSidebarMobileSecondaryMenu}
      props={props}
    />
  );
}
