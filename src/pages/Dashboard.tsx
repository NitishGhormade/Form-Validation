import { useState, useEffect } from "react"

const Dashboard = () => {
  const [stats, setStats] = useState({ users: 0, posts: 0, comments: 0 })

  useEffect(() => {
    fetch("/api/stats")
      .then((response) => response.json())
      .then((data) => setStats(data))
  }, [])

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="stats">
        <div className="stat-card">
          <h3>Users</h3>
          <p>{stats.users}</p>
        </div>
        <div className="stat-card">
          <h3>Posts</h3>
          <p>{stats.posts}</p>
        </div>
        <div className="stat-card">
          <h3>Comments</h3>
          <p>{stats.comments}</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

