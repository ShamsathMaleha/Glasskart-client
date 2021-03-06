import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Glass from '../Glass/Glass';


const Glasses = () => {

    const [glasses, setGlasses] = useState([])



    useEffect(() => {
        fetch('https://immense-peak-94370.herokuapp.com/glasses')
            .then(res => res.json())
            .then(data => setGlasses(data))
    }, [])

    const glassData = glasses.slice(0,8)
    return (
        <div>
          <h1>Most Wanted Glasses</h1>
            {
                !glasses.length ?  
                <div className="text-center mt-5">
                    <Spinner animation="grow" />
                </div>
           :

           <Container >

               
<Row xs={1} md={2} lg={4} className="g-4  my-5">
                    {glassData.map((glass, idx) => (
                        <Glass

                            glass={glass}
                        />
                    ))}
                </Row>
           </Container>
                
                }
                </div>
    );
};

export default Glasses;