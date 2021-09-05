import "./Footer.css";

export const Footer = () => {

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
 

  return (
    <footer className="text-light fixed-bottom footerColor row">
      <div className="bitCopyright text-start p-3 mx-5 col">© 2021 Copyright BIT</div>
      <div className="lastModifiedDiv p-3 mr-1 col">Last update: {timeSince(lastMod)} ago</div>
    </footer>
  );
};
