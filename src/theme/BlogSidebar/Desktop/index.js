import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { translate } from "@docusaurus/Translate";
import styles from "./styles.module.css";
export default function BlogSidebarDesktop({ sidebar }) {
  return (
    <aside className="col col--3">
      <nav
        className={clsx(styles.sidebar, "thin-scrollbar")}
        aria-label={translate({
          id: "theme.blog.sidebar.navAriaLabel",
          message: "Blog recent posts navigation",
          description: "The ARIA label for recent posts in the blog sidebar",
        })}
      >
        {Object.keys(sidebar).map((month) => {
          return (
            <>
              <div
                className={clsx(styles.sidebarItemTitle, "margin-bottom--md")}
              >
                {month}
              </div>
              <ul className={clsx(styles.sidebarItemList, "clean-list")}>
                {sidebar[month].map((item) => (
                  <li key={item.permalink} className={styles.sidebarItem}>
                    <Link
                      isNavLink
                      to={item.permalink}
                      className={styles.sidebarItemLink}
                      activeClassName={styles.sidebarItemLinkActive}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          );
        })}
      </nav>
    </aside>
  );
}
