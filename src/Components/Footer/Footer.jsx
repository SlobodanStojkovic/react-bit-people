import "./Footer.css";
import { timeSince } from "../../Services/timeSince";

export const Footer = () => {

<<<<<<< HEAD
  let lastMod = new Date(localStorage.getItem("lastModBitPeople2303"));

  function timeSince(date) {

    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }

=======
  let lastMod = new Date(localStorage.getItem("lastModBitPeople"));
>>>>>>> d2f332f8e2ad1606022d748fef049296ab376f55

  return (
    <footer className=" navbar text-light fixed-bottom footerColor row ">
      <div className="w-75 container-fluid">
        <div className="bitCopyright text-start p-1 mx-5">© 2021 Copyright BIT</div>
<<<<<<< HEAD
        <div className="lastModifiedDiv text-end p-1 mx-5 ">Last update: {timeSince(lastMod)} ago</div>
=======
        <div className="lastModifiedDiv text-end p-1 mx-5 ">Last update: {timeSince(lastMod)}</div>
>>>>>>> d2f332f8e2ad1606022d748fef049296ab376f55
      </div>
    </footer>
  );
};
