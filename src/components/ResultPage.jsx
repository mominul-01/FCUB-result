
import BatchInput from './Batch';
import IdInput from './IdInput';
import Program from './Program';
import Semester from './Semester';
import Subject from './Subject';

const ResultPage = () => {
    return (
        <div>
            
            <div className='m-10 p-10 flex bg-gray-300 rounded-lg'>
               
                <Program></Program>
                <Semester></Semester>
                <BatchInput></BatchInput>
                <IdInput></IdInput>

            </div>
            

            <div>
                <Subject></Subject>
            </div>
            

        </div>
    );
};

export default ResultPage;