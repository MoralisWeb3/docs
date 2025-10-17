import React from "react";
import SearchBar from "@theme/SearchBar";
import NavbarSearch from "@theme/Navbar/Search";

export default function SearchNavbarItem({ mobile, className }) {
    if (mobile) {
        return null;
    }
    return (
        <>
            <NavbarSearch className={className}>
                <div
                    style={{
                        display: "flex",
                        gap: ".5rem",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <SearchBar />
                </div>
            </NavbarSearch>
        </>
    );
}
