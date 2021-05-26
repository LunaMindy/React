import PropTypes from "prop-types";

function FunTypeProps(props) {
    // console.log("함수",props);
    // console.log("함수",props.match);

    return(
        <div className="card">
            <div className="card-header">
            FunTypeProps
             </div>
            <div className="card-body">
              <div> name: {props.name}</div> 
              <div> version: {props.version}</div>  {/* 매개변수를 가지고 바로접근하는 것이기 때문에 this 안붙인다. */}
              {props.children}
             </div>
        </div>

    );
}

FunTypeProps.defaultProps = {
    version: 17
};

FunTypeProps.propTypes = {
    name: PropTypes.string.isRequired,
    version: PropTypes.number
};

export default FunTypeProps;