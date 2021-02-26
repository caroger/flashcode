import React, { Component } from 'react';
import { closeModal } from '../../actions/modal_actions';

export default class CreateCardForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            probNum: '',
            rating: '',
            notes: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }


    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }
    componentWillUnmount() {
        this.props.clearCardErrors();
    }

    handleSubmit(e) {
        e.preventDefault();

        const card = this.state;
        this.props.createCard(card).then(this.props.closeModal);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={i}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    componentWillUnmount() {
        this.props.clearCardErrors();
    }

    render() {
        const { probNum, rating, notes } = this.state;

        return (
            <>
                    <div className="create-card-form">
                            <h2 className='create-card-title'>Create A New Flash Card</h2>
                            <form id="new-card-form" onSubmit={this.handleSubmit}>
                                <div  className='create-input-div'>
                                    <label>Problem Number:
                                        <input
                                            className ='problem-num-input'
                                            type="text"
                                            placeholder="Problem ID"
                                            value={probNum}
                                            autoFocus={true}
                                            onChange={this.update('probNum')}
                                        />
                                    </label>
                                 </div>
                                <br/>
                                <div className='create-input-div'>
                                <label>My Rating:
                                <input type='radio' name="rating" value = '1'onChange={
                                    this.update('rating') 
                                }/> Easy
                                 <input type='radio' name="rating" value='2'onChange={
                                    this.update('rating')
                                } /> Medium
                                 <input type='radio' name="rating" value='3' onChange={
                                    this.update('rating')
                                } /> Hard
                                </label>
                                </div>
                                <br/>

                                <div className='create-input-div'id='create-notes-div'>
                                <label>Problem Notes:</label>
                                    <textarea
                                        className='create-text-area'
                                        value={notes}
                                        placeholder="Add notes"
                                        onChange={this.update('notes')}
                                    />
                                
                                 </div>
                                <div className="errors">
                                    {this.renderErrors()}
                                </div>

                                <div className="form-buttons">
                                     <button className='create-button' type="submit" form="new-card-form">Create Card</button>
                                </div>
                            </form>
                            
                    </div>
                    
                   
            </>
        )
    }
}
