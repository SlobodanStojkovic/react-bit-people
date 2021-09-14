import "./Footer.css";
import { timeSince } from "../../Services/timeSince";

export const Footer = () => {

  let lastMod = new Date(localStorage.getItem("lastModBitPeople"));

  return (
    <footer className=" navbar text-light fixed-bottom footerColor row ">
      <div className="w-75 container-fluid">
        <div className="bitCopyright text-start p-1 mx-5">© 2021 Copyright BIT</div>
        <div className="lastModifiedDiv text-end p-1 mx-5 ">Last update: {timeSince(lastMod)}</div>
      </div>
    </footer>
  );
};
