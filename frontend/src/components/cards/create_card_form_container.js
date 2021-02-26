import { connect } from 'react-redux';
import { clearCardErrors, createCard } from '../../actions/card_actions';
// import { getAllUserCards } from '../../reducers/selectors';
import CreateCardForm from './create_card_form';
import { closeModal } from '../../actions/modal_actions';



const mapStateToProps = (state) => {
    return {
        // cards: getAllUserCards(state), //TODO - check if this selector gets current users cards for index
        currentUser: state.session.user,
        errors: Object.values(state.errors.cards),
        formType: 'createCard'
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createCard: card => dispatch(createCard(card)),
        clearCardErrors: () => dispatch(clearCardErrors()),
        closeModal: () => dispatch(closeModal()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCardForm);