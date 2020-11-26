import React from 'react';
import { connect } from 'react-redux';
import './styles/Colors.css';
import { selectColor } from '../actions/colors';

class Colors extends React.Component {
    renderColors() {
        const { colors } = this.props;
        return colors.map(c => {
            return (
                <div class="square"
                    onClick={() => this.props.selectColor(c)}
                    style={{backgroundColor: `${c}`}}>
                    <div>{c}</div>
                </div>
            )
        })
    }

    renderShowColor () {
        const { selectedColor } = this.props;
        if (!selectedColor)
            return <h1>{this.props.temp}</h1>
        return <div className="show-color" style={{ backgroundColor: selectedColor}}></div>;
    }

    render () {
        console.log(this.props, 'props');
        // const { selectedColor } = this.props;
        return (
            <div>
                <div className="container">
                    {this.renderColors()}
                </div>
                {this.renderShowColor()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = dispatch => {
    return {
        selectColor: (c) => dispatch({ type: 'SELECT_COLOR', payload: (c) })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Colors);