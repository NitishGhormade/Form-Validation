function Dashboard() {
  return (
    <main className="dashboard">
      <h2>Welcome to Your Dashboard</h2>
      <div className="widget-container">
        <div className="widget">
          <h3>Total Users</h3>
          <p>1,234</p>
        </div>
        <div className="widget">
          <h3>Revenue</h3>
          <p>$56,789</p>
        </div>
        <div className="widget">
          <h3>Active Projects</h3>
          <p>42</p>
        </div>
      </div>
    </main>
  )
}

export default Dashboard

