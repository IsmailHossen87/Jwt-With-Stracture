import React from 'react';
import Banner from './Banner';
import MyPostedJobs from '../Pages/MyPostedJobs';

const Home = () => {
    return (
        <div className='my-10 '>
            {/* <Banner></Banner> */}
            <MyPostedJobs></MyPostedJobs>
        </div>
    );
};

export default Home;