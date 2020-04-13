import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import dashBoardHeader from '../Components/dashBoardHeader';
import { logUserOut } from '../../../ignitus-Authentication/ignitus-CommonLoginInterface/actions';

const mapStateToProps = state => ({ state });
const mapDispatchToProps = dispatch => bindActionCreators({ logUserOut }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(dashBoardHeader);
