
import BatchInput from './Batch';
import Program from './Program';
import Semester from './Semester';

const ResultPage = () => {
    return (
        <div>
            
            <div className='m-10 p-10 flex bg-gray-300 rounded-lg'>
               
                <Program></Program>
                <Semester></Semester>
                <BatchInput></BatchInput>

            </div>
            

        </div>
    );
};

export default ResultPage;