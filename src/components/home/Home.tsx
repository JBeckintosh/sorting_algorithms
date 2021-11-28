import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Home!</h1>

            <nav>
                <Link to="/merge-sort">Merge Sort</Link>
            </nav>

            <Outlet />
        </div>
    )
}

export default Home;
