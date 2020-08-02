import React from 'react';


function Section({students}) {
    return (
        <section>
            <h3>List Of Names</h3>
            <ul>
                {students.map((student, i)=>
                    <li key={i}>{student}</li>
                )}
            </ul>
            {console.log(students)}
        </section>
    )
}

export default Section;