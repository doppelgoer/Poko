/* eslint-disable */
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../css/body.css'


function Body(props) {
    // console.log('props.data', props.data)

    // let content = props.data.map((test) =>
    //     <div key={test.idx}>
    //         <div >{test.title}</div>
    //         <div>{test.contents}</div>
    //     </div>

    // )
    return (
        <div className="body">
            <Button variant="outlined" color="primary">
                Primary
            </Button>
            {/* {content} */}
        </div>
    )
}

export default Body;