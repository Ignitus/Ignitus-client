import React from 'react';
import '../Styles/style.scss';
import { withErrorBoundary } from '../../ignitus-Internals';
import DashBoardProfileSection from '../../ignitus-Dashboard-Profile-Section';
import DashboardSidebar from '../../ignitus-Dashboard-Sidebar';
import DashboardWritePost from '../../ignitus-Dashboard-Write-Post';
import DashboardViewPost from '../../ignitus-Dashboard-View-Post';
import DashboardChatlist from '../../ignitus-Dashboard-Chatlist';
import DashboardMenuItems from '../../ignitus-Student-Dashboard-MenuItems';

const Dashboard = () => (
  <div className="container marginTop dashboard-container">
    <div className="left-section">
      <DashBoardProfileSection.components.dashBoardProfileSection />
      <DashboardSidebar.components.dashboardSidebar />
    </div>
    <div className="center-section">
      <DashboardWritePost.components.dashBoardWritePost />
      <DashboardViewPost.components.dashBoardViewPost />
    </div>
    <div className="right-section">
      <DashboardMenuItems.components.dashboardMenuItems />
      <DashboardChatlist.components.dashBoardChatlist />
    </div>
  </div>
);

export default withErrorBoundary(Dashboard);
