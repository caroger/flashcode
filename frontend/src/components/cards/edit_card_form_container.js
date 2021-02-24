import React from 'react';
import { connect } from 'react-redux';
import EditCardForm from './edit_card_form';
import { getCard, updateCard } from '../../actions/card_actions';


const mapStateToProps = (state, ownProps) => {
    return {
        card: state.cards[ownProps.match.params.cardId]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getCard: cardId => dispatch(getCard(cardId)),
        updateCard: card => dispatch(updateCard(card))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCardForm);