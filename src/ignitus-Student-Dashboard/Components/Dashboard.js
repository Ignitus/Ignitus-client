import React from 'react';
import '../Styles/style.scss';
import { withErrorBoundary } from '../../ignitus-Internals';
import DashBoardProfileSection from '../../ignitus-Dashboard-Profile-Section';
import DashboardSidebar from '../../ignitus-Dashboard-Sidebar';
import DashboardWritePost from '../../ignitus-Dashboard-Write-Post';
import DashboardChatlist from '../../ignitus-Dashboard-Chatlist';
import DashboardMenuItems from '../../ignitus-Student-Dashboard-MenuItems';

class Dashboard extends React.Component {

  render() {
    return (
      <div className="container marginTop dashboard-container">
        <div className="left-section">
          <DashBoardProfileSection.components.dashBoardProfileSection />
          <DashboardSidebar.components.dashboardSidebar />
        </div>
        <div className="center-section">
          <DashboardWritePost.components.dashBoardWritePost />
        </div>  
        <div>
          <DashboardChatlist.components.dashBoardChatlist />
          <DashboardMenuItems.components.dashboardMenuItems />
        </div>
      </div>
    )
  }
}

export default withErrorBoundary(Dashboard);
