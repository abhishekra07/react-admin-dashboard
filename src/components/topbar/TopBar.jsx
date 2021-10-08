import './topbar.css'
import { NotificationsNone,Language, Settings } from '@material-ui/icons';

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Code-Labs</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://avatars.githubusercontent.com/u/40576705?v=4" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
