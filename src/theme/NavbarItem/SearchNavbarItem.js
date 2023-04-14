import React from "react";
import SearchBar from "@theme/SearchBar";
import NavbarSearch from "@theme/Navbar/Search";
import { AvatarMain } from "../../components/Avatar";
import Modal from "../../components/Modal";
import { DialogTrigger } from "@site/src/components/Modal/ModalPrimitive";
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
          <Modal>
            <DialogTrigger style={{ background: "none", border: 0 }}>
              <AvatarMain />
            </DialogTrigger>
          </Modal>
        </div>
      </NavbarSearch>
    </>
  );
}
