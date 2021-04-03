function App() {
    return (
        <div>
            <div className="navbar">
                {/* nav left */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link">
                            <i className="fas fa-bars" onClick="collapseSidebar()" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <img
                            src="assets/AT-pro-black.png"
                            alt="ATPro logo"
                            className="logo logo-light"
                        />
                        <img
                            src="assets/AT-pro-white.png"
                            alt="ATPro logo"
                            className="logo logo-dark"
                        />
                    </li>
                </ul>
                {/* end nav left */}
                {/* form */}
                <form className="navbar-search">
                    <input
                        type="text"
                        name="Search"
                        className="navbar-search-input"
                        placeholder="What you looking for..."
                    />
                    <i className="fas fa-search" />
                </form>
                {/* end form */}
                {/* nav right */}
                <ul className="navbar-nav nav-right">
                    <li className="nav-item mode">
                        <a className="nav-link" href="/#" onclick="switchTheme()">
                            <i className="fas fa-moon dark-icon" />
                            <i className="fas fa-sun light-icon" />
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link">
                            <i
                                className="fas fa-bell dropdown-toggle"
                                data-toggle="notification-menu"
                            />
                            <span className="navbar-badge">15</span>
                        </a>
                        <ul id="notification-menu" className="dropdown-menu notification-menu">
                            <div className="dropdown-menu-header">
                                <span>Notifications</span>
                            </div>
                            <div className="dropdown-menu-content overlay-scrollbar scrollbar-hover">
                                <li className="dropdown-menu-item">
                                    <a href="#" className="dropdown-menu-link">
                                        <div>
                                            <i className="fas fa-gift" />
                                        </div>
                                        <span>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit.
                                            <br />
                                            <span>15/07/2020</span>
                                        </span>
                                    </a>
                                </li>
                                <li className="dropdown-menu-item">
                                    <a href="#" className="dropdown-menu-link">
                                        <div>
                                            <i className="fas fa-tasks" />
                                        </div>
                                        <span>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit.
                                            <br />
                                            <span>15/07/2020</span>
                                        </span>
                                    </a>
                                </li>
                                <li className="dropdown-menu-item">
                                    <a href="#" className="dropdown-menu-link">
                                        <div>
                                            <i className="fas fa-gift" />
                                        </div>
                                        <span>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit.
                                            <br />
                                            <span>15/07/2020</span>
                                        </span>
                                    </a>
                                </li>
                                <li className="dropdown-menu-item">
                                    <a href="#" className="dropdown-menu-link">
                                        <div>
                                            <i className="fas fa-tasks" />
                                        </div>
                                        <span>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit.
                                            <br />
                                            <span>15/07/2020</span>
                                        </span>
                                    </a>
                                </li>
                                <li className="dropdown-menu-item">
                                    <a href="#" className="dropdown-menu-link">
                                        <div>
                                            <i className="fas fa-gift" />
                                        </div>
                                        <span>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit.
                                            <br />
                                            <span>15/07/2020</span>
                                        </span>
                                    </a>
                                </li>
                                <li className="dropdown-menu-item">
                                    <a href="#" className="dropdown-menu-link">
                                        <div>
                                            <i className="fas fa-tasks" />
                                        </div>
                                        <span>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit.
                                            <br />
                                            <span>15/07/2020</span>
                                        </span>
                                    </a>
                                </li>
                                <li className="dropdown-menu-item">
                                    <a href="#" className="dropdown-menu-link">
                                        <div>
                                            <i className="fas fa-gift" />
                                        </div>
                                        <span>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit.
                                            <br />
                                            <span>15/07/2020</span>
                                        </span>
                                    </a>
                                </li>
                                <li className="dropdown-menu-item">
                                    <a href="#" className="dropdown-menu-link">
                                        <div>
                                            <i className="fas fa-tasks" />
                                        </div>
                                        <span>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit.
                                            <br />
                                            <span>15/07/2020</span>
                                        </span>
                                    </a>
                                </li>
                                <li className="dropdown-menu-item">
                                    <a href="#" className="dropdown-menu-link">
                                        <div>
                                            <i className="fas fa-gift" />
                                        </div>
                                        <span>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit.
                                            <br />
                                            <span>15/07/2020</span>
                                        </span>
                                    </a>
                                </li>
                                <li className="dropdown-menu-item">
                                    <a href="#" className="dropdown-menu-link">
                                        <div>
                                            <i className="fas fa-tasks" />
                                        </div>
                                        <span>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit.
                                            <br />
                                            <span>15/07/2020</span>
                                        </span>
                                    </a>
                                </li>
                                <li className="dropdown-menu-item">
                                    <a href="#" className="dropdown-menu-link">
                                        <div>
                                            <i className="fas fa-gift" />
                                        </div>
                                        <span>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit.
                                            <br />
                                            <span>15/07/2020</span>
                                        </span>
                                    </a>
                                </li>
                                <li className="dropdown-menu-item">
                                    <a href="#" className="dropdown-menu-link">
                                        <div>
                                            <i className="fas fa-tasks" />
                                        </div>
                                        <span>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                                            elit.
                                            <br />
                                            <span>15/07/2020</span>
                                        </span>
                                    </a>
                                </li>
                            </div>
                            <div className="dropdown-menu-footer">
                                <span>View all notifications</span>
                            </div>
                        </ul>
                    </li>
                    <li className="nav-item avt-wrapper">
                        <div className="avt dropdown">
                            <img
                                src="assets/tuat.jpg"
                                alt="User image"
                                className="dropdown-toggle"
                                data-toggle="user-menu"
                            />
                            <ul id="user-menu" className="dropdown-menu">
                                <li className="dropdown-menu-item">
                                    <a className="dropdown-menu-link">
                                        <div>
                                            <i className="fas fa-user-tie" />
                                        </div>
                                        <span>Profile</span>
                                    </a>
                                </li>
                                <li className="dropdown-menu-item">
                                    <a href="#" className="dropdown-menu-link">
                                        <div>
                                            <i className="fas fa-cog" />
                                        </div>
                                        <span>Settings</span>
                                    </a>
                                </li>
                                <li className="dropdown-menu-item">
                                    <a href="#" className="dropdown-menu-link">
                                        <div>
                                            <i className="far fa-credit-card" />
                                        </div>
                                        <span>Payments</span>
                                    </a>
                                </li>
                                <li className="dropdown-menu-item">
                                    <a href="#" className="dropdown-menu-link">
                                        <div>
                                            <i className="fas fa-spinner" />
                                        </div>
                                        <span>Projects</span>
                                    </a>
                                </li>
                                <li className="dropdown-menu-item">
                                    <a href="#" className="dropdown-menu-link">
                                        <div>
                                            <i className="fas fa-sign-out-alt" />
                                        </div>
                                        <span>Logout</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                {/* end nav right */}
            </div>
            {/* end navbar */}
            {/* sidebar */}
            <div className="sidebar">
                <ul className="sidebar-nav">
                    <li className="sidebar-nav-item">
                        <a href="#" className="sidebar-nav-link">
                            <div>
                                <i className="fas fa-tachometer-alt" />
                            </div>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li className="sidebar-nav-item">
                        <a href="#" className="sidebar-nav-link active">
                            <div>
                                <i className="fab fa-accusoft" />
                            </div>
                            <span>Lorem</span>
                        </a>
                    </li>
                    <li className="sidebar-nav-item">
                        <a href="#" className="sidebar-nav-link">
                            <div>
                                <i className="fas fa-tasks" />
                            </div>
                            <span>Morbi</span>
                        </a>
                    </li>
                    <li className="sidebar-nav-item">
                        <a href="#" className="sidebar-nav-link">
                            <div>
                                <i className="fas fa-spinner" />
                            </div>
                            <span>Praesent</span>
                        </a>
                    </li>
                    <li className="sidebar-nav-item">
                        <a href="#" className="sidebar-nav-link">
                            <div>
                                <i className="fas fa-check-circle" />
                            </div>
                            <span>Pellentesque</span>
                        </a>
                    </li>
                    <li className="sidebar-nav-item">
                        <a href="#" className="sidebar-nav-link">
                            <div>
                                <i className="fas fa-bug" />
                            </div>
                            <span>Morbi</span>
                        </a>
                    </li>
                    <li className="sidebar-nav-item">
                        <a href="#" className="sidebar-nav-link">
                            <div>
                                <i className="fas fa-chart-line" />
                            </div>
                            <span>Praesent</span>
                        </a>
                    </li>
                    <li className="sidebar-nav-item">
                        <a href="#" className="sidebar-nav-link">
                            <div>
                                <i className="fas fa-book-open" />
                            </div>
                            <span>Pellentesque</span>
                        </a>
                    </li>
                    <li className="sidebar-nav-item">
                        <a href="#" className="sidebar-nav-link">
                            <div>
                                <i className="fas fa-adjust" />
                            </div>
                            <span>Morbi</span>
                        </a>
                    </li>
                    <li className="sidebar-nav-item">
                        <a href="#" className="sidebar-nav-link">
                            <div>
                                <i className="fab fa-algolia" />
                            </div>
                            <span>Praesent</span>
                        </a>
                    </li>
                    <li className="sidebar-nav-item">
                        <a href="#" className="sidebar-nav-link">
                            <div>
                                <i className="fas fa-audio-description" />
                            </div>
                            <span>Pellentesque</span>
                        </a>
                    </li>
                </ul>
            </div>
            {/* end sidebar */}
            {/* main content */}
            <div className="wrapper">
                <div className="row">
                    <div className="col-3 col-m-6 col-sm-6">
                        <div className="counter bg-primary">
                            <p>
                                <i className="fas fa-tasks" />
                            </p>
                            <h3>100+</h3>
                            <p>To do</p>
                        </div>
                    </div>
                    <div className="col-3 col-m-6 col-sm-6">
                        <div className="counter bg-warning">
                            <p>
                                <i className="fas fa-spinner" />
                            </p>
                            <h3>100+</h3>
                            <p>In progress</p>
                        </div>
                    </div>
                    <div className="col-3 col-m-6 col-sm-6">
                        <div className="counter bg-success">
                            <p>
                                <i className="fas fa-check-circle" />
                            </p>
                            <h3>100+</h3>
                            <p>Completed</p>
                        </div>
                    </div>
                    <div className="col-3 col-m-6 col-sm-6">
                        <div className="counter bg-danger">
                            <p>
                                <i className="fas fa-bug" />
                            </p>
                            <h3>100+</h3>
                            <p>Issues</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8 col-m-12 col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h3>Table</h3>
                                <i className="fas fa-ellipsis-h" />
                            </div>
                            <div className="card-content">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Project</th>
                                            <th>Manager</th>
                                            <th>Status</th>
                                            <th>Due date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>React</td>
                                            <td>Tran Anh Tuat</td>
                                            <td>
                                                <span className="dot">
                                                    <i className="bg-success" />
                                                    Completed
                                                </span>
                                            </td>
                                            <td>17/07/2020</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Vue</td>
                                            <td>Bui Nhu Sang</td>
                                            <td>
                                                <span className="dot">
                                                    <i className="bg-warning" />
                                                    In progress
                                                </span>
                                            </td>
                                            <td>18/07/2020</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Laravel</td>
                                            <td>Phan Nhat Truong</td>
                                            <td>
                                                <span className="dot">
                                                    <i className="bg-warning" />
                                                    In progress
                                                </span>
                                            </td>
                                            <td>17/07/2020</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Django</td>
                                            <td>Le Anh Tuan</td>
                                            <td>
                                                <span className="dot">
                                                    <i className="bg-danger" />
                                                    Delayed
                                                </span>
                                            </td>
                                            <td>07/07/2020</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>MEAN</td>
                                            <td>John Evan</td>
                                            <td>
                                                <span className="dot">
                                                    <i className="bg-primary" />
                                                    Pending
                                                </span>
                                            </td>
                                            <td>20/08/2020</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>MERN</td>
                                            <td>Robert</td>
                                            <td>
                                                <span className="dot">
                                                    <i className="bg-primary" />
                                                    Pending
                                                </span>
                                            </td>
                                            <td>20/08/2020</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-m-12 col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h3>Progress bar</h3>
                                <i className="fas fa-ellipsis-h" />
                            </div>
                            <div className="card-content">
                                <div className="progress-wrapper">
                                    <p>
                                        Less than 1 hour
                                        <span className="float-right">50%</span>
                                    </p>
                                    <div className="progress">
                                        <div className="bg-success" style={{ width: "50%" }} />
                                    </div>
                                </div>
                                <div className="progress-wrapper">
                                    <p>
                                        1 - 3 hours
                                        <span className="float-right">60%</span>
                                    </p>
                                    <div className="progress">
                                        <div className="bg-primary" style={{ width: "60%" }} />
                                    </div>
                                </div>
                                <div className="progress-wrapper">
                                    <p>
                                        More than 3 hours
                                        <span className="float-right">40%</span>
                                    </p>
                                    <div className="progress">
                                        <div className="bg-warning" style={{ width: "40%" }} />
                                    </div>
                                </div>
                                <div className="progress-wrapper">
                                    <p>
                                        More than 6 hours
                                        <span className="float-right">20%</span>
                                    </p>
                                    <div className="progress">
                                        <div className="bg-danger" style={{ width: "20%" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-m-12 col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h3>Chartjs</h3>
                            </div>
                            <div className="card-content">
                                <canvas id="myChart" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end main content */}
            {/* import script */}
            {/* end import script */}
        </div>
    );
}

export default App;
