import React from 'react';
 import svecw from '../vishnucollege.jpg';
const Home = () => {
    return (
        
        <div>
            
            {/* <img src="/svecw.png"/> */}
            <br/>
            <br/>
            <h3 align="center">About SVECW</h3>
            <br/>
            <img src={svecw} style={{width:'1350px',height:'500px'}} />
            <br/>
            <br/>
            <hr/>
            <br/>
            <h5>SVECW, a higher-education institution set up exclusively for women students, provides an excellent opportunity to them for acquiring specific skills and knowledge, fostering their creativity and nurturing their innovative prowess leading to their intellectual development.</h5>
            <h5>Vision, Mission & Values (VMV)</h5>
            <h4 className='text-secondary' >Vision</h4>
            <p>Transform the society through excellence in Education, Community empowerment and sustained Environmental protection.</p>
            <h4 className='text-secondary' >Mission </h4>
            <p align="left">
                <ul>
                <li>To achieve Academic excellence through innovative learning practices</li>
                <li>To instill self confidence among rural students by supplementing with co-curricular and extra-curricular activities</li>
                <li>To inculcate discipline and values among students</li>
                <li>To establish centers for Institute Industry partnership</li>
                <li>To extend financial assistance for the economically weaker sections</li>
                <li>To support environment friendly Green Practices</li>
                <li>Creating innovation hubs</li>
                </ul>
            </p>
            <h4 className='text-secondary' >Values - Quality Policy </h4>

            <p align="left">
                <ul>
                <li>We strive for excellence in all that we do in order to model success for our students</li>
                <li>We focus on students' success and satisfaction and meeting the needs of the community</li>
                <li>We take pride in the quality of our organization and work, and we value, originality, integrity, consistency, and attention to detail</li>
                <li>We stay abreast of ever-changing youth culture, emerging communication technologies and design trends</li>
                <li>To extend financial assistance for the economically weaker sections</li>
                <li>We set benchmarks and model high quality standards for students, faculty, staff, and community partners</li>
                <li>We lay utmost importance on discipline, punctuality, personal values and healthy practices</li>
                </ul>
            </p>
        </div>
            
            
    );
};

export default Home;