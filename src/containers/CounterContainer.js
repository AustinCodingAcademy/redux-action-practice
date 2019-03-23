import { connect } from 'react-redux';
import counter from "../components/Counter";


function mapStateToProps(state){
  return {
    count: state.currentCount
  }
}

export default connect(mapStateToProps)(counter);
